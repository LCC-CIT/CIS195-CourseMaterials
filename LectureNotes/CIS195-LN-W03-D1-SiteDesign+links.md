---
title: Site Design + Hyperlinks
description: How to design the structure and navigation of a web site.
keywords: File, path, folder, link, nav, navigation, menu
material: Lecture Notes
generator: Typora
author: Brian Bird
---
**CIS195 Web Authoring 1: HTML**

<h1>Site Design and More on Hyperlinks</h1>

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
      <td>1. Intro to HTML</td>
      <td>6. Layout with CSS</td>
    </tr>
    <tr>
      <td>2. More HTML, file paths</td>
      <td>7. CSS Flexbox and Grid</td>
    </tr>
    <tr>
      <td><mark>3. Site structure and navigation</mark></td>
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

## Website Structure

The organization of the code is determined by folders (directories).  
The web site's structure is determined by hyperlinks.



### Hyperlink Navigation—Site maps

A sitemap shows how the web pages are linked together. It can be done simply by using an outline. 

Here's an example based on a market garden web site, [Eaglewing Acres](https://eaglewingacres.com/).

- Navigation (on every page)
  - Home
    - CSA Signup
    - About your farmers
  - What's for sale
    - Request produce or information
    - Learn more
    - Contact page
  - CSA
    - What's for sale
  - Blog
  - Contact
- Footer navigation (at the bottom of every page)
  - Join the CSA
  - Follow us on Facebook (external)
  - Contact Us
  - Newsletter signup



For a site with more complex navigation (hyperlinks) you would need a more complex map.
Look at [The Highlands](http://www.highlands97405.com) web site and draw a site map on the white board.



### Nav element and navigation lists

`<nav>` is a structural element. It can be used to identify a set of links to be used for navigating the web site.

```html
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="stories.html">Our stories</a></li>
    <li><a href="about.html">About us</a></li>
  </ul>
</nav>
```



### How to open a link in a new tab

The anchor element, `<a>` , can have a target attribute that is used to control where the linked page opens. Here are the possible values: 

| Value       | Where the linked document is opened                        |
| :---------- | :--------------------------------------------------------- |
| _blank      | In a new window or tab                                     |
| _self       | In the same frame as the anchor that was clicked (default) |
| _parent     | The parent frame                                           |
| _top        | The full body of the window                                |
| *framename* | A named frame                                              |

Example:

```html
<a href="https://lanecc.edu" target="_blank">LCC Web Site</a>
```

[W3Schools tutorial on the anchor element](https://www.w3schools.com/tags/tag_a.asp)



### Base path for hyperlinks

The <base> tag sets a default path for all the `href` and `src` attributes on the page. 
It should be put in the <head> element.

Example:

```HTML
<head>
   <!-- other stuff left out -->
   <base href="Chennai/" target="_blank">
</head>
<body>
  <!-- This link will open a page in the Chennai sub-folder -->
  <a href="chennai.htm">The city of Channai</a>
</body>
```

[W3Schools tutorial on the base tag](https://www.w3schools.com/tags/tag_base.asp)



### Creating links to locations inside a page

#### Mark the target with the id attribute

To link to a  location within a document, you first need to mark that location. You can do that with the id attribute.

- The id names must be unique.
- The id names are not case sensitive, but matching case is good practice.

#### Use the id as an `href`

Just prefix the id name with a *#* so the browser will know it's a link to an id.

```html
<nav>
  On this page:<br>
  <a href="#intro">Introduction</a><br>
  <a href="#grow">Where the Beans are Grown</a><br>
  <a href="#roast">How the Beans are roasted</a><br>
</nav>

<h2 id="intro">Introduction</h2>
<!-- content omitted, could have been a large block of text -->
<h2 id="grow">Where the Beans are Grown</h2>
<!-- content omitted again -->
<h2 id="roast">How the Beans are Roasted</h2>
```

#### Linking to an id inside another page

```html
<a href="https://theaviary.com/birds.html#pigeons">Our homing pigeons</a>
```




### Image Links

Images can be used as links. Just enclose the `<img>` element in anchor tags.

```html
<a href="https://lanecc.edu"><img src="LccLogo.png"></a>
```

### Hyperlink for Sending an E-mail

You can use an e-mail address in a hypertext link so that when a user clicks the link, the user’s e-mail program opens and automatically inserts the address into the “To” field of the new outgoing message. 

```html
<a href="mailto:webmaster@example.com">Send an e-mail</a>
```

The `mailto` protocol  allows you to add information to the e-mail, including the subject line and the text of the message. Spaces are replaced with the %20 character code since URLs cannot contain blank spaces

```html
<a href="mailto:webmaster@example.com?Subject=Test&Message=This%20is%20a%20test">Send a test e-mail message</a>
```

[More about the href attribute on W3Schools](https://www.w3schools.com/tags/att_a_href.asp)



## Reference

[Creating Hyperlinks—MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)



****

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes by [Brian Bird](https://profbird.dev) written 2017, revised <time>2023</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).