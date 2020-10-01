**CIS195 Web Authoring 1: HTML**



| Course weeks and topics              |                         |
| ------------------------------------ | ----------------------- |
| 1. Intro to HTML 5                   | 6. Page Layout with CSS |
| 2. <u>More on Creating Web Pages</u> | 7. HTML Tables          |
| 3. Developing a Web Site             | 8. HTML Forms           |
| 4. Design with CSS                   | 9. Multimedia           |
| 5. Midterm                           | 10. Term Project        |



## Review

Look at someone's lab 1 web site. Any volunteers?



## Syntax Validator

Define "syntax"

[W3C HTML Validator](https://validator.w3.org)



## Visual Studio Code

How to download, install and use VS Code

[Oficial VS Code web site](https://code.visualstudio.com)  

### HTML Structural Elements 

- Non-semantic structural element

- - `<div> some other elements would go here </div>`

- These are *semantic structural elements* (also known as *semantic sectional elements*).

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



## In-line and Block Elements

**In-line elements** arrange themselves horizontally on the page. Examples are:

- Hyperlinks:`<a>`
- Formatting, like:`<strong>`, `<em>`, etc.
- Images:`<img>`

**Block elements** arrange themselves vertically on the page. Examples are:

- headings: `<h1>`, ` <h2>`,  etc.

- paragraph: `<p>`

- lists: `<ul>` and `<ol>`

  

## More HTML Elements 

### Nested lists

Lists can be placed within lists. The right way to do it is to put the nested list inside a li element of the parent list. For example:

```html
<ul>
   <li>Deserts
     <ul>
         <li>Pie</li>
         <li>Cake</li>
        <li>Ice Cream</li>
      </ul>
  </li>
    <li>The rest of the list</li>
</ul>
```

This would look like this:

- Deserts
  - Pie
  - Cake
  - Ice Cream
- The rest of the list



###Figures

Figures are used to change images from inline to block elements. They also allow you to add a caption to the image.

```html
<figure>
  <img
     src="https://developer.mozilla.org/static/img/favicon144.png"
     alt="The Mozilla Developer Netowrk logo">
  <figcaption>MDN Logo</figcaption>
</figure>
```

Try it out: [Figure on W3Schools](https://www.w3schools.com/tags/tag_figure.asp)  



### Block quotes

The block quote element indents the text and puts blank lines above and below it: ` <blockquote>`  
Try it out: [Blockquote on W3Schools](https://www.w3schools.com/TAGS/tag_blockquote.asp)  



### Cite

Use this element to cite the work of someone else.

```html
<cite>The Hobbit</cite> by J.R.R. Tolkein. Painted in 1937.
```



###Special characters

Certain characters are not allowed (reserved characters) in HTML. For example, if you use the less than, `<`, or greater than, `>`, signs in your text, the browser is likely to see them as tags. The solution is to use *character entities* to display reserved characters. The code below shows two ways to write the character entities for `<` and `>`

```html
&lt; or &60; and &gt; or &62;
```

Here are two ways to write the character entity for the copyright symbol, &copy;

```html
&copy; or &#169;
```

[Listing of special characters on W3Schools](https://www.w3schools.com/html/html_symbols.asp)  



###Comments

```html
<!-- this is a comment -->
```



### horizontal rule

The `<hr>` tag will put a horizontal line across the page. This is one of the "empty" tags.



------

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/) These lecture notes are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/), by [Brian Bird](https://profbird.online/), fall 2019.
