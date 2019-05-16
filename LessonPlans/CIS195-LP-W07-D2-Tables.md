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

# Tables

## Contents

-   [Introduction](#introduction)
-   [Example](#example)
-   [References](#references)



## Introduction

-   Review due dates on Moodle.
-   Announce the "Making Wise Choices workshops"
-   Choose courses for Fall 2019 now!
    -   Fall registration opens  [May 21 - 24](https://www.lanecc.edu/calendars/registration-calendar#fall2019) for continuing students
    -   You can view the [Fall 2019 CIT Course schedule](https://crater.lanecc.edu/banp/zwsktsc2.P_DispGroupSchd?chunk_in=C2550&term_in=202020) now. 
        Reccomended courses for the [Programing Degree](https://www.lanecc.edu/cit/computer-programming):
        -   <u>Programming Courses</u>
            -   CIS100, Computing Careers Exploration, 1 credit.
            -   CS160, Orientation to Computer Science, 4 credits&mdash;*requires Math 95*.
                *or*
                CIS125M, This is a new course in Web App Development with [AppLab](https://code.org/educate/applab). (It's not what the catalog descriptions says.), 4 credits.
        -   <u>General Ed</u>
            -   WR121, Academic Composition, 4 credits.
            -   MTH95, Intermediate Algebra, 4 credits.
                *Lower level math classes are available as well.*
            -   PE/Health requirement, 3 credits.
            -   CG203, Human Relations at Work, 3 credits.

##Semantic Elements for Tables

These elements provide organization to your code and give you targets for CSS rules

- thead&mdash;table heading

- tbody&mdash;table body

- tfoot&mdash;table footer

- colgroup&mdash;column group
  This one is special! There are no *real* columns in an HTML table, so this is a way to select a group td elements that make up a column so that you can apply a CSS rule to them.

  - Example:

    ```html
    <colgroup>
      <col class="firstcolumn" />
      <col style="background-color:blue;" />
      <col id="thirdcolumn" />
    </colgroup>
    ```



## Styling Tables with CSS

Best practice is to format tables with CSS rather than with HTML attributes.

###Table properties

- border-collapse
  - 

##Example

* [South India Web Site](https://lcc-cit.github.io/CIS195-Demos/Unit03/Finished/Index.htm)

* [Code for South India Web Site](https://github.com/LCC-CIT/CIS195-Demos/tree/master/Unit03)

  

##References

* [W3Schools: Box Model ](https://www.w3schools.com/css/css_boxmodel.asp)
* [W3Schools: Rounded Corners](https://www.w3schools.com/css/css3_borders.asp)
* [W3Schools: The CSS Position Property](https://www.w3schools.com/css/css_positioning.asp)
* [W3Schools: The Overflow Property](https://www.w3schools.com/cssref/pr_pos_overflow.asp)
* [W3Schools: Z-Index Property](https://www.w3schools.com/cssref/pr_pos_z-index.asp)



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------

