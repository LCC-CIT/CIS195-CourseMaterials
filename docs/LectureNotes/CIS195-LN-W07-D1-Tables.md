---
title: Tables
description: HTML Tables
keywords: HTML, Web page
generator: Typora
author: Brian Bird
---
<h1>HTML Tables</h1>



<table hidden>
  <caption>Topics by Week for the Eight-Week Term</caption>
  <thead>
    <tr>
      <th scope="col">Weeks 1-4</th>
      <th scope="col">Weeks 5-8</th>
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
| Weeks 1-5 | Weeks 6-11 |
| :--- | :--- |
| 1. Intro to HTML | 6. Layout with CSS |
| 2. More HTML, file paths | 7. CSS Grid and Flexbox |
| 3. Site structure and navigation | 8. HTML Forms |
| 4. Formatting with CSS | 9. Multimedia |
| 5. Midterm, Project Propposal | <mark>10. Tables, Project Completion</mark> |
|  | 11. Final |
[Topics by Week for the Ten-Week Term]



**Table of Contents**

[TOC]

## Announcements

- Review due dates (lab and quiz).
- Are there any questions on lab 5?
- How is the term project coming?



## Introduction

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

