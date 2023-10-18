---
title: CSS Styling
description: How to format a page with CSS
keywords: css
material: Lecture Notes
generator: Typora
author: Brian Bird
---
**CIS195 Web Authoring 1: HTML**

<h1>Styling with CSS</h1>

<table hidden>
  <thead>
    <tr>
      <th colspan="2">Topics by Week for the Eight-Week Term</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1. Intro to HTML</td>
      <td>5. Midterm, Layout with CSS</td>
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
      <td><mark>4. Formatting with CSS</mark></td>
      <td>8. Multimedia, Final</td>
    </tr>
  </tbody>
</table>


<table>
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
      <td>7. HTML Tables</td>
    </tr>
    <tr>
      <td>3. Site structure and navigation</td>
      <td>8. HTML Forms</td>
    </tr>
    <tr>
      <td><mark>4. Formatting with CSS, Midterm</mark></td>
      <td>9. Multimedia, Final</td>
    </tr>
    <tr>
      <td>5. Project Propposal, Midterm</td>
      <td>10. Project Completion, Final</td>
    </tr>
  </tbody>
</table>
<h2>Contents</h2>

[TOC]

# Introduction

## Announcements

-   Reading quiz 4 will close before the next class

-   Lab 3 is due Thursday

-   
    Review lecture notes

-   Practice midterm.

-   You can take the quiz in the classroom at class time, or you can take it in the testing center. 

    - **Classroom** from 12:00 to 1:50 on Thursday, 10/26/2023. 
    - **[Testing center](https://www.lanecc.edu/get-support/academic-support/instructional-testing-services)** 
      - Thursday, 10/26 10:30am&ndash;1:30pm, 4:30pm&ndash;7 pm
      - Friday and Saturday 10/27 and 28 10:00am to 2:00pm.
      - The testing center is located in the Center Building, Room 311 (upstairs and across from the library). You will be allowed to refer to a 3 x 5 card with notes on it
    - In both locations: 
      - help from others, internet searches, ChatGPT, and any other outside sources are not allowed.
      - You will be allowed to refer to a 3 x 5 card with notes on it.

## Q & A
- Any questions about lab 3?
- Anything else?

    



# Basic CSS

Cascading Style Sheets (CSS) refers to both a type of file, .css, and a computer language used to describe the formatting and style of a web page written in HTML.

CSS is designed to facilitate the separation of *presentation* and *content*, including layout, colors, and fonts. This separation can:

- Provide more flexibility and control over formatting.
-  Enable multiple web pages to share formatting by sharing a .css file.
- Improve the page load speed between the pages that share the file and its formatting since the .css file can be cached.

The name cascading comes from the hierarchy of priorities that determine which style rule applies when there is more than one style rule that is applicable to a particular HTML element.

## Style Rules

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
    - Separator  *:*
    - Value  *lightcyan*
    - Terminator  *;*
  
- <u>Comments</u>

  - Example:
    
  ```css
    /* This is a CSS comment */
  ```

- <u>Inheritance</u>
  Any element that is nested inside an element to which a style rule has been applied will inherit that rule. For example, given the `body` rule above, any element inside the body will also have a `light-cyan` background and the `Aria`l font face.

## Style-sheets
A Style-sheet is just a set of one or more CSS rules and it doesn't have to be in a file.

- Types of style-sheets

  - Web site style-sheets:

    - External: in a separate file named with a name ending in .css
      In an HTML file, use the *link* element to apply a css file.
      Example:

      ```html
      <head>
         <!-- The usual other code would go here -->
         <link href="HomeStyles.css" rel="stylesheet" />
      </head>
      ```

    - Embedded: in a *style* element in an html file
      Example:

      ```html
      <head>
         <!-- The usual code would go here -->
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

    - Inline: in a *style* attribute inside an HTML tag
      Example:

      ```html
      <p style="background-color:lightblue;">Some text</p>
      ```

  - Browser styles-sheets

    - Internal: defined by the browser developers.
    - User Defined: defined by the user (not the web developer).


### Precedence: The Cascade

When you have style rules in multiple places with the same selector and conflicting properties, then the style rule that has the highest precedence overrides the others meaning it wins. 

This is the order of precedence from highest to lowest. (#1 is highest)

  1. HTML element's *inline* styles.
  2. HTML page's *embedded* style rules.
  3. 
     HTML pages's *external* style-sheet.

     There can be multiple external style sheets linked to one page. The last one has the highest precedence.
  4. Browser's *user-defined* styles.
  5. Browser's *internal* style-sheet.



# More Selectors

## Contextual Selectors

| Combinator   | Example      | Description                                              |
| ------------ | ------------ | -------------------------------------------------------- |
| comma        | `nav, p, ol` | Matches any of the three elements                        |
| space        | `nav ol`     | Matches any `ol` that is anywhere inside a `nav`.        |
| greater-than | `nav>ol`     | Matches an `ol` that is directly inside an `nav`.        |
| plus         | `ul+ol`      | Matches an `ol` that immediately follows a sibling `ul`. |
| dash         | `ul-ol`      | Matches any `ol` that is a sibling of an `ul`.           |

W3 Schools tutorial: [CSS Combinators](https://www.w3schools.com/css/css_combinators.asp)



## Attribute Selectors

### id Selector
A particular `id` attribute can be used only once on a web page to identify an element. It has multiple uses in HTML.

- A hash tag in an `href` address selects an `id` a link inside a web page.
- The selector for a CSS id rule starts with a hash tag.
- An id can be the target of a CSS rule. Example of a CSS id rule:

```css
#intro {
  background-color: powderblue;
}
```

Example of a target HTML element:

```html
<p id="intro">This is an introductory parapgrah...</p>
```



### Class Selector
A particular class attribute can be used multiple times on a web page and is only used for applying a CSS rule.

- dot selects a class.
  
- Example of a CSS class rule:
  
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

  | Selector type                                                | Example CSS Rule Selector | Example target HTML Attribute    |
  | ------------------------------------------------------------ | ------------------------- | -------------------------------- |
  | element.class                                                | `ol.ingredients`          | *&lt;ol class="ingredients"*&gt; |
  | element[attribute]                                           | `ol[type]`                | &lt;*ol type*="A"&gt;            |
  | element[attribute="value"]                                   | `ol[type="A"]`            | &lt;*ol type="A"*&gt;            |
  | *[And there are more!](https://www.w3schools.com/css/css_attribute_selectors.asp)* |                           |                                  |
  



# Semantic Structural Elements as CSS Selectors

These can be used as CSS rule selectors to provide a way to format a section of the page. For example:

```css
section {
   font-family: Verdana, Geneva, sans-serif;
   text-align: center;
}

article {
   font-size: large;
   color: blue;
}
```

## Semantic Structural Elements

- `<article>`
- `<aside>`
- `<details>`
- `<footer>`
- `<header>`
- `<main>`
- `<mark>`
- `<nav>`
- `<section>`
- `<summary>`
- `<time>`

[W3Schools tutorial on semantic elements](https://www.w3schools.com/HTML/html5_semantic_elements.asp)

## Non-semantic Structural Elements

**The `<div>` element** was a structural element used before HTML5 introduced semantic structural elements. It is considered non-semantic, because div is just an abbreviation for "division", it's name doesn't have any meaning related to the type of division it represents. 

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



# Examples

* [South India Web Site](https://lcc-cit.github.io/CIS195-Demos/Unit04/Finished/Index.html)

* [Code for the South India Web Site](https://github.com/LCC-CIT/CIS195-Demos/tree/master/Unit03)



# References

* [W3Schools CSS Tutorial](https://www.w3schools.com/css/default.asp)
* [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes by [Brian Bird](https://profbird.dev), 2018, revised <time>2023</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------

