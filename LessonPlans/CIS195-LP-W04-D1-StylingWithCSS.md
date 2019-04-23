CIS 195 Web Authoring 1: HTML 

# Styling with CSS

### by Brian Bird

##Course Topics

| Topics  for weeks 1 - 5            | Topics for weeks 6 - 10     |
| ---------------------------------- | --------------------------- |
| 1. Intro to HTML 5                 | 6. Midterm                  |
| 2. More HTML 5                     | 7. HTML Tables              |
| 3. Developing a Web Site           | 8. HTML Forms               |
| 4. <mark>Designing with CSS</mark> | 9. Multimedia               |
| 5. Page Layout with CSS            | 10. Review and Term Project |

<hr>

Contents
--------

-   [Introduction](#introduction)
-   [Basic CSS](#basic-css)
-   [Defining Colors](#defining_colors)
-   [Type Selectors](#type-selectors)
-   [Web Fonts](#web-fonts)
-   [Pseudo-classes](#pseudo-classes)
-   [Examples](#examples)
-   [References](#references)

## Introduction

-   Review lab due dates on Moodle
-   Answer questions about lab 3

## Basic CSS

- ###Style rules

  - <u>Example of a style rule:</u>
    `body {`
        `background-color: lightcyan;`
         `font-family: Arial;`

    `}`

  - <u>Anatomy of a CSS rule:</u>

    - Selector: *body*
    - Braces: *{ }*
    - Property: *background-color: lightcyan;*
      - Name: *background-color*
      - Seperator  *:*
      - Value  *lightcyan*
      - Terminator  *;*
    
  - <u>Comments</u>

    - Example:
      `/* This is a comment */`
    
  - <u>Inheritance</u>
    Any element that is nested inside an element to which a style rule has been applied will inherit that rule.

- ###Style sheets

  - <u>Types</u>
    - Web site style-sheets:
      
      - External&mdash;in a separate file
          - Embedded&mdash;in a &lt;style&gt; element in an html file
          - Inline&mdash;in a *style* attribute inside an html tag
      
    - Browser styles-sheets
      
      - Internal&mdash;defined by the browser developers
          - User Defined&mdash;user preferences
  - <u>Precedence&mdash;the cascade</u>
    (The ones closer to the top win.)
      1. HTML element's inline styles
      2. Browser's internal style-sheet
      3. Browser's user-defined styles
      4. Site's external style-sheet
      5. HTML page's embedded style rules
  
- ###Example
  `/* Change font and background colors of all paragraphs */`
  `p {`
       `background-color: papayawhip;`
      `color: darkblue;`
     `}`

    `/* Make the font size of bold text larger */`
    `strong {`
         `font-size: larger;`
        `}`

##Defining Colors

* By name
  `color: blue;`
* By color code
  * Decimal
    `color: rgb(0, 0, 255)`
  * Hexadecimal
    `color: #0000FF;`
* Special colors
  * White consists of all colors
  * Black is the absense of color
* Opacity
  * Decimal
    `color: rgba(0, 0, 255, 0.5);`
  * Hexadecimal
    `color: #0000FF7F;`


## Type Selectors

- Use contextual selectors
- Work with attribute selectors
- Apply text and font styles


## Web Fonts

## 

## Pseudo-Classes

Example:

`<head>   <!-- other stuff left out -->                <base href="Chennai/" target="_blank"></head>`

##Examples

* [South India Web Site](https://lcc-cit.github.io/CIS195-Demos/Unit03/Finished/Index.htm)

* [Code for South India Web Site](https://github.com/LCC-CIT/CIS195-Demos/tree/master/Unit03)

##References

* [W3Schools CSS Reference](https://www.w3schools.com/cssref/)
* [MDN @font-face Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/%40font-face)

