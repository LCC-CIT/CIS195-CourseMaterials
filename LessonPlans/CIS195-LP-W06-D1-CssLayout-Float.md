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

# Page Layout using CSS

## Contents

-   [Introduction](#introduction)
-   [Backgrounds](#backgrounds)
-   [Page Design](#page-design)
-   [Float and Clear](#float-and-clear)
-   [Example](#example)
-   [References](#references)



## Introduction

-   Review due dates on Moodle.
-   Did everyone get their citstudent username and password?
-   This week we will be talking about page layout (design), which is different from formating.



##Backgrounds

#### CSS background properties

- background-color
- background-image
- background-repeat
- background-attachment
- background-position

Setting a background image:

```css
body {
  background-image: url("sunset.png");
}
```

#### Background Shorthand Property

```css
body {
  background: orange url("sunset.png") no-repeat left top;
}
```



##Page Design

#### Fixed Layout

Uses absolute sizes to keep the page at a fixed size.
```css
body {
  width: 1000px;
}
```

#### Fluid Layout

Uses percentages to allow the page expand or contract to fit the size of the browser.
```css
body {
  width: 80%;
}
```



##Float and Clear

#### Float

The `float` property is used with block elements to position them side-by-side (instead of one above another) and to make them move as far as they can to either the left of right. 

Example:

```css
img {
  float: right;
}
```


####Clear

The `clear` property is used to cancel the float property and put the element back into the normal flow of the page.

Example:

```css
p {
  clear: right;
}
```



Example: [Float Demo](https://lcc-cit.github.io/CIS195-CourseMaterials/Examples/LayoutDemos/FloatDemo.html)

Exercise: [CSS Float and Clear properties](https://lcc-cit.github.io/CIS195-CourseMaterials/Lessons/Unit04/cssFloat.html)



##Example

* [South India Web Site](https://lcc-cit.github.io/CIS195-Demos/Unit04/Finished/Index.htm)

* [Code for South India Web Site](https://github.com/LCC-CIT/CIS195-Demos/tree/master/Unit04)

  

##References

* [W3Schools Tutorial: CSS Background](https://www.w3schools.com/css/css_background.asp)
* [W3Schools Tutorial: Float](https://www.w3schools.com/css/css_float.asp)
* [W3C Specification: CSS Box Model](https://www.w3.org/TR/css-box-3/)
* [W3C Specification: Backgrounds and Borders](https://www.w3.org/TR/css-backgrounds-3/)

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------

