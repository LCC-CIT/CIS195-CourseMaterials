# CIS195 Web Authoring 1: HTML                  

##Week 1, Session 2

| **Course weeks and topics**   |                         |
| ----------------------------- | ----------------------- |
| 1. <u>Intro to HTML 5</u>     | 6. Page Layout with CSS |
| 2. More on Creating Web Pages | 7. HTML Tables          |
| 3. Developing a Web Site      | 8. HTML Forms           |
| 4. Design with CSS            | 9. Multimedia           |
| 5. Midterm                    | 10. Term Project        |



## Review

(10 minutes)

- Visual Studio Code

- - Create a new file and rename it

  - Add HTML “boiler plate”

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

- Add some HTML elements

- - What is a tag?
  - What is an element?

- View in browser 

- **Exercise**

- - TBD

 

### More about HTML Tags and Elements

(15 minutes)

- HTML element attributes

  - &lt;*element* *attribute1*=”*value1*” *attribute2*=”*value2*” ...&gt;
  - &lt;meta charset="UTF-8"&gt;

- One-sided or self-closing tags

  - `<br>`

  - `<img src="kitten.png" alt="A very cute kitten">`

### HTML Structural Elements 

(5 minutes)

- Non-semantic structural element

- - `<div> some other elements would go here </div>`

- These are “semantic structural elements”

  ```html
  <header>
  </header>
  <section>
       <article>
       </article>
  </section>
  <aside>
  </aside>
  <footer>
  </footer>
  ```



###More HTML Elements

(15 minutes)

- We can’t see structural elements; they only organize the source code

- We need to put visible elements inside the structural elements. 
  Here are some that we haven’t covered yet:

  - Paragraph: `<p> some text </p>`
  - strong (bold): `<strong>some text</strong>`
  - emphasis (italics): `<emphasis>some text</emphasis>`
  - image: `<img alt="description" src="photo.jpg">`
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
  - Nested lists:
  - ``` html
    <ul>
      <li>First item</li>
      <li>Nested list      <!-- no closing li tag here -->
        <ul>
          <li>Sub-item one</li>
          <li>Sub-item two</li>
        </ul>
      </li>     <!-- closing li for the list item containing the nested list -->
    </ul>
    ```



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 