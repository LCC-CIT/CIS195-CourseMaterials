<h1>
  Page Layout using CSS
</h1>
<h2>CIS 195 Web Authoring 1: HTML<h2>

| Course Topics by Week    |                                      |
| ------------------------ | ------------------------------------ |
| 1. Intro to HTML 5       | <mark>6. Page Layout with CSS</mark> |
| 2. More HTML 5           | 7. HTML Tables                       |
| 3. Developing a Web Site | 8. HTML Forms                        |
| 4. Styling with CSS      | 9. Multimedia                        |
| 5. Midterm Quiz          | 10. Review and Term Project          |
|                          | 11. Final Quiz                       |

**Contents**

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

## Background Images

Set a background image:

```css
body {
  background-image: url("sunset.png");
}
```

Make an image fill the browser viewport:

- `background-repeat: no-repeat` will stop the image from being tiled.
- `background-position:cover` will cause the image to fit the width to the viewport, but the top and bottom might be clipped.
- `background-position: contain` will make the image height fit the height of the containing element.

```CSS
body {
  background-image: url("sunset.png") 
  background-repeat: no-repeat
  background-position: cover;
}
```

Make an image stretch to fit the body:

```CSS
body {
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

The `float` property is used with block elements to position them side-by-side (instead of one above another) and to make them move as far as they can to either the left of right. 

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



Example: <a href="https://lcc-cit.github.io/CIS195-CourseMaterials/Examples/LayoutDemos/FloatDemo.html" target="_blank">Float Demo</a>

Exercise: <a href="https://lcc-cit.github.io/CIS195-CourseMaterials/Lessons/Unit04/cssFloat.html" target="_blank">CSS Float and Clear properties</a>



# Example

* <a href="https://lcc-cit.github.io/CIS195-Demos/Unit05/Finished/" target="_blank">South India Web Site</a>

* <a href="https://github.com/LCC-CIT/CIS195-Demos/tree/master/Unit05" target="_blank">Code for South India Web Site</a>

  

# References

* <a href="https://www.w3schools.com/css/css_background.asp" target="_blank">CSS Background</a>&mdash;W3Schools

* <a href="https://www.freecodecamp.org/news/css-full-page-background-image-tutorial/" target="_blank">CSS Background Image Size Tutorial</a>&mdash;Free Code Camp

* <a href="https://www.w3schools.com/css/css_float.asp" target="_blank">CSS float</a>&mdash;W3Schools

  

------

<a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" alt="Creative Commons License"></a> Web Authoring Lecture Notes by <a href="https://profbird.online" target="_blank">Brian Bird</a>, 2017, updated 2022, are licensed under a <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International License</a>. 

------------

