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


<h2>Contents</h2>

[TOC]

## Website Structure

The organization of the code is determined by folders (directories).  
The web site's structure is determined by hyperlinks.



### Hyperlink Navigation—Site maps

A sitemap shows how the web pages are linked together. It can be done simply by using an outline. 

Here's an example based on a small farm web site, <a href="https://ezergracefarm.com/" target="_blank">Ezer Grace Farm</a>.

- Navigation (on every page)
  - Home
  - About
  - Farm Stand
  - Lil' Farmers School
    - Enrollment Form
    - Pay Now
  - Contact
  - Shopping Cart
- Footer navigation (at the bottom of every page)
  - Newsletter signup
  - Follow us on Facebook (external)
  - Follow us on Instagram (external)



For a site with more complex navigation (hyperlinks) you would need a more complex map.
Look at <a href="http://www.highlands97405.com" target="_blank">The Highlands</a> web site and draw a site map on the white board.



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

The anchor element, `<a>`, can have a `target` attribute that is used to control where the linked page opens. (This is unrelated to the *target element* of a fragment link, described below.) Here are the possible values: 

| Value       | Where the linked document is opened                        |
| :---------- | :--------------------------------------------------------- |
| _blank      | In a new window or tab                                     |
| _self       | In the same browsing context as the `<a>` element that was clicked (default) |
| _parent     | The parent browsing context (the parent frame, if any)     |
| _top        | The top-level browsing context (the full window or tab)    |
| *name*      | A named browsing context, such as a named frame            |

Example:

```html
<a href="https://lanecc.edu" target="_blank">LCC Web Site</a>
```

<a href="https://www.w3schools.com/tags/tag_a.asp" target="_blank">W3Schools tutorial on the anchor element</a>



### Base path for hyperlinks

The `<base>` element sets the base URL used to resolve all relative URLs on the page, including those in `href` and `src` attributes. 
It should be put in the `<head>` element.

Example:

```HTML
<head>
   <!-- other stuff left out -->
   <!-- The target attribute makes every link on the page open in a new tab -->
   <base href="Chennai/" target="_blank">
</head>
<body>
  <!-- This link will open a page in the Chennai sub-folder -->
  <a href="chennai.htm">The city of Chennai</a>
</body>
```

**Caution:** the base URL also applies to links that point to locations inside the current page. With the `<base>` above, `<a href="#intro">` would resolve to `Chennai/#intro` and navigate away from the page instead of jumping to the element with `id="intro"`.

<a href="https://www.w3schools.com/tags/tag_base.asp" target="_blank">W3Schools tutorial on the base element</a>



### Creating links to locations inside a page

A *fragment link* (also called a *jump link*) is a link whose URL ends in a *fragment identifier*, on the same page or on another page. The fragment identifier is the text after the `#` (for example, `intro` in `href="#intro"`). It names the *target element* that the browser scrolls to.

Note: the *target element* of a fragment link is unrelated to the `target` attribute of the `<a>` element, which controls where a linked page opens.

#### Mark the target with the id attribute

To link to a location within a document, you first need to mark that location. You can do that by adding the `id` attribute to the target element. Any element can be a target, not just a heading.

- Each id value must be unique on the page.
- An id value must not be empty or contain spaces.
- Id values are case-sensitive. `href="#Intro"` will **not** link to `id="intro"`, so the case must match exactly.
- Older web pages mark targets with `<a name="intro"></a>`. That technique is obsolete; use `id` instead.

#### Use the id as an `href`

Just prefix the id value with a *#* so the browser will know it's a link to an id on the current page.

```html
<nav>
  On this page:<br>
  <a href="#intro">Introduction</a><br>
  <a href="#grow">Where the Beans are Grown</a><br>
  <a href="#roast">How the Beans are Roasted</a><br>
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

#### Linking to the top of the page

An href of just `#` (or `#top`) jumps to the top of the current page.

```html
<a href="#top">Back to top</a>
```

#### Styling the target

The CSS `:target` pseudo-class selects the element that the current fragment identifier points to, so you can highlight it.

```css
:target {
  background-color: lightyellow;
}
```




### Image Links

Images can be used as links. Just enclose the `<img>` element in an `<a>` element.

```html
<a href="https://lanecc.edu"><img src="LccLogo.png"></a>
```

### Hyperlink for Sending an E-mail

You can use an e-mail address in a link so that when a user clicks the link, the user’s e-mail program opens and automatically inserts the address into the “To” field of the new outgoing message. 

```html
<a href="mailto:webmaster@example.com">Send an e-mail</a>
```

The `mailto` protocol  allows you to add information to the e-mail, including the subject line and the text of the message. Spaces are replaced with the %20 character code since URLs cannot contain blank spaces

```html
<a href="mailto:webmaster@example.com?subject=Test&amp;body=This%20is%20a%20test">Send a test e-mail message</a>
```

<a href="https://www.w3schools.com/tags/att_a_href.asp" target="_blank">More about the href attribute on W3Schools</a>



## Reference

<a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks" target="_blank">Creating Hyperlinks—MDN Web Docs</a>



****

<a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" alt="Creative Commons License"></a> Web Authoring Lecture Notes by <a href="https://profbird.dev" target="_blank">Brian Bird</a> written 2017, revised <time>2026</time>, are licensed under a <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International License</a>.