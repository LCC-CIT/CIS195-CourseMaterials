---
title: CSS Flexbox
description: Layout with CSS flexbox. 
keywords: flex
material: Lecture Notes
generator: Typora
author: Brian Bird
---

**CIS 195 Web Authoring 1: HTML**

<h1>CSS Flexbox</h1>


<h2>Contents</h2>

[TOC]

## Introduction

The flexible box model, or *flexbox* is a CSS layout mode used to control the layout of elements in one dimension, either horizontally or vertically. This differs from the CSS grid, which controls layout in two dimensions.

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
  We can only see the effect if we give the container some additional height.  
  (This is the same as `stretch` for flexbox containers.)

  <div style="display:flex; align-items: normal; border:solid; height: 200px;">
  	<p style="border:solid;">Paragraph 1</p>
  	<p style="border:solid;">Paragraph 2</p>
  	<p style="border:solid;">Paragraph 3</p>
  </div>

- `stretch`: Items are stretched to take up the available space.  
  
- `center`: Items are centered along the cross axis (vertically in a row container, horizontally in a column container).  
  
  - To see this effect clearly on a horizontal flexbox, we can give the items a fixed height (or let them size to their content).
  
    <div style="display:flex; flex-direction: row; align-items: center; border: solid; height: 200px;">
  	<p style="border:solid; height: 50px;">Paragraph 1</p>
  	<p style="border:solid; height: 50px;">Paragraph 2</p>
  	<p style="border:solid; height: 50px;">Paragraph 3</p>
  </div>
  
  - To see this effect clearly on a vertical flexbox, we can give the items a fixed width.

    <div style="display:flex; flex-direction: column; align-items: center; border: solid; height: 200px;">
    <p style="border:solid; width: 100px;">Paragraph 1</p>
    <p style="border:solid; width: 100px;">Paragraph 2</p>
    <p style="border:solid; width: 100px;">Paragraph 3</p>
    </div>

- `flex-start`: Items are aligned at the start of the cross axis (top in a row container, left in a column container).  
  
  <div style="display:flex; align-items: flex-start; border: solid; height: 200px;">
  	<p style="border:solid; height: 50px;">Paragraph 1</p>
  	<p style="border:solid; height: 50px;">Paragraph 2</p>
  	<p style="border:solid; height: 50px;">Paragraph 3</p>
  </div>

- `flex-end`: Items are aligned at the end of the cross axis (bottom in a row container, right in a column container).  

  <div style="display:flex; align-items: flex-end; border: solid; height: 200px;">
  	<p style="border:solid; height: 50px;">Paragraph 1</p>
  	<p style="border:solid; height: 50px;">Paragraph 2</p>
  	<p style="border:solid; height: 50px;">Paragraph 3</p>
  </div>

- `baseline`: Items are aligned along their text baselines.  

  <div style="display:flex; align-items: baseline; border: solid; height: 200px;">
  	<p style="border:solid; font-size: 26px;">Paragraph 1</p>
  	<p style="border:solid; font-size: 14px;">Paragraph 2</p>
  	<p style="border:solid; font-size: 18px;">Paragraph 3</p>
  </div>



### `align-content`

Aligns flex lines along the cross axis when there is extra space in the container.  
This property determines the spacing between lines, while `align-items` determines how items are aligned within each line. 

This property only has an effect on multi-line flex containers (i.e., ones with `flex-wrap: wrap`).

Common values: `stretch` (default), `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.

### `justify-content`

Aligns flex items along the **main axis**:
- For `flex-direction: row` (or `row-reverse`), items are aligned horizontally.
- For `flex-direction: column` (or `column-reverse`), items are aligned vertically (requires the container to have a specified height or extra vertical space to distribute).


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

  <div style="display:flex; justify-content: space-evenly; border:solid;">
  	<p style="border:solid;">Paragraph 1</p>
  	<p style="border:solid;">Paragraph 2</p>
  	<p style="border:solid;">Paragraph 3</p>
  </div>



## Flexbox Flow and Spacing Properties

- `flex-wrap`: Determines whether flex items wrap onto multiple lines within the flex container. Values: `nowrap` (default), `wrap`, `wrap-reverse`.
- `flex-flow`: Shorthand for setting both the `flex-direction` and `flex-wrap` properties.
- `gap`: Sets the spacing (gutters) between flex items without using margins. Can also use `row-gap` and `column-gap`.

## Flex Item Properties

These are properties you can apply to individual items within a flexbox container:

- `order`: Changes the visual order of an individual item (default is `0`).
- `align-self`: Overrides the container's `align-items` value for a single item (accepts the same values as `align-items`).
- `flex-grow`: Determines how much an item will grow relative to other flex items when extra space is available (default is `0`).
- `flex-shrink`: Determines how much an item will shrink relative to other flex items when space is constrained (default is `1`).
- `flex-basis`: Specifies the default size of an item before remaining space is distributed (e.g., `auto`, `200px`, `25%`).
- `flex`: Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis` combined (e.g., `flex: 1;` or `flex: 0 1 auto;`).

## References

* <a href="https://flaviocopes.com/book/css/#32-flexbox" target="_blank">Chapter 32. Flexbox</a>, in *The CSS Handbook*, by Flavio Copes

* <a href="https://www.w3schools.com/css/css3_flexbox.asp" target="_blank">W3Schools: Flexbox </a>

* <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" target="_blank">MDN Guide: Flexbox</a>

* <a href="https://flexboxfroggy.com/" target="_blank">Flexbox Froggy</a>, fun interactive site for playing with flexbox.

  

------

<a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" alt="Creative Commons License"></a> Web Authoring Lecture Notes, written by <a href="https://profbird.dev" target="_blank">Brian Bird</a> in 2023, revised <time>2026</time> are licensed under a <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International License</a>. 

------------

