# Why Did World War I Start?

A self-contained Year 9 history investigation designed for approximately 10–15 minutes. Students sort long-term causes and the immediate trigger, explore European relationships, investigate Sarajevo, and reconstruct the July Crisis through mobilisation and declarations of war.

## Use in class

1. Download `index.html` from this folder using GitHub's **Download raw file** button. Do not save the GitHub code-view page.
2. Double-click the downloaded file to open it in a modern browser (Chrome, Edge, Firefox or Safari). Only this HTML file is needed. No server, accounts, installation, QLearn or internet connection is required after download.
3. Give students their own copy through your usual school file-sharing system. If a system previews HTML as text, students should download it and open the local copy.
4. Allow about 12–15 minutes, alone or in pairs. Allow additional reading time where needed. Partners explain each answer before clicking.
5. Students show the completion screen and their 2–3 sentence explanation. **Print / save this result** uses the browser's print dialogue, including Save as PDF where available.

The four rounds are causes (about 2 min), alliances (3 min), Sarajevo (3 min), and escalation plus explanation (4–6 min). Timing is a classroom estimate, not a measured student trial. No countdown forces students to rush.

### Debrief

- Why does Italy show that alliances did not automatically make everyone fight?
- Why is mobilising an army different from declaring war?
- What does an ultimatum prove about its sender? What does it not prove about its target?
- Explain one long-term cause and one dated decision using **because** or **therefore**.

## Learning and interaction

- Five visual cause cards, an original schematic locator map and eight country cards.
- Three Sarajevo dossier cards: secondary summary, paraphrased primary document and an explicitly invented hypothetical.
- Six dated escalation cards with immediate explanations of their consequences.
- Nineteen first-attempt scoring checks; retry until correct. Exploration is not scored. A wrong answer cannot earn a first-attempt point on retry.
- Final cause-and-effect writing prompt with optional sentence starters; writing is teacher assessed.
- Text stays in browser memory only. No tracking, external libraries, fonts, media requests, accounts, storage or result submission. Refreshing or closing loses progress. Restart asks for confirmation.

## Historical accuracy and deliberate simplifications

This introduces the planner's Week 1 causes and cause-and-effect/source skills. It does not replace the full six-week unit or teach every declaration of war.

- MAIN is a useful organising device, not a claim that all causes were equally important or that war was inevitable.
- Franz Ferdinand **and Sophie** were killed on **28 June 1914**, in Sarajevo, Bosnia, under Austro-Hungarian rule. Princip was a Bosnian Serb nationalist. Support from some Serbian officers does not establish that the whole Serbian government ordered the murder.
- Germany, Austria-Hungary and Italy belonged to the pre-war Triple Alliance. Italy remained neutral in 1914 and entered against Austria-Hungary in 1915.
- France and Russia had a formal alliance. Britain's Entente agreements differed from this; Serbia was supported by Russia but was not a Triple Entente member. Neutral Belgium was not in either grouping.
- Key sequence: German backing (5–6 July); ultimatum and reply (23–25 July); Austro-Hungarian declaration on Serbia (28 July); Russian general mobilisation order (30 July); German declarations on Russia (1 August) and France (3 August); invasion of Belgium and British declaration (4 August).
- Mobilisation was not itself a declaration of war. Government decisions and military planning widened the conflict. The timeline selects major steps and omits other mobilisations, mediation attempts and later declarations.
- Belgium mattered to Britain's decision alongside concern for France and the balance of power. Australia's status as a British dominion put it at war when Britain declared war; the declaration occurred on 5 August by Australian time.
- The original schematic map has no political borders or precise empire extents. It shows relative locations and relationships, not military routes. It is explicitly a teaching illustration, not historical evidence. The United Kingdom is labelled Britain for readability.
- No historical speech or document wording has been invented. The ultimatum card is a labelled simplified paraphrase of its demands and deadline. The game offers no pretend choice that changes the actual historical sequence.

### References checked 21 October 2026

- [NZHistory / Manatū Taonga, Origins of the war](https://nzhistory.govt.nz/war/first-world-war-overview/origins): background tensions, alliances and planning.
- [Annika Mombauer / The Open University, The assassination of Franz Ferdinand](https://www.open.edu/openlearn/history-the-arts/history/world-history/the-assassination-franz-ferdinand) (2019): Sarajevo and the plot.
- [Mombauer, The July Crisis: A chronology](https://www.open.edu/openlearn/history-the-arts/history/world-history/the-july-crisis-chronology) (2024): chronology and differing commitments. Its entry placing the Belgian invasion on 3 August is not followed; the game uses 4 August, cross-checked below.
- [Deutsches Historisches Museum, Die Juli-Krise 1914](https://www.dhm.de/lemo/kapitel/erster-weltkrieg/kriegsverlauf/juli-krise-1914): declarations, invasion and British entry.
- [Great War Primary Documents Archive, Austro-Hungarian Ultimatum](https://www.gwpda.org/1914/austro-hungarian-ultimatum.html) (23 July 1914): translated primary source, especially points 5–6 and deadline; also available through [FirstWorldWar.com](https://www.firstworldwar.com/source/austrianultimatum.htm).
- [Australian War Memorial, First World War 1914–18](https://www.awm.gov.au/articles/atwar/first-world-war): Australian connection.

## Accessibility

Native labelled buttons, keyboard operation, visible focus indicators, modal Escape/close support, polite feedback announcements, a skip link, larger-text control, responsive layouts and print styles. No dragging, hover-only content, audio, timers or colour-only answers. The map includes a text description and equivalent country information in buttons/cards. There is no motion. These features and automated checks are not a claim of full WCAG certification or a substitute for a classroom/screen-reader trial.

## Developer verification

`test.cjs` is an optional Playwright regression check, not needed to play. From repository root, install Playwright in a disposable environment, install its Chromium browser, then run:

```sh
node Why_Did_WWI_Start/test.cjs
```

The test checks full offline completion, first-attempt and retry scoring, exploration gates, keyboard activation, modal close/focus return, larger text, print result visibility, restart, text input handling, responsive widths, runtime errors and network requests. Screenshots are written outside the activity folder. Browser and accessibility validation results are recorded in the pull request.

## Repository scope

This folder is independent of the existing activities. The root landing page and the unmerged Mayor for a Day draft pull request are unchanged. No build step or runtime dependency is introduced. The presentation of multiple rounds and inline declarative data follows the repository's standalone classroom-resource approach; no unrelated simulation logic is reused.
