---
title: Multimedia
description: Multimedia
keywords: audio, video, iframe
material: Lecture Notes
generator: Typora
author: Brian Bird
---
**CIS195 Web Authoring 1: HTML**

<h1>Multimedia</h1>

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
      <td>7. CSS Flexbox and Grid</td>
    </tr>
    <tr>
      <td>3. Site structure and navigation</td>
      <td>8. HTML Forms</td>
    </tr>
    <tr>
      <td>4. Formatting with CSS</td>
      <td><mark>9. Multimedia</mark></td>
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

# Introduction

## Announcements

**For November 21, 2023**

- **No class Thursday**. It's the Thanksgiving holiday!

- **Due dates:** 

  - Lab 7 production version due date is extended to Friday night, 11/24.
  - Quiz 8 closing date extended to Friday night, 11/24.

- **Study Jam for Students November 28th!**
  Tuesday, November 28 from 2-4 pm will be Study Jam. The library will provide free pizza and snacks for students as you study for finals. In addition to food and drink, there will be research help, tutoring, relaxation and yoga tips, and therapy dogs. 

  <img src="Images/StudyJam.png" alt="StudyJam" style="zoom:30%;" />

## Q and A

- Review due dates 
- Answer questions about the lab assignment or anything else



# HTML Audio

## Audio Codecs

- MP3
  - Compression to around 10% the original size
  - Supported by: Internet Explorer, Chrome, Firefox, Safari, and IE
  - Proprietary, royalty fees charged to browser makers
- AAC (Advanced Audio Coding)
  - The standard format for all Apple products (Mac, iPad, iPhone, etc.) 
  - Similar compression ratio to MP3
  - Potentially better sound quality than MP3
- Ogg Vorbis
  - Better sound quality than MP3
  - Supported by: Chrome, Firefox and Oprea
  - Open source, royalty-free
- Flac (Free Lossless Audio Codec)
  
  -  Provides the best sound quality through lossless compression.
  - Compatible with all major desktop and mobile browsers.
  - Open source, royalty-free, developed by the [Xiph.Org Foundation](https://en.wikipedia.org/wiki/Xiph.Org_Foundation), 
  
- WAV
  - No compression, no loss in sound quality
  - Supported by: Chrome, Firefox, Safari and Oprea
  - Open source, royalty-free

  

## HTML `<audio>` Element 

```
<audio src="audioUrl"> </audio>
```

**Commonly Used Attributes**

- autoplay
  if specified, the audio will automatically begin playback as soon as it can do so.
- controls
  If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback.
- loop
  if specified, will automatically seek back to the start upon reaching the end of the audio.
- muted 
  If specified,indicates whether the audio will be initially silenced. Its default value is false.
- preload
  This enumerated attribute is intended direct the browser what, or what not to preload:
  - none: indicates that the audio should not be preloaded;
  - metadata: indicates that only audio metadata (e.g. length) is fetched; 
  - auto: indicates that the whole audio file could be downloaded, even if the user is not expected to use it; 
  - *empty string*: synonym of the auto value.
- src
  The URL of the audio to embed. 

### HTML `<source>` Element - Provide Alternate Files

You may wish to have more than one src URL listed in case a user's browser doesn't support the audio type of your file.
```html
<audio>
<source src="url1" />
<source src="url2" />
</audio>
```




# HTML Video

## Video Codecs


- H.264
  - Developed by the MPEG group 
  - The industry standard for high-definition video streams and video plug-ins 
  - Supported by Chrome, Firefox, Edge, Opera, and Safari
- MP4 (MPEG-4 Part 14) 

  - MP4 is the most common type of video file format. 
  - Stores compressed video, audio and text.
  - Supported by all major desktop and mobile browsers.
- Theora
  - A royalty-free codec developed by the Xiph.org Foundation
  - Produces video streams that can be used with almost any container
  - Supported by Chrome, Firefox and Opera desktop
- VP8
  - An open-source royalty-free codec owned by Google
  - Used in Google’s WebM video format
  - Supported by Chrome, Firefox and Opera
- VP9
  - Google’s successor to the VP8 codec
  - Same video quality as VP8 at half the download size
  - Supported by Chrome, Firefox and Opera

## HTML `<video>` Element

```html
<video src="vidioUrl"> </vidio>
```


# HTML iFrame 

- Means "inline frame"
- A way of embedding a web page (or other document) inside of a web page.
  In the example below, the embedded web page is [butterflies.html](butterflies.html)
- Reference: [w3schools iframe](https://www.w3schools.com/tags/tag_iframe.asp)
## Example: Embedding a Web Page

Note that some web sites will block embedding of their web pages. In this example, I'm embedding one of my own web pages.

```html
<iframe width="400" height="200" src="butterflies.html"></iframe> 
```
  <iframe width="400" height="200" src="butterflies.html"></iframe> 

## Example: Embedding a YouTube Video

Note that the link for the YouTube video is not the general URL, but the *embed* link provided on the YouTube page.

```html
<iframe width='500' src='https://www.youtube.com/embed/5K3w7CKkeOQ'></iframe>
```
<iframe width='500' src='https://www.youtube.com/embed/5K3w7CKkeOQ'></iframe>



# References and Resources

- Mozilla Developer Network (MDN) Reference and Tutorials:
  -  [Media formats for HTML audio and video](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats)
  - [`<audio>`: The Embed Audio element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
  - [`<video>`: The Video Embed element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) 
  - [`<iframe>`: The Inline Frame element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)

- [Internet Archive](https://archive.org/)  Internet Archive is a non-profit library of millions of free books, movies, music, and more. A good source for multimedia files to use in your web sites.


------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)
Web Authoring Lecture Notes by [Brian Bird](https://profbird.dev) 2018, revised <time>2023</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------

