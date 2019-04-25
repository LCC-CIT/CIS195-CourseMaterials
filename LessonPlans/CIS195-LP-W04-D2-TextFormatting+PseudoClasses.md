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

# More CSS: Text and Pseudo-classes

## Contents

-   [Introduction](#introduction)
-   [Text and Font Styles](#text-and-font-styles)
-   [Pseudo-classes](#pseudo-classes)
-   [Examples](#examples)
-   [References](#references)

## Introduction

-   Review due dates on Moodle.
-   Answer questions about this week's lab assignment.

##Text and font styles

- <u>Font Properties</u>

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
    - An absolute size in units of
      - *cm* (centimeters)
      - *mm* (milimeters)
      - *in* (inches)
      - *px* (pixels)
      - *pt* (points)
      - *pc* (picas)
  - font-family
    Can either be specific font families or a generic family names.
    - specific family name examples: *times, courier, arial*, etc.
    - generic family name examples: *serif, sans-serif, monospace*, etc.

- Can be set individually or all at once

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

- <u>Text Properties</u>

  - 

- <u>Web Fonts</u>



## Pseudo-Classes



##Examples

* [South India Web Site](https://lcc-cit.github.io/CIS195-Demos/Unit03/Finished/Index.htm)

* [Code for South India Web Site](https://github.com/LCC-CIT/CIS195-Demos/tree/master/Unit03)

##References

* [W3Schools CSS Text Tutorial](https://www.w3schools.com/css/css_text.asp)
* [W3Schools CSS Font Tutorial](https://www.w3schools.com/css/css_font.asp)
* [MDN @font-face Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/%40font-face)

