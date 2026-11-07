# GradingAssistant — CIS195

Grading configuration for **CIS195**, used by [CS-GradingAssistant](https://github.com/ProfBird/CS-GradingAssistant), the course-neutral grading tool (clone it separately; it holds no course files).

## What is in this folder

- `course_config.json` — course name, code and Canvas course id.
- `Lab01` … `Lab08`, `TermProject` — one `<lab>_config.json` each. These are text-report labs (`textReport: true`, no rubric spreadsheets): the tool checks HTML elements, CSS selectors/properties and file counts and writes a `.txt` grade report per student.
- `notes/CIS195_INTEGRATION.md` — how the old standalone GradingAssistant checks were converted to these configs.

## Using it

1. Clone [CS-GradingAssistant](https://github.com/ProfBird/CS-GradingAssistant) and run `npm install`.
2. Run `node bin/grade.js` (or `node bin/configure-lab.js`), choose **Add new course**, and browse to this folder. The path is saved in the tool's git-ignored `configs/local-config.json`, so each computer registers it once.
3. Grade a lab, e.g. `node bin/grade.js CIS195 Lab03`.

The rubric spreadsheets are **not copied here**: each lab config's `rubricName` is a path relative to its config folder that points at the rubric in this repo's own lab folder, so that file is the single template. See the tool's [User Guide](https://github.com/ProfBird/CS-GradingAssistant/blob/main/USER_GUIDE.md) for the config format.
