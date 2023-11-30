---

title: CSS Flexbox
description: Layout with CSS flex box. 
keywords: flex
material: Lecture Notes
generator: Typora
author: Brian Bird
---

**CIS195 Web Authoring 1: HTML**

<h1>CSS Flexbox</h1>



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
      <td><mark>7. CSS Grid and Flexbox</mark></td>
    </tr>
    <tr>
      <td>3. Site structure and navigation</td>
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

# Q and A

-   Lab 5 is due today.
-   Are there any questions about lab assignments or the term project?

# Flexbox 

## Overview

Flexbox is used to control the layout of elements in one dimension, either horizontally or vertically. This is one of the main differences from the CSS grid, which controls layout in two dimensions.

## Defining a Flexbox Container

To use flexbox, you first define a flexbox container using this CSS property: `display: flex`  
You may then place elements inside the flexbox container. For example:

```html
<div style="display:flex;">
	<p>Paragraph 1</p>
	<p>Paragraph 2</p>
	<p>Paragraph 3</p>
</div>
```
This flexbox container isn't doing anything very interesting yet other than positioning the paragraphs horizontally. (They would normally be stacked vertically.) Here is how the elements are arranged (with borders added to make the elements visible).

<div style="display:flex; border:solid;">
	<p style="border:solid;">Paragraph 1</p>
	<p style="border:solid;">Paragraph 2</p>
	<p style="border:solid;">Paragraph 3</p>
</div>



## Setting the Flexbox Direction

By default the flexbox arranges the elements inside it horizontally. The CSS property `flex-direction` controls the direction of the flexbox. The options for the value are:

- `row`: flexbox items are displayed in a horizontal row (default).
- `row-reverse`: displays flexbox items in reverse order in a row.
- `column`: flexbox items are displayed in a vertical column.
- `column-reverse`: displays flexbox items in reverse order in a column.

Example of `flex-direction: column`:

```html
<div style="display:flex; flex-direction: column;">
	<p>Paragraph 1</p>
	<p>Paragraph 2</p>
	<p>Paragraph 3</p>
</div>
```
This is rendered in the browser like this:

<div style="display:flex; flex-direction: column; border:solid;">
	<p style="border:solid;">Paragraph 1</p>
	<p style="border:solid;">Paragraph 2</p>
	<p style="border:solid;">Paragraph 3</p>
</div>

With `flex-direction` set to `column-reverse` it looks like this:

<div style="display:flex; flex-direction: column-reverse; border:solid;">
	<p style="border:solid;">Paragraph 1</p>
	<p style="border:solid;">Paragraph 2</p>
	<p style="border:solid;">Paragraph 3</p>
</div>



## Flexbox Alignment Properties

These properties can be used to further control the positioning of elements inside a flexbox:

### `align-items`

Aligns the flex items in a direction at right angles to the container direction (cross-axis).

- For `flex-direction: row`, items are spaced vertically.
- For `flex-direction: column`, items are spaced horizontally.

(This property can also be used on CSS grid containers.)

Value options:

- `normal`: Default value. Items are stretched to take up the available space.  
  We can only see the effect if we give the container some additional height .  
  (This is the same as `stretch` for flexbox containers.)

  <div style="display:flex; align-items: normal; border:solid; height: 200px;">
  	<p style="border:solid;">Paragraph 1</p>
  	<p style="border:solid;">Paragraph 2</p>
  	<p style="border:solid;">Paragraph 3</p>
  </div>

- `stretch`: Items are stretched to take up the available space.  
  
- `center`: Items are in the vertical center of a horizontal flex container.  
  
  - To see this effect on a horizontal flexbox, we need to give the items a fixed height.
  
    <div style="display:flex; flex-direction: row; align-items: center; border: solid; height: 200px;">
  	<p style="border:solid; height: 50px;">Paragraph 1</p>
  	<p style="border:solid; height: 50px;">Paragraph 2</p>
  	<p style="border:solid; height: 50px;">Paragraph 3</p>
  </div>
  
  - To see this effect on a vertical flexbox, we need to give the items a fixed width.

    <div style="display:flex; flex-direction: column; align-items: center; border: solid; height: 200px;">
    <p style="border:solid; width: 100px;">Paragraph 1</p>
    <p style="border:solid; width: 100px;">Paragraph 2</p>
    <p style="border:solid; width: 100px;">Paragraph 3</p>
    </div>

- `flex-start`: 	Items are stacked at the start of the flex container  
  
  <div style="display:flex; align-items: flex-start; border: solid; height: 200px;">
  	<p style="border:solid; height: 50px;">Paragraph 1</p>
  	<p style="border:solid; height: 50px;">Paragraph 2</p>
  	<p style="border:solid; height: 50px;">Paragraph 3</p>
  </div>

- `flex-end`: Items are stacked at the end of the flex container  

  <div style="display:flex; align-items: flex-end; border: solid; height: 200px;">
  	<p style="border:solid; height: 50px;">Paragraph 1</p>
  	<p style="border:solid; height: 50px;">Paragraph 2</p>
  	<p style="border:solid; height: 50px;">Paragraph 3</p>
  </div>

- `baseline`: Items are stacked at the baseline of the flex container  

  <div style="display:flex; align-content: baseline; border: solid; height: 200px;">
  	<p style="border:solid; height: 50px;">Paragraph 1</p>
  	<p style="border:solid; height: 50px;">Paragraph 2</p>
  	<p style="border:solid; height: 50px;">Paragraph 3</p>
  </div>



### `align-content`

Aligns the flex items in a direction at right angles to the container direction.  
This property determines the spacing between lines, while `align-items` determines how a group of items are aligned within the container. When there is only one line, this property has no effect. One way to get multiple lines is by applying the property `flex-wrap:wrap;`.

### `justify-content`

Used to align the flexbox items in a row. This has no effect when the flex-direction is column.


Value options:

- `flex-start`: Default value. Items are positioned at the beginning of the container.  
  <div style="display:flex; flex-direction: row; justify-content: flex-start; border:solid;">
  	<p style="border:solid;">Paragraph 1</p>
  	<p style="border:solid;">Paragraph 2</p>
  	<p style="border:solid;">Paragraph 3</p>
  </div>
  - Note that for `flex-direction: row-reverse`, the start of the container is on the right!  
  
    <div style="display:flex; flex-direction: row-reverse; justify-content: flex-start; border:solid;">
  	<p style="border:solid;">Paragraph 1</p>
  	<p style="border:solid;">Paragraph 2</p>
  	<p style="border:solid;">Paragraph 3</p>
  </div>
  
- `flex-end`: Items are positioned at the end of the container.  
  
   <div style="display:flex; justify-content: flex-end; border:solid;">
    	<p style="border:solid;">Paragraph 1</p>
    	<p style="border:solid;">Paragraph 2</p>
   	<p style="border:solid;">Paragraph 3</p>
   </div>
   
- `center`: Items are positioned in the center of the container.  
   <div style="display:flex; justify-content: center; border:solid;">
    	<p style="border:solid;">Paragraph 1</p>
    	<p style="border:solid;">Paragraph 2</p>
    	<p style="border:solid;">Paragraph 3</p>
  </div>

- `space-between`: Items will be evenly spaced with the first and last items at the edges of the container.  

  <div style="display:flex; justify-content: space-between; border:solid;">
  	<p style="border:solid;">Paragraph 1</p>
  	<p style="border:solid;">Paragraph 2</p>
  	<p style="border:solid;">Paragraph 3</p>
  </div>

- `space-around`: Items will be evenly spaced with half as much space before the first and after the last item.  
  <div style="display:flex; justify-content: space-around; border:solid;">
  <p style="border:solid;">Paragraph 1</p>
  	<p style="border:solid;">Paragraph 2</p>
  	<p style="border:solid;">Paragraph 3</p>
  </div>

- `space-evenly`: Items will have equal space around them.  

- <div style="display:flex; justify-content: space-evenly; border:solid;">
  <p style="border:solid;">Paragraph 1</p>
  	<p style="border:solid;">Paragraph 2</p>
  	<p style="border:solid;">Paragraph 3</p>
  </div>



## Flexbox Flow Properties

- `flex-wrap`  Determines whether or not flex items wrap within the flex container.

- `flex-flow`  Shorthand for setting both the `flex-direction` and `flex-wrap` properties.

## Flex Item Properties

These are properties you can apply to individual items within a flexbox container.

- `order`  Moves the item to a different position.
- `align-self`  This property accepts the same values as align-items.

# References

* [Chapter 32. Flexbox](https://flaviocopes.com/book/css/#32-flexbox), in *The CSS Handbook*, but Falvio Copes

* [W3Schools: Flexbox ](https://www.w3schools.com/css/css3_flexbox.asp)

* [MDN Guide: Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

* [Flexbox Froggy](https://flexboxfroggy.com/), fun interactive site for playing with flexbox.

  

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes, written by [Brian Bird](https://profbird.dev) in <time>2023</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------

