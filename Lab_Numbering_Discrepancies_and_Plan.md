# Lab Numbering Discrepancies and Correction Plan

This document details the discrepancies found between the CIS195 syllabus and the current lab directories/instruction files, along with the proposed plan for reconciling them.

---

## 1. Syllabus Reference

**Reference Syllabi:**
- `docs/CIS195_Syllabus.md`
- `docs/CIS195_Syllabus_Online.md`

### Syllabus Lab Schedule (Fall Term)

| Week | Topics | Lab Assignment |
| :--- | :--- | :--- |
| **Week 1** | *Intro to HTML* (Intro to Course, Basic HTML Elements) | **Lab 1: Oregon Overview, Personal Bio** |
| **Week 2** | *More HTML Elements* (History of internet, More HTML, File Paths) | **Lab 2** |
| **Week 3** | *Site Structure and Navigation* (Hyperlinks, Publishing via FTP) | **Lab 3** |
| **Week 4** | *Formatting with CSS* (Basic CSS, More CSS Selectors) | **Lab 4** |
| **Week 5** | *Midterm Quiz* (Midterm, Start Term Project) | *Term Project Proposal* (No lab) |
| **Week 6** | *CSS Page Layout* (CSS Box Model, Floats) | **Lab 5** |
| **Week 7** | *More CSS Page Layout* (FlexBox, Grid) | **Lab 6** |
| **Week 8** | *HTML Forms* (Basic Input Elements, Validation) | **Lab 7** |
| **Week 9** | *Multimedia* (Images, audio and video) | **Lab 8** |
| **Week 10** | *HTML Tables* (Creating Tables, Table Styling with CSS) | **Lab 9** |
| **Week 11** | Final Quiz | *(None)* |

Total lab count: **9 labs** (Labs 1–9, 40 points each, 36% of course grade).

---

## 2. Comparison: Syllabus vs. Current `docs/Labs`

| Week | Syllabus Topic | Syllabus Lab | `docs/Labs` Directory | Current Instruction File | Current Heading in File | Status / Match |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **W01** | Intro to HTML | **Lab 1: Oregon Overview, Personal Bio** | `Lab01/` | `Lab1Instructions-PersonalBio.md` | `# Instructions for Lab 1` / `# A Biographical Web Site` | Number matches (**1**), filename has `-PersonalBio` suffix |
| **W02** | More HTML Elements | **Lab 2** | `Lab02/` | `Lab2Instructions.md` | `# Lab 2 Instructions` | Matches (**2**) |
| **W03** | Site Navigation, FTP | **Lab 3** | `Lab03/` | `Lab3Instructions.md`<br>`Lab3Instructions_8wk.md` | `# Lab 3 Instructions` | Matches (**3**) |
| **W04** | Formatting with CSS | **Lab 4** | `Lab04/` | `Lab4Instructions.md` | `# Lab 4 Instructions` | Matches (**4**) |
| **W05** | Midterm | *Term Project Proposal* | — | — | — | Matches (No lab) |
| **W06** | CSS Layout: Box Model, Floats | **Lab 5** | `Lab05/` | `Lab5Instructions.md`<br>`Lab5Instructions_8wk.md` | `# Lab 5 Instructions` | Matches (**5**) |
| **W07** | More CSS Layout: FlexBox, Grid | **Lab 6** | `Lab06/` | `Lab6Instructions_8wk.md` | `# Lab 6 Instructions`<br>*(Using CSS Grid and Flexbox)* | **Discrepancy**: Marked `_8wk` |
| **W08** | HTML Forms | **Lab 7** | `Lab07/` | `Lab7Instructions.md` | `<h1>Lab 7 Instructions</h1>` | Matches (**7**) |
| **W09** | Multimedia | **Lab 8** | `Lab08/` | `Lab8Instructions.md` | `# Lab 8 Instructions` | Matches (**8**) |
| **W10** | HTML Tables | **Lab 9** | **Missing `Lab09/`** | Misplaced in `Lab06/` as `Lab6Instructions.md` | `<h1>Lab 9 Instructions</h1>`<br>*(HTML Tables)* | **Discrepancy**: Misnamed, misplaced |

---

## 3. Detailed List of Discrepancies

### Discrepancy 1: Missing Lab 9 Directory (`Lab09`)
- The syllabus specifies 9 labs, ending with **Lab 9: HTML Tables** in Week 10.
- Neither `docs/Labs` nor `LabStarters` contains a `Lab09` directory.

### Discrepancy 2: Lab 9 (HTML Tables) Misplaced and Misnamed in `Lab06`
- **Location & Filename**: The HTML Tables instructions file is located at `docs/Labs/Lab06/Lab6Instructions.md`.
- **Content vs. Filename**: The file frontmatter already specifies `title: Lab 9` and the top heading is `<h1>Lab 9 Instructions</h1> <h2>HTML Tables</h2>`, but the file is named `Lab6Instructions.md` and sits inside `Lab06`.
- **Rubric Link**: Inside `Lab6Instructions.md`, the rubric link points to `Lab6Rubric-CIS195.htm` instead of `Lab9Rubric-CIS195.htm`.
- **Associated Assets**: All materials for the HTML Tables lab reside in `Lab06`:
  - `Example_WeeklySchedule.pdf`
  - `Example_MonthCalendar.pdf`
  - `Lab6Rubric-CIS195.htm`
  - `Lab6Rubric-CIS195.xlsx`
  - `Lab6Rubric-CIS195.xlsm`
  - `Lab6Rubric-CIS195-Experimental.xlsm`
  - `Lab6Rubric-CIS195.fld/`

### Discrepancy 3: Lab 6 (CSS Grid & Flexbox) Labeled as `_8wk`
- **Location & Filename**: The instructions for CSS Grid & Flexbox (which is **Lab 6** in Week 7 of the syllabus) are currently in `docs/Labs/Lab06/Lab6Instructions_8wk.md`.
- **Rubric Name**: The rubric is named `Lab6Rubric_8wk.*` (`.htm`, `.xlsx`, `.xlsm`, `_files/`) instead of standard `Lab6Rubric-CIS195.*`.
- **Historical Note**: `Lab6-Tables_Lab6_8wk-GridAndFlex.txt` documents an older course structure from when Tables was taught in Week 6 and Grid/Flex was an 8-week summer term variant. In the current syllabus, Grid & Flexbox is officially Lab 6 and Tables is Lab 9.

### Discrepancy 4: Minor Inconsistencies
- **Lab 1**: File is named `Lab1Instructions-PersonalBio.md` (includes topic in filename, unlike labs 2–8). The syllabus references "Lab 1: Oregon Overview, Personal Bio", while instructions cover the Biographical Web Site.
- **Lab 7**: `Lab7Instructions.md` includes the subtitle note `**(Lab 8 in the eight-week summer term)**` and has `Lab7isLab8in8wkTerm.txt`.
- **Lab 8**: Rubric link in `docs/Labs/Lab08/Lab8Instructions.md` points to an absolute URL on GitHub Pages pointing to `LabStarters`: `https://lcc-cit.github.io/CIS195-CourseMaterials/LabStarters/Lab08/Lab8Rubric-CIS195.htm`.

---

## 4. Proposed Correction Plan

### Step 1: Create `docs/Labs/Lab09` Directory
- Create directory `docs/Labs/Lab09`.
- Move `docs/Labs/Lab06/Lab6Instructions.md` to `docs/Labs/Lab09/Lab9Instructions.md`.
- Move table example files:
  - `docs/Labs/Lab06/Example_WeeklySchedule.pdf` &rarr; `docs/Labs/Lab09/Example_WeeklySchedule.pdf`
  - `docs/Labs/Lab06/Example_MonthCalendar.pdf` &rarr; `docs/Labs/Lab09/Example_MonthCalendar.pdf`
- Move and rename table rubric files:
  - `Lab6Rubric-CIS195.htm` &rarr; `Lab9Rubric-CIS195.htm`
  - `Lab6Rubric-CIS195.xlsx` &rarr; `Lab9Rubric-CIS195.xlsx`
  - `Lab6Rubric-CIS195.xlsm` &rarr; `Lab9Rubric-CIS195.xlsm`
  - `Lab6Rubric-CIS195-Experimental.xlsm` &rarr; `Lab9Rubric-CIS195-Experimental.xlsm`
  - `Lab6Rubric-CIS195.fld/` &rarr; `Lab9Rubric-CIS195.fld/`
- Update rubric link in `docs/Labs/Lab09/Lab9Instructions.md` to `Lab9Rubric-CIS195.htm`.

### Step 2: Clean Up `docs/Labs/Lab06`
- Promote `Lab6Instructions_8wk.md` &rarr; `Lab6Instructions.md` (optionally keep `Lab6Instructions_8wk.md` copy if needed for 8-week references).
- Rename Grid/Flex rubric files:
  - `Lab6Rubric_8wk.htm` &rarr; `Lab6Rubric-CIS195.htm`
  - `Lab6Rubric_8wk.xlsx` &rarr; `Lab6Rubric-CIS195.xlsx`
  - `Lab6Rubric_8wk.xlsm` &rarr; `Lab6Rubric-CIS195.xlsm`
  - `Lab6Rubric_8wk_files/` &rarr; `Lab6Rubric-CIS195_files/`
- Update rubric link in `docs/Labs/Lab06/Lab6Instructions.md` to point to `Lab6Rubric-CIS195.htm`.
- Remove or update `Lab6-Tables_Lab6_8wk-GridAndFlex.txt`.

### Step 3: Mirror Changes in `LabStarters` (Optional / Recommended)
- Create `LabStarters/Lab09/`.
- Move/rename HTML Table starter files and rubrics from `LabStarters/Lab06/` to `LabStarters/Lab09/`.
- Promote Grid/Flex files in `LabStarters/Lab06/` to standard `Lab6` naming.

### Step 4: Update Course Outline in `docs/index.md` (Optional / Recommended)
- Update Section 6 / 7 / 8 / 9 / 10 in `docs/index.md`:
  - Add/align Section 7 for *CSS Grid and Flexbox* referencing `Labs/Lab06/Lab6Instructions.html`.
  - Update Section 8 (*Forms*) referencing `Labs/Lab07/Lab7Instructions.html`.
  - Update Section 9 (*Multimedia*) referencing `Labs/Lab08/Lab8Instructions.html`.
  - Update Section 10 (*HTML Tables*) referencing `Labs/Lab09/Lab9Instructions.html` and `Lab9Rubric-CIS195.htm`.
