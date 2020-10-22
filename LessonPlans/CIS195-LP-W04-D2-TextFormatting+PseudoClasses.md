# More CSS: Colors, Text and Pseudo-classes

| Course Topics by Week            |                             |
| -------------------------------- | --------------------------- |
| 1. Intro to HTML 5               | 6. Page Layout with CSS     |
| 2. More HTML 5                   | 7. HTML Tables              |
| 3. Developing a Web Site         | 8. HTML Forms               |
| 4. <mark>Styling with CSS</mark> | 9. Multimedia               |
| 5. Midterm Quiz                  | 10. Review and Term Project |
|                                  | 11. Final Quiz              |

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

- Review due dates on Moodle.

- Answer questions about this week's lab assignment.

  

## Defining Colors

- By name
  `color: blue;`
  
  There are 140 standard color names that are understood by all the browsers. Here's a [list of color names on W3Schools](https://www.w3schools.com/colors/colors_names.asp)
  
- By numeric color code
  The codes are based on the RGB color system.
  R is for red, G is for green, B is for blue.
  There are two ways to represent RGB colors:

  - Decimal

    - The range for each color is 0 to 255
    - Example: `color: rgb(0, 0, 255)`

  - Hexadecimal
    `color: #0000FF;`

    A total of 16,777,216 different colors can be represented (256 x 256 x 256, or 2<sup>24</sup>).

- Special colors
  - White consists of all colors
  - Black is the absence of color
  
- Opacity
  Higher numbers make the color more opaque.
  
  - Decimal
    - The range it 0 .0 to 1.0
    - Example:`color: rgba(0, 0, 255, 0.5);`
  - Hexadecimal
    - The range is 0 to FF
    - Example:`color: #0000FF7F;`

[W3Schools tutorial on CSS color properties](https://www.w3schools.com/css/css_colors.asp)



### Hexadecimal numbers

One of the ways to represent colors in CSS styles is using the base 16 number system, hexadecimal, or "hex". The hex number system uses the digits 0 through 9 (ten digits) along with the letters A through F (six digits) for a total of sixteen digits. This is how you count in hexadecimal: 

0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1A, 1B, 1C, 1D, 1E, 1F, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 2A, 2B, 2C, 2D, 2E, 2F, etc.

Here are examples of hex values and their decimal equivalents:

- 0 hex is 0 decimal
- A hex is 10 decimal
- F hex is 15 decimal
- 10 hex is 16 decimal
- 1F hex is 31 decimal
- 20 hex is 32 decimal
- FF hex is 255 decimal
- 100 hex is 256 decimal

[Math is Fun: Hexadecimal Number Tutorial](https://www.mathsisfun.com/hexadecimals.html)



## Text and font styles

### Text Properties

- text-align  
  Sets horizontal alignment of text.
  - left&mdash;aligns text to the left.
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

### Font Properties

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

  ### Numeric lengths in CSS

  - absolute length units
    - *cm*&mdash;centimeters
    - *mm*&mdash;millimeters
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



## List Style Properties

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



## Example

* [South India Web Site](https://lcc-cit.github.io/CIS195-Demos/Unit03/Finished/Index.htm)

* [Code for South India Web Site](https://github.com/LCC-CIT/CIS195-Demos/tree/master/Unit03)

  

## References

* [W3Schools: CSS Text Tutorial](https://www.w3schools.com/css/css_text.asp)
* [W3Schools: CSS Font Tutorial](https://www.w3schools.com/css/css_font.asp)
* [MDN: @font-face Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/%40font-face)
* [W3Schools: CSS Pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp)

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes by [Brian Bird](https://profbird.dev) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------

