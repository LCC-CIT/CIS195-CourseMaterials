# CIS195 Web Authoring 1: HTML                  

## Week 1, Session 2


<table>
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

<table hidden>
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
      <td>4. Formatting with CSS, Midterm</td>
      <td>9. Multimedia, Final</td>
    </tr>
    <tr>
      <td>5. Project Propposal, Midtern</td>
      <td>10. Project Completion, Final</td>
    </tr
  </tbody>
</table>

## Intro

- Review due dates and what you need to do this week.

  - Quiz 1
  - Lab 1

- Review the weekly learning cycle shown in the Moodle side-bar.

  

## Review

- HTML “boiler plate”

  ```html
  <!DOCTYPE html> 
  <html lang="en">
     <head>
        <meta charset="UTF-8">
        <title>Some Title</title>
     </head>
     <body> 
     </body>
  </html>
  ```

- HTML elements

  - What is a tag?
  - What is an element?

## Visual Studio Code

Visual Studio Code

- Install VS Code
  Instructions are here: [Setting up Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview)
- Create an HTML file
  - Create a new file, then rename it with the html extension.
  - Add the HTML "boiler plate".


## More about HTML Tags and Elements

- HTML element *attributes*

  - Pattern: &lt;*element* *attribute1*=”*value1*” *attribute2*=”*value2*” ...&gt;
  - Example: &lt;meta charset="UTF-8"&gt;
  - The two parts of the attribute form a "key-value pair"

- One-sided or "self-closing" tags

  - `<br>`

  - `<img src="kitten.png" alt="A very cute kitten">`



### More HTML Elements

Here are some elements that we haven’t covered yet:

- Paragraph: `<p> some text </p>`
- strong (bold): `<strong>some text</strong>`
- emphasis (italics): `<emphasis>some text</emphasis>`
- image: `<img alt="description" src="photo.jpg">`

  Put the image file in the same folder with the html file.
- Link: `<a href="http://lanecc.edu">Lane Community College</a>`
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



## Lab Assignment

The lab 1 instructions are posted in the week 1 section on Moodle.




------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes by [Brian Bird](https://profbird.dev) 2018, revised 2023, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 