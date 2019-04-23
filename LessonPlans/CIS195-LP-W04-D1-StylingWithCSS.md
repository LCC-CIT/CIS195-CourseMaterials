CIS 195 Web Authoring 1: HTML 

# Styling with CSS

### by Brian Bird

##Course Topics by Week

| Topics                           |                             |
| -------------------------------- | --------------------------- |
| 1. Intro to HTML 5               | 6. Page Layout with CSS     |
| 2. More HTML 5                   | 7. HTML Tables              |
| 3. Developing a Web Site         | 8. HTML Forms               |
| 4. <mark>Styling with CSS</mark> | 9. Multimedia               |
| 5. Midterm Quiz                  | 10. Review and Term Project |

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

    ```css
    body {
    	background-color: lightcyan;
    	font-family: Arial;
    }
    ```

  - <u>Anatomy of a CSS rule:</u>

    - Selector: *body*
      Special selector: * is a "wild card" and will select any element
    - Braces: *{ }*
    - Property: *background-color: lightcyan;*
      - Name: *background-color*
      - Seperator  *:*
      - Value  *lightcyan*
      - Terminator  *;*
    
  - <u>Comments</u>

    - Example:
      
    ```css
      /* This is a comment */
    ```

  - <u>Inheritance</u>
    Any element that is nested inside an element to which a style rule has been applied will inherit that rule.

- ###Style-sheets

  - <u>Types of style-sheets</u>
    
    - Web site style-sheets:
      
      - External&mdash;in a separate file
      - Embedded&mdash;in a &lt;style&gt; element in an html file
      - Inline&mdash;in a *style* attribute inside an html tag
      
    - Browser styles-sheets
      
      - Internal&mdash;defined by the browser developers
      - User Defined&mdash;user preferences
      
    
  - <u>Precedence&mdash;the cascade</u>
    (The ones closer to the top win.)
    
      1. HTML element's *inline* styles
      2. HTML page's *embedded* style rules
      3. Site's *external* style-sheet
      4. Browser's user-defined styles
      5. Browser's internal style-sheet
    
    
  
- ###Example
  ```css
  /* Change font and background colors of all paragraphs */
  p {
       background-color: papayawhip;
      color: darkblue;
     }
  
    /* Make bold text larger */
  strong {
         font-size: larger;
      }
  ```
  
  

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


## Advanced Type Selectors

- ### Contextual selectors

  | Combinator   | Example        | Description                                             |
  | ------------ | -------------- | ------------------------------------------------------- |
  | comma        | article, p, ol | Matches any of the three elements                       |
  | space        | article ol     | Matches any *ol* that is anywhere inside an *article*   |
  | greater-than | article>ol     | Matches an *ol* that is directly inside an *article*    |
  | plus         | ul+ol          | Matches an *ol* that immediately follows a sibling *ul* |
  | dash         | ul-ol          | Matches any *ol* that is a sibling of an *ul*           |

  

- ### Attribute selectors

  - <u>id selector</u>
    A particular id attribute can be used only once on a web page to identify an element. It has multiple uses in HTML.

    - hash tag selects an id
    
    - Example:
      
      ```css
  topics {
          background-color: powderblue;
      }
      ```
    
  - <u>class selector</u>
    A particular class attribute can be used multiple times on a web page and is only used for applying a CSS rule.
  
  - dot selects a class
    
  - Example:
    
      ```css
      .greenBold {
        font-weight: bold;
          color: green;
      }
      ```
      
  - <u>Combinations with attribute selectors</u>
  
    | Selector              | Example        | HTML Attribute that it matches   |
    | --------------------- | -------------- | -------------------------------- |
    | #                     | &#35;deserts   | *id="deserts"*                   |
    | .                     | .ingredients   | *class="ingredients"*            |
    | element.class         | ol.ingredients | *&lt;ol class="ingredients"*&gt; |
    | element[attribute]    | ol[type]       | &lt;*ol type*="A"&gt;            |
    | element[attribute]    | ol[type="A"]   | &lt;*ol type="A"*&gt;            |
  | *And there are more!* |                |                                  |
    

##Examples

* [South India Web Site](https://lcc-cit.github.io/CIS195-Demos/Unit03/Finished/Index.htm)

* [Code for South India Web Site](https://github.com/LCC-CIT/CIS195-Demos/tree/master/Unit03)

##References

* [W3Schools CSS Reference](https://www.w3schools.com/cssref/)
* [MDN @font-face Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/%40font-face)

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

