**CIS195 Web Authoring 1: HTML**

# More Basic HTML Elements

| Course weeks and topics              |                         |
| ------------------------------------ | ----------------------- |
| 1. Intro to HTML 5                   | 6. Page Layout with CSS |
| 2. <u>More HTML</u>, History of HTML | 7. HTML Tables          |
| 3. Developing a Web Site             | 8. HTML Forms           |
| 4. Design with CSS                   | 9. Multimedia           |
| 5. Midterm                           | 10. Term Project        |

**Contents**

[TOC]

## Review

Due dates

Look at someone's lab 1 web site. Any volunteers?



## Checking Your Code

### Visual Studio Code

VS Code will automatically let you know if you make mistakes (use wrong syntax) in your HTML code. It does this by showing the number of errors or warnings in the status bar at the bottom of the page.

<img src="VSCodeErrorBar.png" alt="VSCodeErrorBar" style="zoom:67%;" />

### W3C Syntax Validator

Define "syntax"

[W3C HTML Validator](https://validator.w3.org)



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

In a browser, the nested lists would look like this:

- Deserts
  - Pie
  - Cake
  - Ice Cream
- The rest of the list

### Figures

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

The block quote element will:

- Indent the text

- Put blank lines above and below the text

```
<blockquote>
Not all who wander are lost.
</blockquote>
```

In a browser the `blockquote` would look like this:

<blockquote>
  Not all who wander are lost.
</blockquote>

Try it out: [Blockquote on W3Schools](https://www.w3schools.com/TAGS/tag_blockquote.asp)  

### Cite

Use this element to cite the work of someone else.

```html
from "The Riddle of Strider" in <cite>The Fellowship of the Ring</cite> by J.R.R. Tolkien
```

If we put this inside the block quote, it will look like this in the browser

<blockquote>
  Not all who wander are lost.<br>
  from "The Riddle of Strider" in <cite>The Fellowship of the Ring</cite> by J.R.R. Tolkien
</blockquote>
### Special characters

Certain characters are not allowed (reserved characters) in HTML. For example, if you use the less than, `<`, or greater than, `>`, signs in your text, the browser is likely to see them as tags. The solution is to use *character entities* to display reserved characters. The code below shows two ways to write the character entities for `<` and `>`

```html
&lt; or &#60; and &gt; or &#62;
```

Here are two ways to write the character entity for the copyright symbol, &copy;

```html
&copy; or &#169;
```

[Listing of special characters on W3Schools](https://www.w3schools.com/html/html_symbols.asp)  

[Emojis for the Web on W3Schools](https://www.w3schools.com/charsets/ref_emoji_smileys.asp)

### Comments

```html
<!-- this is a comment -->
```

### horizontal rule

The `<hr>` tag will put a horizontal line across the page. This is one of the "empty" tags.



## References

[HTML Element Reference](https://www.w3schools.com/tags/default.asp) &mdash;W3 Schools

[HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) &mdash;Mozilla Developer Network

[Oficial VS Code web site](https://code.visualstudio.com)&mdash;Microsoft

[HTML Syntax Validator](https://validator.w3.org)&mdash;World Wide Web Consortium

------

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/) These lecture notes are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/), by [Brian Bird](https://profbird.dev/), fall 2020.

