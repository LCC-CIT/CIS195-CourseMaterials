Week 10, Day 1, Advanced CSS

**CIS195 Web Authoring 1: HTML                                 November 28, 2017  
**

<div>

Brian Bird

</div>

  
***Topic:  Advanced CSS, Part 2  
***

<div class="section">

  
**Course weeks and topics  
**

<table style="width: 807px; height: 127px;" data-border="1"><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td>1. Intro to HTML 5</td><td>6. HTML Tables</td></tr><tr class="even"><td>2. Developing a Web Site</td><td>7. HTML Forms</td></tr><tr class="odd"><td>3. Design with CSS</td><td id="week08">8. Multimedia</td></tr><tr class="even"><td>4. Page Layout with CSS</td><td id="week09">9. Advanced CSS<br />
</td></tr><tr class="odd"><td>5. Midterm</td><td id="week10">10. More CSS / Term Project<br />
</td></tr></tbody></table>

**  
  
Introduction**  

Announcements  

Review due dates on Canvas

Lab 8

Week 10, Saturday, 12/2: production version

<!-- -->

No code review

Term Project

-   Beta version, Saturday, 12/2
-   Code review, Monday, 12/4 (or earlier!)
-   Production version, Tuesday, 12/5

Final Quiz

Practice quizzes are open now and will close at 11:55 pm on Monday 12/4

You may take it in class at 12:00 on Tuesday, 12/5

It will be open online all day Tuesday, 12/5

<!-- -->

<div>

**Overview**

</div>

<div>

[<span style=" color: #0000ee;">Borders for images</span>](#topic5)

[<span style="  color: #0000ee;">Opacity of page objects</span>](#topic6)

[<span style="   color: #0000ee;">Media device styling</span>](#topic7)

<span style="    color: #0000ee;">[Print styling](#topic8)  
</span>

<span style="    color: #0000ee;">[Visual Viewport](#topic9)  
</span>

<span style="    color: #0000ee;">[Media Query](#topic10)  
</span>

<span style="    color: #0000ee;">[Styles for Mobile Devices](#topic11)  
</span>

<!-- -->

</div>

</div>

<div class="section">

<u>**Border Images  
**</u>

The border-image property allows you to use an image as a border around an element

Syntax: border*-image(url(image url), slice, color stop, ...) *

-   direction (optional)

<!-- -->

-   an angle: *45deg*

<!-- -->

-   to a side: *to left*

<!-- -->

-   to a corner: *to top left*

<!-- -->

-   color and stop

<!-- -->

-   color can be a color keyword, rgb, rgba, hsl, or hsla: *blue*

<!-- -->

-   stop (optional) can be a percentage or a pixel value: *70%*

<!-- -->

-   any number of color stop pairs can be listed

Let's start with this image:  
<img src="border.png" height="200" />  
  

Now make it the border around a div  
`style="border-image: url(border.png) 60 stretch; border:30px              solid transparent;"                          `

<div style="width:300px; height:70px; border:30px solid transparent; padding:10px; border-image: url(border.png) 60 stretch;">

This div has an image for a border  
Note that we had to give it a wider border so that we could see the border image

</div>

Try it: [W3Schools, CSS3 border-image Property  
](https://www.w3schools.com/csSref/css3_pr_border-image.asp)

<u>**CSS3 Opacity  
**</u>

CSS3 opacity style syntax: *opacity: value;*

-   The value ranges from 0, completely transparent, to 1, completely opaque.

Example:  
`style="opacity: 0.5;"                          `

Try it: [W3Schools, opacity property  
](https://www.w3schools.com/CSSref/css3_pr_opacity.asp)

<u>**Using Special Styles for Different Media Types  
**</u>

There are many possible devices that could be used to display a web page. Each of the following is a device type that is defined for the HTML *media* attribute

-   *braille* - Braille tactile feedback device
-   *embossed* - Braille printer that produces embossed pages
-   *handheld* - Mobile devices like phones and tablets
-   *print* - Printers
-   *projection* - Video projectors
-   *screen* - Computer monitors
-   *speech* - Speech synthesizers
-   *tty* - Teletypes and other text-only devices devices with fixed with fonts (archaic)
-   *tv* - Televisions and devices with displays that function like a TV
-   *all* - All of the above

<u>Select CSS stylesheets based on media type</u>

-    You can specify that special styling be applied for certain media types.

<!-- -->

-   To use a special style sheet for one media type, specify it in the *link* element. For example, to load a special style sheet for mobile devices, use a *link* like this:  
    `<link href="mobile.css" media="handheld" />                              `

<!-- -->

-   You can specify styling for multiple media types:  
    `<link href="mobile.css" media="speech, braille" />                              `
-   You can also specify an embedded style be used for a specific media type:  
    `<style media="handheld">                   /* style rules go here */                </style>              `  

<!-- -->

-   Tutorial: [W3Schools, HTML *media* Attribute  
      
    ](https://www.w3schools.com/TAGS/att_media.asp)

<u>Define CSS style rules based on media type</u>.

-   Instead of having multiple style sheets, you can define certain rules within your style sheet be used only for specific media types.

CSS *@media* rule

-   Put all the rules to be used for a particular media type (or types) inside the *@media* rule's curly braces. For example:  
    `@media handheld {                     body {                        font-size: 8px;                     }                     h1 {                        font-size: 10px;                     }                  }                `

<!-- -->

-   Try it: [W3Schools, CSS @Media Rule ](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)

<!-- -->

The *@media* rule is one of several CSS at-rules

-   at-rules are CSS rules that don't have a selector
-   Some at-rules are conditional  

<!-- -->

-   Reference: [MDN, at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule)

<u>**Print Styling  
**</u>

<u>CSS @page rule</u>

-   For printing, CSS has a special box-model that has two areas: page content and *margin*

<!-- -->

-   Use the *@page* rule to selectively apply style properties for printing*.* For example use this rule to set the page content size and the margin:  
    `@page  {                   size: 8.5in 11in portrait;                   margin: 0.5in;                }              `

<u>CSS *page-break* property</u>

-   Control page breaks using: 

*page-break-before: type* or *page-break-after: type  
*where type can be:

-   *always*
-   *avoid*
-   *left*
-   *right*
-   *inherit*
-   *auto  
    *

*page-break-inside: type  
*where type can be:

-   avoid
-   inherit
-   auto

Example (assume this rule is in a special style sheet for printing)  
`section {                   page-break-after: always;                   page-break-inside: avoid;                }`

<!-- -->

<u>**Using Viewports  
**</u>

A visual viewport is a rectangular region defined for a web page. There can be different visual viewport definitions for different kinds of devices:

Desktop computer screen - the whole page

Printed material - the page-box

Mobile devices - some region smaller than the whole page

-   The visual viewport shows a portion of the page and users can pan around inside the page to see different parts
-   The mobile browser (Safari on an iPad or iPhone, Chrome on an Android) sets the visual viewport size

The *viewport* *meta* element

Syntax: *&lt;meta name="viewport" content="properties" /&gt;*

Example:*  
`<meta`*` name="viewport"                content="width=device-width, initial-scale=1.0,                maximum-scale=1.0" />`*`                                  `*

A layout viewport contains the complete page

<u>**Create a Media Query  
**</u>

-   The CSS3 media rule and HTML5 media attribute can have a "query" added to them so that they apply to not just certain devices, but also to certain media sizes or types.
-   *@media* style rule example:  
    *`@media `*`screen and (max-width: 700px) {                 /* style properties go here */              }`
-   *media* HTML attribute example:  
    `<link href="mobile2.css" media="screen and (device-width:              700px)" ``/>`  
-   Note:Today's mobile devices can have very high pixel count. My Nexus 6P has a screen with 1440 X 2560 pixels

<u>**Create Styles for Mobile Devices  
**</u>

You can create special style sheets or rules for portrait and landscape orientations of mobile devices. Determination of orientation is based on the aspect ratio of the screen, not on actual rotation of the device, so you can simulate this by adjusting the size of a desktop browser.

-   Example with @media CSS rule:  
    `@media screen and (orientation: landscape) {                   /* style rules for landscape orientation go here */                } `

<!-- -->

-   Example with media HTML attribute:  
    `<link href="landscape.css" media="screen and (max-width:                700px)" />`
-   This page has embedded styles that change the background color of the page based on size and orientation.

<!-- -->

</div>
