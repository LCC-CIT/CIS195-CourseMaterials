---
title: Basic HTML Elements
description: Descriptions of more HTML elements, more on VS Code and an overview of the first lab assignment. 
keywords: HTML, Elements, attributes, tags.
material: Lecture Notes
generator: Typora
author: Brian Bird
---
<h1>CIS195 Web Authoring 1: HTML</h1>

<h2>Week 1, Session 2</h2>

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
      <td><mark>1. Intro to HTML</mark></td>
      <td>6. Layout with CSS</td>
    </tr>
    <tr>
      <td>2. More HTML, file paths</td>
      <td>7. CSS Flexbox and Grid</td>
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
      <td>10. Tables, Project Completion</td>
    </tr>
      <tr>
          <td></td>
          <td>11. Final</td>
      </tr>
  </tbody>
</table>
<h2>Contents</h2>

[TOC]

# Intro

- Review due dates and what you need to do this week.

  - Take the reading quiz, if you haven't already done so. Since this is the first week, I'll re-open it for you if you ask.
  - Start Lab 1, it is due on Thursday of next week.

- Review the due dates and the weekly learning cycle shown in the Moodle fly-out on the right side of the page.

  

# Review

- HTML “boiler plate”

  ```html
  <!DOCTYPE html> 
  <html lang="en">
    
     <head>
        <title>Some Title</title>
     </head>
    
     <body> 
  		This is some text.
     </body>
    
  </html>
  ```
  
- HTML elements

  - What is a tag?
  - What is an element?

# Visual Studio Code

Visual Studio Code

- Install VS Code
  Instructions are here: [Setting up Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview)
- Create an HTML file
  - Create a new file, then rename it with the html extension.
  - Add the HTML "boiler plate".


# More about HTML Tags and Elements

## HTML element *attributes*

- Pattern: &lt;*element* *attribute1*=”*value1*” *attribute2*=”*value2*” ...&gt;
- Example: `<meta charset="UTF-8">`
- The two parts of the attribute form a "key-value pair"

## Empty Tags

Also known as one-sided or self-closing tags.

- `<br>`

- `<img src="kitten.png" alt="A very cute kitten">`



## More HTML Elements

Here are some elements that we haven’t covered yet:

### Paragraph

`<p> some text </p>`

### Bold and Italicized Text

- Bold: `<strong>some text</strong>`
- Italics: `<em>some text</em>`

### Image

`<img alt="description" src="photo.jpg">`

- Put image files in the same folder with the html file for now.
- Reduce the size of the image files.
  -  So that your web pages will load quickly.
  - Moodle has a 10 MB upload limit, so when uplaoding web sites to Moodle, the combineds size of all images and web pages must be less than this.
  - Windows and Mac OS both have built-in apps you can use to shrink image files.

### Link

Use the anchor element to create links

 `<a href="https://lanecc.edu">Lane Community College</a>`

### Lists

- Ordered list:

``` html
    <ol>
      <li>First item</li>
      <li>Second item</li>
    </ol>
```
  - Unordered list:
``` html
    <ul>
      <li>First item</li>
      <li>Second item</li>
    </ul>
```



# Lab Assignment

The lab 1 instructions are posted in the week 1 section on Moodle.


------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes by [Brian Bird](https://profbird.dev) 2018, revised 2023, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 