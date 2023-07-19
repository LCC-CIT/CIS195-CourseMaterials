---
title: More CSS Layout
description: More CSS properties for page layout. 
keywords: float, clear, position, box model, margin, padding, border, border-radius, border-color, overflow, z-index
material: Lecture Notes
generator: Typora
author: Brian Bird
---

**CIS195 Web Authoring 1: HTML**
<h1>More Page Layout Using CSS</h1>

<table>
  <thead>
    <tr>
      <th colspan="2">Topics by Week for the Eight-Week Term</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1. Intro to HTML</td>
      <td><mark>5. Midterm, Layout with CSS</mark></td>
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
      <td>4. Formatting with CSS</td>
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
    </tr>
  </tbody>
</table>
<h2>Contents</h2>

[TOC]

# Q and A

-   Review due dates on Moodle.
-   Answer questions about this week's lab assignment.



# The Box Model

<figure><img src="boxmodel-image.png" alt="CSS box model" height="500px">
<figcaption>By Nasir Darwish, <a href="https://www.codeproject.com/info/cpol10.aspx">Code Project Open License</a></figcaption>
</figure>


## Setting the border style

By default, the border is not visible. You need to set a visible border style before you can see it. These are the options for border-style:

- none&mdash;Displays no border.
- hidden&mdash;Displays no border unless an image is set.
- dotted&mdash;Displays a series of dots. 
- dashed&mdash;Displays a series of dashes.
- solid&mdash;Displays a single, straight, solid line.
- double&mdash;Displays two straight lines that add up to the pixel size set by border-width.
- groove&mdash;Displays a border that looks like a v-shaped groove.
- ridge&mdash;Displays a border that looks like a v-shaped ridge. (The opposite of a groove).
- inset&mdash;Displays a border that makes the element appear embedded. 
- outset&mdash;Displays a border that makes the element appear embossed. (The opposite of inset.)

## Setting the width of border, margin or padding

Example of setting all widths:

```css
div {
  border: 10px;
  padding: 15px;
  margin: 20px;
}
```

You can set border, padding and margin independently for each side:

- border-top
  Example: `border-top: 5px;`
- border-right
  Example: `border-right: 10px;`
- border-bottom
  Example: `border-botton: 15px;`
- border-left
  Example: `border-left: 20px;`

You can set them all at once using the shorthand property.
The sequence is: top, right, bottom, left.

Example: `border: 5px 10px 15px 20px;`

## Setting Colors

### Border

You can set the color of the border like this: `border-color: blue`.

### Padding

The color of an element's padding will be the same as the background color of the element. You can't set it separately.

### Margin

The color of an element's margin will be the same color as the background of whatever element contains it. You can't set it separately.
For example, a section contains a paragraph:

```html
<section>
  <p>Some text.</p>
</section>
```

If the section has a blue background, and it contains a paragraph with a 10px margin. The margin of the paragraph will be blue too. Here's are the CSS rules that would do that:

```css
section {background-color: blue;}
p {margin: 10px;}
```



# Creating Rounded Corners

Use the CSS border-radius property to give a block element rounded corners.

- border-top-left-radius&mdash;Sets the radius of the top-left corner
  Example: `border-top-left-radius: 5px;`

- border-top-right-radius&mdash;Sets the radius of the top-right corner
  Example: `border-top-right-radius: 10px;`

- border-bottom-right-radius&mdash;Sets the radius of the bottom-right
  Example: `border-bottom-right-radius: 15px;`

- corner border-bottom-left-radius&mdash;Sets the radius of the bottom-left corner
  Example: `border-bottom-left-radius: 20px;`

- border-radius&mdash;Shorthand for setting all the four border-radii.
  They are set in clock-wise order stating at the top-left corner.
  

Example: `border-radius: 5px 10px 15px 20px;`

  

# Positioning

The *position* property specifies the positioning method used for an element: 

- static&mdash;not positioned in any special way. This is the default.

- relative&mdash;sets position relative to it's normal position.

- fixed&mdash;sets position relative to the viewport (browser window). The position <u>does not change</u> as the page is scrolled.

- absolute&mdash;sets position relative to the nearest positioned ancestor&mdash;which  will be the body if no others have their position set.

- sticky&mdash;sets position based on the browser window's scroll position. As long as an element's position is inside the window (viewport), its position setting is *relative*. But, when the pate is scrolled until the element is at the edge of the window, it sticks there.

  

After setting a position property, a distance can be set. Elements are positioned using the one of the following properties:

- top&mdash;a positive number moves the top of the element <u>down</u>.

- bottom&mdash;a positive number moves the bottom of the element <u>up</u>.

- left&mdash;a positive number moves the left side of the element to the <u>right</u>.

- right&mdash;a positive number moves the right side of the element to the <u>left</u>.

  

This example moves the image 100 pixels to the <u>right</u> and 50 pixels <u>down</u>:

```css 
img {
  position: relative;
  left: 100px;
  top: 50px;
}
```



# Overflow Content

The *overflow* property specifies what should happen if content overflows an element's content area. The values are:

- visible&mdash;The overflow is not clipped. It renders outside the element's box. This is default.
- hidden&mdash;The overflow is clipped, and the rest of the content will be invisible.
- scroll&mdash;The overflow is clipped, but a scroll-bar is added to see the rest of the content.
- auto&mdash;If overflow is clipped, a scroll-bar should be added to see the rest of the content.

Example:

```css
div {
  overflow: scroll;
}
```



# Stacking Objects in a Page

The *z-index* property specifies the stack order of an element. The greater the stack order, the closer an  is element is to the front. 

This property <u>only works</u> for elements that have their *position* set. 

There are two possible values:

- auto&mdash;sets the stack order equal to its parents. This is default and will normally result in a value of 0.
- a number&mdash;sets the stack order of the element. The highest number will be on top. Negative numbers are allowed

Example:

```css
img {
  position: fixed;
  left: 10px;
  top: 10px;
  z-index: -1;
}
```



# Example

* [South India Web Site](https://lcc-cit.github.io/CIS195-Demos/Unit03/Finished/)

* [Code for South India Web Site](https://github.com/LCC-CIT/CIS195-Demos/tree/master/Unit03)

  

# References

* [W3Schools: Box Model ](https://www.w3schools.com/css/css_boxmodel.asp)
* [W3Schools: Rounded Corners](https://www.w3schools.com/css/css3_borders.asp)
* [W3Schools: The CSS Position Property](https://www.w3schools.com/css/css_positioning.asp)
* [W3Schools: The Overflow Property](https://www.w3schools.com/cssref/pr_pos_overflow.asp)
* [W3Schools: Z-Index Property](https://www.w3schools.com/cssref/pr_pos_z-index.asp)



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes, written by [Brian Bird](https://profbird.dev) in 2018 and revised by Brian Bird in 2020, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------

