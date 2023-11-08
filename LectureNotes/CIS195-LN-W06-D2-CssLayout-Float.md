---
title: CSS layout
description: Page layout using CSS
keywords: css, background, float, clear
material: Lecture Notes
generator: Typora
author: Brian Bird
---
**CIS195 Web Authoring 1: HTML**

<h1>More Page Layout Using CSS</h1>

<table  hidden>
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
      <td>6. CSS Grid and Flexbox</td>
    </tr>
    <tr>
      <td>3. Site structure and navigation</td>
      <td>7. HTML Tables</td>
    </tr>
    <tr>
      <td>4. Formatting with CSS</td>
      <td>8. HTML Forms, Final</td>
    </tr>
  </tbody>
</table>
<table>
  <thead>
    <tr>
      <th colspan="2">Topics by Week for the Ten-Week Term</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1. Intro to HTML</td>
      <td><mark>6. Layout with CSS</mark></td>
    </tr>
    <tr>
      <td>2. More HTML, file paths</td>
      <td>7. CSS Grid, Flexbox</td>
    </tr>
    <tr>
      <td>3. Site structure and navigation</td>
      <td>8. HTML Forms</td>
    </tr>
    <tr>
      <td>4. Formatting with CSS</td>
      <td>9. Multimedia, Final</td>
    </tr>
    <tr>
      <td>5. Project Propposal, Midterm</td>
      <td>10. HTML Tables, Project Completion</td>
    </tr>
  	<tr>
    	<td>11. Final</td>
    </tr>
  </tbody>
</table>
<br>
<h2>Contents</h2>


[TOC]

# Q and A

-   Are there any questions about uploading web sites to citstudent?
-   Are there any questions about the term project?
-   Review due dates on Moodle.

# Introduction
This week we will be talking about using CSS for page layout (design), which is different from formating. The difference is that layout involves controlling the position of things on the page rather than just their appearance.

# Backgrounds
  Backgrounds are colors or images that are in the background of a particular element of your page. If you  use `body` as the selector, then the background will be for the whole body of your page. Using `html` as the selector will apply the background to the whole page.

## CSS background properties
- `background-color`&mdash;sets the color of the background.
- `background-image`&mdash;sets an image to use as the background.
- `background-repeat`&mdash;controls how an image is or isn't repeated.
- `background-attachment`&mdash;controls whether or not the image scrolls with the page.
- `background-position`&mdash;sets the initial position of background images.
  - top, bottom, left, right, center (and more)
  - Numeric coordinates like: 50px 70px

- `background-size`&mdash;sets the size of the background image.  
  This property doesn't work on `body`, you need to apply it to a structural element like `div`.
  - auto, contain, cover (and more)
  - Numeric width and height, like: 500px 400px


## Background Images

Set a background image:

```css
body {
  background-image: url("sunset.png");
}
```

Make an image fill the browser viewport:

- `background-repeat: no-repeat` will stop the image from being tiled.
- `background-size:cover` will cause the image to fit the width to the viewport, but the top and bottom might be clipped.
- `background-size: contain` will make the image height fit the height of the containing element.

```CSS
div {
  background-image: url("sunset.png") 
  background-repeat: no-repeat
  background-size: cover;
}
```

Make an image stretch to fit the body:

```CSS
div {
  background-image: url("sunset.png");
  background-size: 100% 100%; 
}
```


Center the background image:  
(The height of the containing element can be set to determine vertical centering.)

```css
body {
  height: 500px;
  background-image: url("sunset.png") 
  background-repeat: no-repeat
  background-position: center;
}
```

Background shorthand property:

```css
body {
  background: orange url("sunset.png") no-repeat left top;
}
```

### Example of a Background Image

[Web Page with LCC Center Building Background Image](../Examples/LayoutDemos/BackgroundImageDemo.html)



# Page Design

## Fixed Layout

Uses absolute sizes to keep the page at a fixed size.
```css
body {
  width: 1000px;
}
```

## Fluid Layout

Uses percentages to allow the page expand or contract to fit the size of the browser.
```css
body {
  width: 80%;
}
```



# Float and Clear

## Float

The `float` property is used with *block elements* to position them side-by-side (instead of one above another) and to make them move as far as they can to either the left of right. 

Example:

```css
figure {
  float: right;
}
```

## Clear

The `clear` property is used to cancel the float property and put the element back into the normal flow of the page.

Example:

```css
p {
  clear: right;
}
```



Example: [Float Demo](https://lcc-cit.github.io/CIS195-CourseMaterials/Examples/LayoutDemos/FloatDemo.html)

Exercise: [CSS Float and Clear properties](https://lcc-cit.github.io/CIS195-CourseMaterials/Lessons/Unit04/cssFloat.html)



# Example

* [South India Web Site](https://lcc-cit.github.io/CIS195-Demos/Unit05/Finished/)

* [Code for South India Web Site](https://github.com/LCC-CIT/CIS195-Demos/tree/master/Unit05)

  

# References

* [CSS Background](https://www.w3schools.com/css/css_background.asp)&mdash;W3Schools

* [CSS Background Image Size Tutorial](https://www.freecodecamp.org/news/css-full-page-background-image-tutorial/)&mdash;Free Code Camp

* [CSS float](https://www.w3schools.com/css/css_float.asp)&mdash;W3Schools

  

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes by [Brian Bird](https://profbird.online), 2017, updated <time>2023</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------

