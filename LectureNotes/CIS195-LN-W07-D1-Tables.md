---
title: CSS Table Styling
description: Styling Tables with CSS
keywords: css, table, row, column, thead, tbody, foot, caption
material: Lecture Notes
generator: Typora
author: Brian Bird
---
**CIS195 Web Authoring 1: HTML**


<h1>HTML Tables</h1>

<table hidden>
  <thead>
    <tr>
      <th colspan="2">Topics by Week for the Eight-Week Term</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1. Intro to HTML</td>
      <td>5. Layout with CSS</td>
    </tr>
    <tr>
      <td>2. More HTML, file paths</td>
      <td>6. HTML Tables</td>
    </tr>
    <tr>
      <td>3. Site structure and navigation</td>
      <td>7. HTML Forms</td>
    </tr>
    <tr>
      <td>4. Formatting with CSS, Midterm</td>
      <td>8. Multimedia, Final</td>
    </tr>
  </tbody>
</table>
<table >
  <thead>
    <tr>
      <th colspan="2">Topics by Week for the Ten-Week Term</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1. Intro to HTML</td>
      <td>6. Layout with CSS</td>
    </tr>
    <tr>
      <td>2. More HTML, file paths</td>
      <td>7. CSS Flexbox and Grid</td>
    </tr>
    <tr>
      <td>3. Site structure and navigation</td>
      <td>8. HTML Forms</td>
    </tr>
    <tr>
      <td>4. Formatting with CSS</td>
      <td>9. Multimedia</td>
    </tr>
    <tr>
      <td>5. Midterm, Project Propposal</td>
      <td><mark>10. Tables, Project Completion</mark></td>
    </tr>
      <tr>
          <td></td>
          <td>11. Final</td>
      </tr>
  </tbody>
</table>

**Table of Contents**

[TOC]

## Announcements

- Today, Tuesday, November 28 from 2:00 to 4:00 pm there will be a [Study Jam in the library](https://library.lanecc.edu/). 
  The library will provide free pizza and snacks for students as you study for finals. In addition to food and drink, there will be research help, tutoring, relaxation and yoga tips, and therapy dogs.
- Tomorrow, Wednesday, November 29 from 9:00 am to 2:00 pm there is an [Advising & Financial Aid Reg Fest](https://www.lanecc.edu/community/events/drop-winter-reg-fest-0)  This is a drop-in event with academic advising, financial aid and student services representatives. Can't make it? Student Services departments are available on drop-in Monday-Friday. 
- Any late or extra credit assignments are due by the end of the day on Monday, 12/4/23.

### Q and A

- Labs
  - The lab 8 production version is due Thursday, 11/30.
  - Lab 9, no code review is required, production version due Sunday 12/3.
  - Any questions on the labs?
- How is the term project going?
  - Code review due today (Tuesday).
  - Production version due Sunday, 12/3.
- Final quiz
  - There is an ungraded practice quiz open now.
  - Final quiz time and place:
    - For on campus students, it is at the regular class time next Tuesday, December 5.
    - For online students, it is in the [Instructional Testing Center](https://www.lanecc.edu/get-support/academic-support/instructional-testing-services?_gl=1*62xqx7*_ga*NDEyOTA4MDEzLjE1NzY2NDQ5NTc.*_ga_MMT5BK11VR*MTY4Mjk3ODA0OC4zMjguMS4xNjgyOTgwMTkxLjAuMC4w), Monday 12/4 through Wednesday 12/6.
  - Any questions?



## Introduction to Tables

- What is a table--in general?
- Where are tables commonly used?



## Structure of a Table

Tables are constructed using multiple elements (which means multiple tags). A table with two rows and three columns would be written in HTML like this:

```html
<table>
    <tr>   <!-- tr = table row, this is the beginning of a row -->
        <td>row 1, column 1</td>    <!-- td = table data, this is a cell -->
        <td>row 1, column 2</td>
        <td>row 1, column 3</td>
    </tr>
    <tr>
        <td>row 2, column 1</td> 
        <td>row 2, column 2</td> 
        <td>row 2, column 3</td>
    </tr>
</table>
```



The table  will be rendered in a browser like this:

<table
  <tr><td>row1, column 1</td>
  <td>row1, column 2</td>
  <td>row 1, column 3</td></tr>
  <tr><td>row2, column 1</td>
  <td>row2, column 2</td>
  <td>row 2, column 3</td></tr>
 <table>



## Borders

Borders can be added using CSS. For example:

```css
table, td {
  border: solid;
  border-collapse: collapse;
}
```



The table will be rendered like this:

<table style="border: solid">
  <tr><td style="border: solid">row1, column 1</td>
  <td style="border: solid">row1, column 2</td>
  <td style="border: solid">row 1, column 3</td></tr>
  <tr><td style="border: solid">row2, column 1</td>
  <td style="border: solid">row2, column 2</td>
  <td style="border: solid">row 2, column 3</td></tr>
 <table>



## Headings

A special type of table cell is a heading, <th></th>. The following code can be placed above row 1 and provides headings for the columns:

```html
<tr>
   <th>column 1</th> <th>column 2</th> <th>column 3</th>
</tr>
```



The table will be rendered like this:

| column 1        | column 2        | column 3        |
| --------------- | --------------- | --------------- |
| row 1, column 1 | row 1, column 2 | row 1, column 3 |
| row 2, column 1 | row 2, column 2 | row 2, column 3 |



## Row and Column Spans

The *rowspan* attribute is used to make a `<td>` element stretch across two rows.

The *colspan* attribute is used to make a `<td>` element stretch across two columns. 

```html
<tr>                           
  <td colspan="2">row 1, columns 1 and 2</td>   
  <td rowspan="2">rows 1 and 2, column 3</td>
</tr>
<tr>
   <td>row 2, column 1</td>
    <td>row 2, column 2</td>
</tr>
```

The table will be rendered like this:

<table style="border: solid">
  <tr>
    <td colspan="2" style="border: solid">row 1, columns 1 and 2</td>
    <td rowspan="2" style="border: solid">rows 1 and 2, column 3</td>
  </tr>
  <tr>
    <td style="border: solid">row2, column 1</td>
    <td style="border: solid">row2, column 2</td>
  </tr>
 <table>


## Captions

```html
  <caption>Table Example</caption>
```

Captions can be positioned using CSS. For example:

```css
caption {
  caption-side:bottom;
}
```



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)
ASP.NET Core MVC Lecture Notes by [Brian Bird](https://profbird.dev) is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------

