---
title: Resizing imgaes
description: Different methods for shrinking image files.
keywords: img, figure, resize, shrink, photos, paint, preview, png, jpeg, webp.
material: Lecture Notes
generator: Typora
author: Brian Bird
---
<h1>CIS195 Web Authoring 1: HTML</h1>

<h2>Week 1, Session 2B</h2>

<table>
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

<table hidden>
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
      <td>7. HTML Tables</td>
    </tr>
    <tr>
      <td>3. Site structure and navigation</td>
      <td>8. HTML Forms</td>
    </tr>
    <tr>
      <td>4. Formatting with CSS, Midterm</td>
      <td>9. Multimedia, Final</td>
    </tr>
    <tr>
      <td>5. Project Propposal, Midtern</td>
      <td>10. Project Completion, Final</td>
    </tr>
  </tbody>
</table>

[TOC]

## Intro

It is often necessary or beneficial to reduce the size of your image files.

-  So that your web pages will load quickly. 
  Note that web pages will load very quicly when you open the page from a file on your own computer&mdash;even with large images, but those same pages will load more slowly once you have uploaded your web site to a web server and are opening the page over the internet.
- So your site can be uploaded to Moodle, which has a 10 MB upload limit.

### Three Meanings for Size

#### Size on the Screen

Your image will have some visible size on your web page. This size is controlled by the height and/or width settings in the `<img />` element, the size of the screen the web page is being vviewed on and the zoom setting of the browser. The size on the screen is not necessarily related to the size of the image file.

#### Number of Pixels in the Image

Pixels are the little dots that make up the image. The more little dots there are, the higher the resolution (or sharpness) of the image.  For images used on web pages, common image sizes in pixels could be anywhere from 25 X 25 pixels (a total of 625) to 1024 X 1024 (a total of 1,048,576 or one megapixel). The number of pixels in the image will have a direct effect on the file size.

#### Size of the File

The size of the image file will be determined by multiple factors like:

- The image type (.jpeg, .png, .webp, etc.).
- The number of pixels in the image.
- The compression ratio (quality) of the image. 

In the end, you usually want images to be less than 100k in size so that they don't take too long to load when someone opens the web page, but you still want them to look good (or good enough) for the size they are renedered on the page.

## Apps that Can Resize Images

### Windows 10

#### Paint

<img src="Images\Win10PaintIcon.jpeg" alt="WindowsPaintIcon" align="left" style="zoom:75%;" />

1. Open Paint on your computer.
2. Go to *File*, click on *Open*.
3. Now locate the photo you want to resize.
4. Double-click on it.
5. Click on the *resize* button to open the resize and skew window.
6. In the resize and skew window, select the *percentage* option under the resize section.
7. Enter the percentage you want to resize your image by in the horizontal and vertical fields.
8. Click *OK*.



#### Photos

<img src="Images/Win10Photos.jpeg" align="left" style="zoom:40%;" />

1. Open the Photos app from the Windows Start menu.
2. Select *Folders* from the menu at the top of the app's window.
3. Click on the *Add a folder* button (a big orange square) and select the folder containing your imnages.
4. Click on an image you want to resize to select it.
5. Click on the elipses (three dots ...) in the top menu, then click on *Resize image*.
6. Resize the image. 
   Try to make the file size as small as possible while keeping the image looking sharp and clear for the size it will appear on the web page.
   - You can resize by adjusting the precentage or pixels settings.  
     - If you change just one dimension, either width or height, the aspect ratio (ratio of width to height) will be preserved.
     - You can see the resulting size of the image at the bottom or the Resize dialog box.
   - You can also make the file size smaller by adjusting the *quality* (compression) of the image.
7. Click *Save.*



### Windows 11

#### Paint

<img src="Images\Win11PaintIcon.jpeg" alt="Windows 11 Paint Icon" align="left" style="zoom:75%;" />

This works in the same way as the Windows 10 version, but the *Resize* button is in the *Image* section of the toolbar at the top.

#### Photos

<img src="Images/Win10Photos.jpeg" align="left" style="zoom:40%;" />

The most rescent Windows 11 version (as of July 2023) of the Photos app works a little differently from the Windows 10 version. In this version, you need to double-click on an image so that it opens in it's own window in order to get the full menu of options; which includes *Resize image*.

### Mac OS

#### Preview

<img src="Images\BigSurPreviewIcon.jpeg" alt="BigSurPreviewIcon" align="left" style="zoom:40%;" />

1. Open the image in Preview.
2. Select *Tools > Adjust Size* to pull up the Image Dimensions menu.
3. Typing in a new value in the Width box will change the dimensions of the image’s width, and Height will change the height.
4. Choose *Tools > Adjust Size*, then select “Resample image.”
5. Enter a smaller value in the Resolution field.
6. The new size is shown at the bottom.




------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lecture Notes by [Brian Bird](https://profbird.dev)  <time>2023</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 