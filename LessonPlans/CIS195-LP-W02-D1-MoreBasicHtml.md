*CIS195 Web Authoring 1: HTML                                 Week 2, Session 1**

Brian Bird

| Course weeks and topics              |                         |
| ------------------------------------ | ----------------------- |
| 1. Intro to HTML 5                   | 6. Page Layout with CSS |
| 2. <u>More on Creating Web Pages</u> | 7. HTML Tables          |
| 3. Developing a Web Site             | 8. HTML Forms           |
| 4. Design with CSS                   | 9. Multimedia           |
| 5. Midterm                           | 10. Term Project        |

## Review

Look at someone's lab 1 web site. Any volunteers?



## Visual Studio Code

How to download, install and use VS Code

[Oficial VS Code web site](https://code.visualstudio.com)  



## In-line and Block Elements

**In-line elements** arrange themselves horizontally on the page. Examples are:

- <em>
- <strong>
- <img>

**Block elements** arrange themselves vertically on the page. Examples are:

- headings (<h1>, <h2>, etc.)

- paragraph: <p>

- lists: <ul> and <ol>

  

## More HTML Elements 

### Nested lists

Lists can be placed within lists. The right way to do it is to put the nested list inside a li element of the parent list. For example:

```
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

```
<figure>
<img
src="https://developer.mozilla.org/static/img/favicon144.png"
alt="The beautiful MDN logo.">
<figcaption>MDN Logo</figcaption>
</figure>
```

[Figure on W3Schools](https://www.w3schools.com/tags/tag_figure.asp)  



### Block quotes

The block quote element indents the text and puts blank lines above and below it:  <blockquote>  
[Blockquote on W3Schools](https://www.w3schools.com/TAGS/tag_blockquote.asp)  



###Special characters

For example, the copyright symbol: ©

```
&copy; or &#169;
```

[Listing of special characters on W3Schools](https://www.w3schools.com/html/html_symbols.asp)  



###Comments

```
<!-- this is a comment -->
```



------

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/) These lecture notes are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/), by [Brian Bird](https://profbird.online/), fall 2019.