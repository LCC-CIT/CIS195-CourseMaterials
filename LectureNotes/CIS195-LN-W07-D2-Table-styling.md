---
title: CSS Table Styling
description: Styling Tables with CSS
keywords: css, table, row, column, thead, tbody, foot, caption
material: Lecture Notes
generator: Typora
author: Brian Bird
---
**CIS195 Web Authoring 1: HTML**

<h1>Styling Tables with CSS</h1>



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
      <td>7. CSS Grid and Flexbox</td>
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


[TOC]

## Q and A

- Any questions on labs or the term project?
- Review due dates on Moodle.



## Introduction

### Review

-   Overall table structure
-   Borders
-    Row and column spans
-   Captions

### Styling Tables

- Styling using HTML elements is deprecated.

- Styling should be done with CSS.

  

##Structural Elements for Tables

These semantic-structural elements provide organization to your code and give you targets for CSS rules

- `thead`&mdash;table heading

- `tbody`&mdash;table body

- `tfoot`&mdash;table footer

  Example:

  ```html
  <table>
    <thead>
      <tr>
        <th>One</th>
        <th>Two</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <td>Thing 1</td>
        <td>Thing 2</td>
      </tr>
      <tr>
        <td>Another one</td>
        <td>Three more</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td>Two things</td>
        <td>$Four things</td>
      </tr>
    </tfoot>
  </table>
  ```

  

- colgroup&mdash;column group 
  This one is special! There are no *real* columns in an HTML table, so this is a way to select a group `td` elements that make up a column so that you can apply a CSS rule to them.

  - Even if you are only styling the first column, you need to include as many `<col>` elements are there are `<td>` or `<th>` elements in whichever row of your table has the most.

  Example:
  
  ```html
  <table>
    <colgroup>
      <col class="specialColumn">
      <col style="background-color:blue;">
      <col id="col3">
    </colgroup>
    <tr>
      <th>First column</th>
      <th>Second column</th>
      <th>Third Column</th>
    </tr>
    <!-- the rest of the table goes here -->
  </table>
  ```

- You can only apply the following CSS properties to a `colgroup`:
  - `width`
  - `visibility`
  - `background` properties
  - `border` properties

## CSS Table Properties

The best practice is to format tables with CSS rather than with HTML attributes. 

- `border-collapse` : 

  - `collapse`&mdash;collpses the border into a single line.
  - `separate`&mdash;the default, separate borders around each td.

- The rest of the properties are the general properties you would use for other block elements. 

  - `border`&mdash;use it like you would on any *block element*.
  - `margin` and `padding`
  - `width` and `height`
  - `text-align`
  - `vertical-align`
  - and more!

- Example:

  ```css
  table {
            border-collapse: collapse;
            border: 4px solid darkgreen;
            text-align: center;
        }
  
  table td {
              border: 2px dotted green;
              border-collapse: collapse;
          }
  ```

  Note: the `border` property is the combined "short-hand" property for setting multiple border properties.

  

##Examples

* [Table styling example](https://lcc-cit.github.io/CIS195-CourseMaterials/Examples/TableDemo/TableDemo.html)&mdash;one table sytled with HTML attributes, another styled with CSS.

* [Code for in-class demo](https://github.com/LCC-CIT/CIS195-Demos/tree/master/Tables)&mdash;on GitHub.

* Nested tables:

  * [Basic nested tables](https://lcc-cit.github.io/CIS195-CourseMaterials/Examples/NestedTables/NestedTables.html)
  * [Nested tables with colspan](https://lcc-cit.github.io/CIS195-CourseMaterials/Examples/NestedTables/ColspanDemo.html)
  * [Nested tables with column and row headers](https://lcc-cit.github.io/CIS195-CourseMaterials/Examples/NestedTables/NestedTables+ColAndRowHeaders.html)
  * [Nested tables with column headers](https://lcc-cit.github.io/CIS195-CourseMaterials/Examples/NestedTables/NestedTables+ColumnHeaders.html)
  
  

##References

* [W3Schools: CSS Table Formatting](https://www.w3schools.com/css/css_table.asp)
* [MDN Tutorial: Styling Tables](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Styling_tables)



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) These Web Authoring lecture notes by [Brian Bird](https://profbird.dev), 2018, revised <time>2023</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------

