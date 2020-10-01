# CIS195 Web Authoring 1: HTML                  

## Week 1, Session 2

| **Course topics by week**     |                         |
| ----------------------------- | ----------------------- |
| 1. <u>Intro to HTML</u>       | 6. Page Layout with CSS |
| 2. More on Creating Web Pages | 7. HTML Tables          |
| 3. Developing a Web Site      | 8. HTML Forms           |
| 4. Design with CSS            | 9. Multimedia           |
| 5. Midterm                    | 10. Term Project        |



## Review

- Visual Studio Code

  - Create a new file and rename it

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

  - What is a tag?
  - What is an element?

- View in browser 




### More about HTML Tags and Elements

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


------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes by [Brian Bird](https://profbird.dev) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 