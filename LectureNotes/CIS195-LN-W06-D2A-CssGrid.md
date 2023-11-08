---
title: CSS Grid
description: How to position items on the page using the CSS Grid. 
keywords: display, grid, inline-grid
generator: Typora
author: Brian Bird
---

**CIS195 Web Authoring 1: HTML**

<h1>Using the CSS Grid for Layout</h1>

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
      <td><mark>7. CSS Flexbox and Grid</mark></td>
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

## Q and A

-   Update on CSS background images:
    -   CSS `background-size: contain` and `cover` don't work on `body`, you need to use a `div`, or other structural element like `section`. 
    
-   Winter registration is open!  
    [Upcoming classes](https://lcc-cit.github.io/CS133JS-CourseMaterials/LectureNotes/CS133JS-LN-W06-DX-NextSoftwareDevClasses.html) for the Software Development AAS degree program 
-   Lab 5 on Positioning&mdash; any questions?
    -   Code review due today.
    -   Production version due Thursday.

-   Does anyone have any other questions about anything?

## Grid Container Elements

The CSS *grid* is used to position elements on a page. 

- The grid needs to be created inside some *container element*.  
- The container can be any element that can hold other elements, like `div` or  `section`.
- The `display: grid` or `display: inline-grid`  property must be applied to the container. 

  This is what makes the element a container for a grid!

  - The `grid-template-columns` property determines the width and number of columns.


For example, this HTML code:
```html
<div style="display: grid; grid-template-columns: auto auto auto;">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>  
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>  
  <div>Item 7</div>
  <div>Item 8</div>
  <div>Item 9</div>  
</div>
```

Will be displayed like this on the web page:

Item 1						Item 2						Item 3  

Item 4						Item 5						Item 6  

Item 7						Item 8						Item 9  

Note that the three `auto` values in  `grid-template-columns: auto auto auto` are what specify the three columns and that their width is automatically determined.

## Grid Rows and Columns

- Columns; the number of columns and the width of each column are specified using the `grid-template-column` property as seen above. It can have the following values:
  - `auto`:  the width is determined automatically.
  - `max-content`:  the width is determined by the largest item in the column.
  - `min-content`:  the width is determined by the smallest item in the column.
  - numeric value:  any valid CSS width value with units including px, pt, in, em, %, etc.
- Rows: The height is specified by the `grid-template-row` property.
  - This property can have all the same values as those shown above.
  - If there are more rows than values, the last value will be applied to the rest of the rows.

Example:

```html
<!-- in an embedded style sheet -->
  .container {
    display: grid; 
    grid-template-columns: 200px 200px 200px; 
    grid-template-rows: 50px 50px;
  }

<!-- in the body -->
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>  
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>  
  <div>Item 7</div>
  <div>Item 8</div>
  <div>Item 9</div>  
</div>
```



## Grid Lines and Gaps

A gap is like a combination of padding and margin in the CSS box model; it's just the space between rows or columns. 

-  **Grid gaps** are set using one or more of these properties with any valid numeric length value:

  - `column-gap`: sets the width of the column gap.

  - `row-gap`: sets the height of the row gap.

  - `gap`: sets both the column and row gaps[^1].


![](Images/CSS_GirdGaps.png)

- **Grid lines** are invisible lines that you can use to align things on your grid. They are numbered from left to right and from top to bottom.

  ![](Images/CSS_GridLines.png)

An element can be made to span multiple columns using the column lines as a reference; for example:

  ```css
  .item2 {
    grid-column-start: 2;
    grid-column-end: 4;
  }
  ```

An element can be made to span multiple rows using the row lines as a reference; for example:

  ```CSS
  .item3 {
    grid-row-start: 2;
    grid-row-end: 4;
  }
  ```

We can apply these CSS rules like this:
```html
<div style="display: grid; grid-template-columns: auto auto auto;">
  <div>Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>  
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>  
  <div>Item 7</div>
  <div>Item 8</div>
  <div>Item 9</div>  
</div>
```

Which will look like this on the web page:

Item 1						Item 2  

Item 3						Item 4						Item 5  

​									Item 6						Item 7

Item 8						Item 9  



## Example Code

Open the example web page in your browser and use the *View Source* feature to look at the source code.

[CSS Grid Examples](../Examples/LayoutDemos/cssGridExample.html)



## Reference

[CSS Grid Tutorial](https://www.w3schools.com/css/css_grid.asp) by W3schools  

[CSS Grid](https://flaviocopes.com/book/css/#31-css-grid) in [*The CSS Handbook*](https://flaviocopes.com/book/css/) by Flavio Copes

[Grids](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids) in [MDN Web Docs](https://developer.mozilla.org/en-US/)



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes, written by [Brian Bird](https://profbird.dev) in <time>2023</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

[^1]: The CSS2 property `grid-gap`, is now deprecated and replaced by the CSS3 property `gap`.
