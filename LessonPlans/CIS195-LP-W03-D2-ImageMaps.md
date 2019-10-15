

#Client Side Image Maps



| Course topics by week                      |                         |
| ------------------------------------------ | ----------------------- |
| 1. Intro to HTML 5                         | 6. Page Layout with CSS |
| 2. More on Creating Web Pages              | 7. HTML Tables          |
| 3<u>. Site Design + More on Hyperlinks</u> | 8. HTML Forms           |
| 4. Design with CSS                         | 9. Multimedia           |
| 5. Midterm                                 | 10. Term Project        |

##Image Maps

Images can be divided into different zones, or *hotspots*, each linked to a different target destination.

To define hotspots, you create an image map that contains `<area>` elements that map  specified regions of the  image to specific web pages or locations.

```html
<img src="plantation.png" width="650" height="525" alt="Coffee plantation" usemap="#farm">

<map name="farm">
  <area coords="380,60,500,270" shape="rect" href="beans.html" alt="A cup of coffee beans">
  <area shape="circle" coords="300,130,70" href="press.htm" alt="A french press">
  <area shape="polygon" coords="10,65,15,260,350,260,350,225,230,225,230,60" href="tree.htm" alt= "A coffee tree">
  <area shape="default" coords="0, 0, 650, 525" … />
</map>
```



####Hotspots attributes

- coords: coordinates (location) of the hotspot.
- shape
- href
- alt
###Rectangular hotspots

Two points define a rectangular hotspot:
the upper-left corner
the lower-right corner.

```html
<area coords="380,60,500,270" shape="rect" href="beans.html" alt="A cup of coffee beans">
```

### Circular hotspots

A circular hotspot is defined by the location of its center and its radius.

``` html
<area shape="circle" coords="300,130,70" href="press.htm" alt="A french press">
```


### Polygonal hotspots

To create a polygonal hotspot, you enter the coordinates for each vertex in the shape.

```html
<area shape="polygon" coords="10,65,15,260,350,260,350,225,230,225,230,60" href="tree.htm" alt= "A coffee tree">
```



### Default hotspot

```html
<area shape="default" coords="0, 0, 650, 525" href="plantation.html" alt="Our farm">
```

- Where the first pair of numbers is always zero and the second pair are the width and height of the image in pixels.
- Any spot that is not covered by another hotspot will activate the default hotspot link



##Reference

[Image map on W3Schools](https://www.w3schools.com/tags/tag_map.asp)

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------