### CIS 195 Web Authoring 1: HTML

#### Course Topics by Week

|                          |                                      |
| ------------------------ | ------------------------------------ |
| 1. Intro to HTML 5       | <mark>6. Page Layout with CSS</mark> |
| 2. More HTML 5           | 7. HTML Tables                       |
| 3. Developing a Web Site | 8. HTML Forms                        |
| 4. Styling with CSS      | 9. Multimedia                        |
| 5. Midterm Quiz          | 10. Review and Term Project          |
|                          | 11. Final Quiz                       |

# More Page Layout using CSS

## Contents

-   [Introduction](#introduction)
-   [The Box Model](#the-box-model)
-   [Creating Rounded Corners](#creating-rounded-corners)
-   [Positioning](#positioning)
-   [Overflow Content](#overflow-content)
-   [Stacking Objects in a Page](#stacking-objects-in-a-page)
-   [Example](#example)
-   [References](#references)



## Introduction

-   Review due dates on Moodle.
-   Answer questions about this week's lab assignment.



## The Box Model

<figure><img src="boxmodel-image.png" alt="CSS box model" height="600px">
<figcaption style="text-align:center;">By Nasir Darwish, <a href="https://www.codeproject.com/info/cpol10.aspx">Code Project Open License</a></figcaption>
</figure>
Example of setting all widths:

```css
div {
  border: 10px;
  padding: 15px;
  margin: 20px;
}
```

You can set border, padding and margin independently for each side:

- border-top, example: `border-top: 5px;`
- border-right, example: `border-right: 10px;`
- border-bottom, example: `border-botton: 15px;`
- border-left, example: `border-left: 20px;`

You can also set them all at once using the shorthand property.

Example, `border: 5px 10px 15px 20px;`



## Creating Rounded Corners

Use the CSS border-radius property to give a block element rounded corners.

- border-top-left-radius&mdash;Sets the radius of thetop-left corner
  Example: `border-top-left-radius: 5px;`

- border-top-right-radius&mdash;Sets the radius of the top-right corner
  Example: `border-top-right-radius: 10px;`

- border-bottom-right-radius&mdash;Sets the radius of the bottom-right
  Example: `border-bottom-right-radius: 15px;`

- corner border-bottom-left-radius&mdash;Sets the radius of the bottom-left corner
  Example: `border-bottom-left-radius: 20px;`

- border-radius&mdash;Shorthand for setting all the four border-radii

  Example: `border-radius: 5px 10px 15px 20px;`

  

## Positioning

The *position* property specifies the positioning method used for an element: 

- static&mdash;not positioned in any special way. This is the default.

- relative&mdash;positioned relative to it's normal position.

- fixed&mdash;positioned relative to the viewport (browser window).

- absolute&mdash;positioned relative to the nearest positioned ancestor.

- sticky&mdash;positioned based on the user's scroll position.

  

Elements are then positioned using the one of the following properties:

- top

- bottom

- left

- right

  

Example:

```css 
div {
  position: relative;
  left: 100px;
}
```



## Overflow Content

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





## Stacking Objects in a Page

The *z-index* property specifies the stack order of an element. The greater the stack order, the closer an  is element is to the front. This property only works for elements that have their *position* set. There are two possible values:
- auto&mdash;sets the stack order equal to its parents. This is default	
- a number&mdash;sets the stack order of the element. Negative numbers are allowed

Example:

```css
img {
  position: fixed;
  left: 10px;
  top: 10px;
  z-index: -1;
}
```



##Example

* [South India Web Site](https://lcc-cit.github.io/CIS195-Demos/Unit03/Finished/Index.htm)

* [Code for South India Web Site](https://github.com/LCC-CIT/CIS195-Demos/tree/master/Unit03)

  

##References

* [W3Schools: Box Model ](https://www.w3schools.com/css/css_boxmodel.asp)
* [W3Schools: Rounded Corners](https://www.w3schools.com/css/css3_borders.asp)
* [W3Schools: The CSS Position Property](https://www.w3schools.com/css/css_positioning.asp)
* [W3Schools: The Overflow Property](https://www.w3schools.com/cssref/pr_pos_overflow.asp)
* [W3Schools: Z-Index Property](https://www.w3schools.com/cssref/pr_pos_z-index.asp)



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------

