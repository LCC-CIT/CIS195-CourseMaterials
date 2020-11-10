### CIS 195 Web Authoring 1: HTML

#### Course Topics by Week

|                          |                             |
| ------------------------ | --------------------------- |
| 1. Intro to HTML 5       | 6. Page Layout with CSS     |
| 2. More HTML 5           | <mark>7. HTML Tables</mark> |
| 3. Developing a Web Site | 8. HTML Forms               |
| 4. Styling with CSS      | 9. Multimedia               |
| 5. Midterm Quiz          | 10. Review and Term Project |
|                          | 11. Final Quiz              |

Notes for each week are available in the [course outline](https://lcc-cit.github.io/CIS195-CourseMaterials/).

# Table Styling with CSS



## Contents

-   [Announcements](#Announcements)
-   [Introduction](#introduction)
-   [Semantic Elements for Tables](#semantic-elements-for-tables)
-   [CSS Table Properties](#css-table-properties)
-   [Examples](#examples)
-   [References](#references)



## Announcements

-   Review due dates on Moodle.
-   Choose courses for Winter 2020 now!
    -   Winter registration is  already open
    -   You can view the [Winter CIT class schedule](https://crater.lanecc.edu/banp/zwsktsc2.P_DispGroupSchd?chunk_in=C2550&term_in=202130) now. 
        Reccomended courses for the [Programing Degree](https://www.lanecc.edu/cit/computer-programming) this coming Fall:
        -   <u>Programming Courses</u>
            -   CS 133N, Beginning Programming: C#, 4 creditss&mdash;*requires Math 60*.
            -   CIS 100, Computing Careers Exploration, 1 credit.
            -   CS 206, Co-op Ed: Computer Information Technology Seminar, 2 credits.
        -   <u>General Ed</u>
            -   WR121, Academic Composition, 4 credits.
            -   WR227, Technical Writing, 4 credits.
            -   MTH95, Intermediate Algebra, 4 credits.
                *Lower level math classes are available as well.*
            -   PE/Health requirement, 3 credits.
            -   CG203, Human Relations at Work or an approved communication course, 3 credits.
    -   Road-map for the Programing Degree: [Required Courses for the Programming Degree](https://drive.google.com/file/d/1vWOGqvMj0CveCjTDqymQzJ7cn7jGHKVX/view?usp=sharing).



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

These elements provide organization to your code and give you targets for CSS rules

- thead&mdash;table heading

- tbody&mdash;table body

- tfoot&mdash;table footer

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
  This one is special! There are no *real* columns in an HTML table, so this is a way to select a group td elements that make up a column so that you can apply a CSS rule to them.

  Example:

  ```html
  <table>
    <colgroup>
      <col class="firstcolumn" />
      <col style="background-color:blue;" />
      <col id="thirdcolumn" />
    </colgroup>
    <!-- the rest of the table goes here -->
  </table>
  ```



## CSS Table Properties

The best practice is to format tables with CSS rather than with HTML attributes. 

- border-collapse : 

  - collapse&mdash;collpses the border into a single line.
  - separate&mdash;the default, separate borders around each td.

- The rest of the properties are the general properties you would use for other elements. 

  - border&mdash;use it like you would on any *block element*.
  - margin and padding
  - width and height
  - text-align
  - vertical-align
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

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) These Web Authoring lecture notes by [Brian Bird](https://profbird.dev) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------

