### CIS 195 Web Authoring 1: HTML

#### Course Topics by Week

|                                  |                             |
| -------------------------------- | --------------------------- |
| 1. Intro to HTML 5               | 6. Page Layout with CSS     |
| 2. More HTML 5                   | 7. HTML Tables              |
| 3. Developing a Web Site         | 8. HTML Forms               |
| 4. <mark>Styling with CSS</mark> | 9. Multimedia               |
| 5. Midterm Quiz                  | 10. Review and Term Project |
|                                  | 11. Final Quiz              |

# More CSS: Colors, Text and Pseudo-classes

## Contents

-   [Introduction](#introduction)
-   [Defining Colors](#defining-colors)
-   [Text and Font Styles](#text-and-font-styles)
    -   [Text properties](#text-properties)
    -   [Font properties](#font-properties)
    -   [Numeric lengths in CSS](#numeric-lengths-in-css)
-   [List Style Properties](#list-style-properties)
-   [Pseudo-classes](#pseudo-classes)
-   [Example](#example)
-   [References](#references)

## Introduction

-   Review due dates on Moodle.
-   Answer questions about this week's lab assignment.

## Defining Colors

- By name
  `color: blue;`
- By color code
  - Decimal
    `color: rgb(0, 0, 255)`
  - Hexadecimal
    `color: #0000FF;`
- Special colors
  - White consists of all colors
  - Black is the absence of color
- Opacity
  - Decimal
    `color: rgba(0, 0, 255, 0.5);`
  - Hexadecimal
    `color: #0000FF7F;`

##Text and font styles

###Text Properties

- text-align  
  Sets horizontal alignment of text.
- - left&mdash;aligns text to the left.
  - right&mdash;aligns text to the right.
  - center&mdash;centers the text.
  - justify&mdash;Inserts spaces between words so that the line fills the whole width.
- text-indent  
  Sets the indentation of the first line in a block of text. For example, indenting the first line of a paragraph.
  - Units can be:
    - % (percent)
    - [Numeric length](#numeric-lengths-in-css)
  - example: `text-indent: 5em;`
- letter-spacing  
  Sets the spacing between characters of text.
  - normal&mdash;sets spacing to the default  
    Example: `letter-spacing: normal;`
  - [Numeric length](#numeric-lengths-in-css), either absolute or relative. Negative numbers are allowed.  
    Example: `letter-spacing: 5px;`
- word-spacing
- line-height

###Font Properties

- font-style
  - *normal*
  - *italic*
  - *oblique*
- font-variant
  - *normal*
  - *small-caps*
- font-weight
  - *lighter*, *normal* (default), *bold*, *bolder*
  - A number from *100* to *900*
    - 400 = normal
    - 700 = bold
- font-size
  - *xx-small, x-small, small, medium* (default), *large, x-large, xx-large*
  - *larger, smaller*
  - An absolute size using [length units](#numeric-lengths-in-css)
- font-family  
  Can either be specific font families or a generic family names.
  
  - specific family name examples: *times, courier, arial*, etc.
- generic family name examples: *serif, sans-serif, monospace*, etc.
  
- Font properties can be set individually or all at once

  - Example of setting each property separately:

    ```css
    p {
        font-style: italic;
        font-variant: small-caps;
        font-weight: bold;
        font-size: large;
        font-family: arial, sans-serif;
      }
    ```

  - Example of setting multiple properties at once:

    ```css
    p {
        font: italic small-caps bold large arial, sans-serif;
      }
    ```

  ###Numeric lengths in CSS

  - absolute length units
    - *cm*&mdash;centimeters
    - *mm*&mdash;milimeters
    - *in*&mdash;inches
    - *px*&mdash;pixels
    - *pt*&mdash;points
    - *pc*&mdash;picas
  - relative length units
    - em&mdash;the size of an 'm' in the current font
    - ex&mdash;the height of an 'x' in the current font
    - ch&mdash;the width of a '0' (zero) in the current font
    - rem&mdash;font-size of the root element (browser's font size)
    - vw&mdash;1% of the width of the viewport (browser window size)
    - vh&mdash;1% of the height of the viewport
    - vmin&mdash;1% of the viewport height or width, whichever is smaller
    - vmax&mdash;1% of the viewport height or width, whichever is larger
    - %&mdash;percntage of the parent element's width

### Web Fonts

Web fonts allow developers to use fonts that may not be installed on end user's computers.

- Save the font file in your web site's folder, and it will be automatically loaded to by the user's browser when needed.
- Define any web fonts your web site uses within the CSS `@font-face` rule.



##List Style Properties

- list-style-type
  
  - [List style types](https://www.w3schools.com/CSSref/pr_list-style-type.asp)
- list-style-image
  
  - [list-style-image property](https://www.w3schools.com/cssref/pr_list-style-image.asp)
- list-style-position
  
  - [list-style-position property](https://www.w3schools.com/cssref/pr_list-style-position.asp)
  
    

## Pseudo-Classes

Use these to define special appearance or behavior for HTML elements.  
The syntax of the selector is similar to that of a class selector.

- a:visited  
  Sets the color of links that have been clicked on.
  
  - Example: 
  
    ```css
    a:visited {
       color: green;
    }
    ```
  
    
- a:hover  
  Sets the color links change to when a user hovers over them in the browser.
  
  - Example: 
  
    ```css
    a:hover {
       color: purple;
    }
    ```

Read about more about [pseudo-classes on W3 Schools](https://www.w3schools.com/css/css_pseudo_classes.asp).



##Example

* [South India Web Site](https://lcc-cit.github.io/CIS195-Demos/Unit03/Finished/Index.htm)

* [Code for South India Web Site](https://github.com/LCC-CIT/CIS195-Demos/tree/master/Unit03)

  

##References

* [W3Schools: CSS Text Tutorial](https://www.w3schools.com/css/css_text.asp)
* [W3Schools: CSS Font Tutorial](https://www.w3schools.com/css/css_font.asp)
* [MDN: @font-face Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/%40font-face)
* [W3Schools: CSS Pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp)

