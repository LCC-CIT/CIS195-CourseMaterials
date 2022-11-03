**CIS 195 Web Authoring 1: HTML**

<h1>More Page Layout using CSS</h1>

| Course Topics by Week    |                                      |
| ------------------------ | ------------------------------------ |
| 1. Intro to HTML 5       | <mark>6. Page Layout with CSS</mark> |
| 2. More HTML 5           | 7. HTML Tables                       |
| 3. Developing a Web Site | 8. HTML Forms                        |
| 4. Styling with CSS      | 9. Multimedia                        |
| 5. Midterm Quiz          | 10. Review and Term Project          |
|                          | 11. Final Quiz                       |

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

  

This example moves the image 100 pixels to the right:

```css 
img {
  position: relative;
  left: 100px;
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

