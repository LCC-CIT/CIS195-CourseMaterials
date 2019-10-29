#Styling with CSS

| Course Topics by Week            |                             |
| -------------------------------- | --------------------------- |
| 1. Intro to HTML 5               | 6. Page Layout with CSS     |
| 2. More HTML 5                   | 7. HTML Tables              |
| 3. Developing a Web Site         | 8. HTML Forms               |
| 4. <mark>Styling with CSS</mark> | 9. Multimedia               |
| 5. Midterm Quiz                  | 10. Review and Term Project |
|                                  | 11. Final Quiz              |


##Contents

-   [Introduction](#introduction)
-   [Basic CSS](#basic-css)
-   [More Selectors](#more-selectors)
-   [Structural elements as CSS selectors](#Structural elements as CSS selectors)
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
  A Style-sheet is just a set of one or more CSS rules.
  - Types of style-sheets
    
    - Web site style-sheets:
      
      - External&mdash;in a separate file named with a name ending in .css
        In an HTML file, use the *link* element to apply a css file.
        Example:
      
        ```html
        <head>
           <!-- The usual other code would go here -->
           <link href="HomeStyles.css" rel="stylesheet" />
        </head>
        ```
      
      - Embedded&mdash;in a *style* element in an html file
        Example:
      
        ```html
        <head>
           <!-- The usual other code would go here -->
           <style>
             p {
                background-color: papayawhip;
                color: darkblue;
             }
        
              strong {
                font-size: larger;
              }
          </style>
        </head>
        
        ```
      
      - Inline&mdash;in a *style* attribute inside an html tag
        Example:
      
        ```html
        <p style="background-color:lightblue">Some text</p>
        ```
      
    - Browser styles-sheets
      
      - Internal&mdash;defined by the browser developers
      - User Defined&mdash;user preferences
      
    
  - <u>Precedence&mdash;the cascade</u>
    (The ones closer to the top win.)
    
      1. HTML elements's *inline* styles
      2. HTML pages's *embedded* style rules
      3. Site's *external* style-sheet
      4. Browsers's *user-defined* styles
      5. Browsers's *internal* style-sheet
    
    


##More Selectors

- ### Contextual selectors

  | Combinator   | Example        | Description                                             |
  | ------------ | -------------- | ------------------------------------------------------- |
  | comma        | article, p, ol | Matches any of the three elements                       |
  | space        | article ol     | Matches any *ol* that is anywhere inside an *article*   |
  | greater-than | article>ol     | Matches an *ol* that is directly inside an *article*    |
  | plus         | ul+ol          | Matches an *ol* that immediately follows a sibling *ul* |
  | dash         | ul-ol          | Matches any *ol* that is a sibling of an *ul*           |

  

- ### Attribute selectors

  - **id selector**
    A particular id attribute can be used only once on a web page to identify an element. It has multiple uses in HTML.

    - hash tag selects an id.
    - Example of a css id rule:

    ```css
    #intro {
      background-color: powderblue;
    }
    ```
    
    Example of a target HTML element:
    
    ```html
    <p id="intro">This is an introductory parapgrah...</p>
    ```
    
    
  
  
  - **class selector**
    A particular class attribute can be used multiple times on a web page and is only used for applying a CSS rule.
  
    - dot selects a class
      
    - Example of a css class rule:
      
        ```css
        .greenBold {
          font-weight: bold;
            color: green;
        }
        ```
        
    - Example of a target HTML element:
    
      ```html
      <span class="greenbold">This is important!</span>
      ```
    
  - <u>More attribute selectors</u>
  
    | Selector                                                     | Example CSS Rule | Example target HTML Attribute    |
    | ------------------------------------------------------------ | ---------------- | -------------------------------- |
    | element.class                                                | ol.ingredients   | *&lt;ol class="ingredients"*&gt; |
    | element[attribute]                                           | ol[type]         | &lt;*ol type*="A"&gt;            |
    | element[attribute]                                           | ol[type="A"]     | &lt;*ol type="A"*&gt;            |
    | *[And there are more!](https://www.w3schools.com/css/css_attribute_selectors.asp)* |                  |                                  |
    



##Structural elements as CSS selectors

###Semantic structural elements

We've already seen and used some of the structural (aka semantic) elements like `<header>`, `<section>`, etc. Now we will see another use for these elements besides providing organizational structure to our page. These can be used as CSS rule selectors to provide a way to format a section of the page. For example:

```css
section {
   font-family: Verdana, Geneva, sans-serif;
   text-align: center;
}
```

[W3Schools tutorial on semantic elements](https://www.w3schools.com/HTML/html5_semantic_elements.asp)

###Non-semantic structural elements

**The `<div>` element** was a structural element used before HTML5 introduced semantic structural elements. It is  considered non-semantic, because div is just an abbreviation for "division", it's name doesn't have any meaning related to the type of division it represents. 

Example:

```html
<div style="font-family:serif">
   <h2>The City of Chennai</h2>
   <p>Chennai is the largest city in the state of Tamil Nadu. It is located on the Bay of Bengal on the south-east coast of India.</p>
</div>
```

**The `<span>` element** is used to apply CSS formatting to an arbitrary area in a row of in-line elements. 

For example:

```html
The Madras <span style="font-style:oblique">Crocodile Bank Trust and Centre for Herpetology</span> (MCBT) is a reptile zoo and herpetology research station, located 40 kilometres (25 mi) south of the city of Chennai. 
```



##Examples

* [South India Web Site](https://lcc-cit.github.io/CIS195-Demos/Unit04/Finished/Index.html)

* [Code for the South India Web Site](https://github.com/LCC-CIT/CIS195-Demos/tree/master/Unit03)



##References

* [W3Schools CSS Tutorial](https://www.w3schools.com/css/default.asp)
* [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------

