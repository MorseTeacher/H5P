// Optional developer regression check: npm install --no-save playwright && npx playwright install chromium
// Run: node Why_Did_WWI_Start/test.cjs (from repository root).
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const path=require('node:path');
(async()=>{
 const browser=await chromium.launch({headless:true, executablePath:process.env.CHROME_BIN || undefined, args:process.env.CHROME_BIN ? ['--no-sandbox','--disable-dev-shm-usage'] : []});
 const page=await browser.newPage({viewport:{width:1366,height:1000}});
 const errors=[],requests=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('request',r=>{if(/^https?:/.test(r.url()))requests.push(r.url())});
 await page.context().setOffline(true);
 const url=pathToFileURL(path.join(__dirname,'index.html')).href;
 const click=async s=>page.locator(s).click();
 const next=()=>click('#continue');
 async function quiz(answers){for(const a of answers){await click(`[data-answer="${a}"]`);await next()}}
 async function causes(){for(const a of ['long','trigger','long','long','long']){await click('#'+a);await next()}}
 async function explore(){assert(await page.locator('#allianceCheck').isDisabled());for(const c of ['britain','france','russia','germany','austria','italy','serbia','belgium'])await click(`[data-country="${c}"]`);assert(await page.locator('#allianceCheck').isEnabled());await click('#allianceCheck')}
 async function dossiers(){assert(await page.locator('#sourceCheck').isDisabled());for(const n of [1,2])await click(`[data-dossier="${n}"]`);await click('#sourceCheck')}
 async function timeline(){for(let i=0;i<6;i++){await click(`[data-event="${i}"]`);await next()}}
 await page.goto(url);
 // Native keyboard activation and dialog focus containment / restoration.
 await page.locator('#help').focus();await page.keyboard.press('Enter');assert(await page.locator('#info').evaluate(e=>e.open));await page.keyboard.press('Escape');assert.equal(await page.evaluate(()=>document.activeElement.id),'help');
 await click('#size');assert.equal(await page.locator('#size').getAttribute('aria-pressed'),'true');await click('#size');
 await page.locator('#begin').focus();await page.keyboard.press('Enter');await causes();
 await page.screenshot({path:path.join(__dirname,'../../map.png')});
 await explore();await quiz([0,1,1]);await dossiers();await quiz([0,1,2]);await timeline();await quiz([1,1]);
 assert.match(await page.locator('.score').innerText(),/19\s*\/\s*19/);
 await page.locator('#reflection').fill('Militarism increased fear. The assassination sparked a crisis. Austria-Hungary declared war on Serbia on 28 July.');
 await page.screenshot({path:path.join(__dirname,'../../complete.png')});
 await page.emulateMedia({media:'print'});assert(await page.locator('#reflection').isVisible());await page.emulateMedia({media:'screen'});
 // Cancel and confirm reset; deliberately wrong first answers must not earn points on retries.
 await click('#restart');await page.keyboard.press('Escape');assert.match(await page.locator('.score').innerText(),/19/);await click('#restart');await click('#confirmRestart');await click('#begin');
 await click('#trigger');await click('#trigger');assert.match(await page.locator('#feedback').innerText(),/Try again/);await causes();await explore();
 await click('[data-answer="2"]');await quiz([0,1,1]);await dossiers();await quiz([0,1,2]);await click('[data-event="4"]');await timeline();await quiz([1,1]);assert.match(await page.locator('.score').innerText(),/16\s*\/\s*19/);
 // Text never becomes executable HTML when entered as the final explanation.
 await page.locator('#reflection').fill('<img src=x onerror=alert(1)>');assert.equal(await page.locator('img').count(),0);
 for(const width of [375,768,1366]){await page.setViewportSize({width,height:900});await page.goto(url);await click('#size');assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow at ${width}`);await click('#begin');await causes();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`map overflow at ${width}`)}
 assert.deepEqual(errors,[]);assert.deepEqual(requests,[]);
 console.log('PASS: offline full completion, 19/19 score, error/retry 16/19, exploration gates, keyboard start/dialog, text size, print result, restart, responsive widths, no runtime errors or network requests.');
 await browser.close();
})().catch(e=>{console.error(e);process.exitCode=1});
