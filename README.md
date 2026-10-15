[README.md](https://github.com/user-attachments/files/33483450/README.md)
# Culinary Quest — Interactive Kitchen Missions

A responsive culinary learning game built with plain HTML, CSS and JavaScript. It runs entirely in the browser and can be published with GitHub Pages.

## Included files

- `index.html` — page structure and screens
- `style.css` — styling, animations and responsive layout
- `script.js` — mission bank, drag/tap activities, scoring, feedback and sound effects

## Game activities

1. **French Atelier:** classify classical vegetable cuts, match use cases and complete a transfer question.
2. **Italian Flavour Lab:** match culinary techniques, classify soffritto ingredients and arrange a workflow.
3. **Malay Heritage Kitchen:** match preparation terminology, organise mise en place and arrange a service-ready sequence.

Each world contains four challenges with varied formats: drag-and-drop sorting, matching, step ordering, single-answer multiple choice, true/false, select-all-that-apply, error diagnosis and professional scenario decisions. The activity types include drag-and-drop (with tap-to-select support), matching, ordering steps and choice-based questions. Students can work without a timer. The mastery score counts first-attempt correct challenges; speed does not affect the score. Students can retry incorrect responses and read explanations.

Sound effects are generated with the Web Audio API. Sound is off by default and must be enabled by the user. No audio files, backend, API keys, build tools or external libraries are required. The optional font import falls back to system fonts if Google Fonts is unavailable.

## Test locally

1. Extract this folder.
2. Open `index.html` in a current browser.
3. Press **Start your quest**.
4. Complete each activity, deliberately test an incorrect answer, then correct it.
5. Test sound on/off, the Continue button, home, results and restart.
6. Test on a narrow/mobile viewport or a phone.

For a local web server, run `python -m http.server 8000` from this folder and visit `http://localhost:8000`. No build command is needed.

## Publish on GitHub Pages

1. Create a GitHub repository, for example `culinary-quest-missions`.
2. Upload `index.html`, `style.css`, `script.js` and `README.md` directly to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. Wait for GitHub Pages to publish the site. The published URL will be shown in the Pages settings.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Edit the questions and activities

Open `script.js` and find `const MISSION_BANK`. The content is grouped by mission. Each mission's `challenges` array holds four activities.

- `type: "sort"` uses `items` and `categories`; each item's `cat` must match a category `id`.
- `type: "match"` uses `pairs`; each pair's `answer` must exactly match one of its `options`.
- `type: "sequence"` uses `steps` and a `correct` array of step IDs in the desired order.
- `type: "transfer"` uses `options` and an `answer` that exactly matches one option.

Keep IDs unique within an activity and preserve the expected fields. When adding/removing challenges, also update the displayed total and progress calculations in `script.js` (currently designed for 12 challenges and three missions with four challenges each). Check all factual content against the relevant course notes and institutional terminology, especially where culinary terms vary regionally.

## Manual QA checklist

- [ ] Start opens the first challenge.
- [ ] Drag-and-drop works with a mouse.
- [ ] Tap an item and tap a category works on touch devices.
- [ ] Matching dropdowns preserve the chosen answer.
- [ ] Sequence arrows reorder steps correctly.
- [ ] Incomplete activities prompt the learner without scoring.
- [ ] Incorrect answers show a hint and permit retry.
- [ ] Correct answers lock the activity and show an explanation.
- [ ] Repeated clicks do not score the same challenge more than once.
- [ ] Continue advances through all 12 challenges.
- [ ] Mission badges, final results, restart and home work.
- [ ] Sound can be enabled and disabled.
- [ ] Layout remains usable on desktop and mobile.


## Textbook reference and question-writing approach

The question bank contains **originally written questions**, not copied textbook questions or answer keys. Concepts are aligned to topic coverage in Wayne Gisslen, *Professional Cooking*, 9th edition (Wiley, 2018), particularly Chapter 2 (Sanitation and Safety), Chapter 3 (Tools and Equipment), Chapter 6 (Basic Principles of Cooking and Food Science), Chapter 7 (Mise en Place), Chapter 11 (Understanding Vegetables) and Chapter 12 (Cooking Vegetables). The game also includes a small Malay preparation terminology context; confirm local terminology with your course notes and kitchen practice.

Reference: Wayne Gisslen, *Professional Cooking*, 9th ed., Wiley, 2018. Publisher/book overview and contents: https://books.google.com/books/about/Professional_Cooking.html?id=WHJlDwAAQBAJ

This is a teaching aid, not a replacement for the textbook or your institution's food-safety SOPs. Verify chapter-specific details against the copy/edition used in your class.
