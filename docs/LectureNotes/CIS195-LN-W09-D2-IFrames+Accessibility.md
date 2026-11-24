---
title: HTML iFrames and Accessible Multimedia
description: Embedding web pages and videos with iframes, and making audio, video, and iframes accessible.
keywords: iframe, embed, YouTube, accessibility, captions, track, WebVTT, transcript
material: Lecture Notes
generator: Typora
author: Brian Bird
---
**CIS195 Web Authoring 1: HTML**

<h1>HTML iFrames and Accessible Multimedia</h1>


<h2>Contents</h2>

[TOC]

## HTML iFrame 

- Means "inline frame"
- A way of embedding a web page (or other document) inside of a web page.
  In the example below, the embedded web page is [butterflies.html](butterflies.html)
- Reference: <a href="https://www.w3schools.com/tags/tag_iframe.asp" target="_blank">w3schools iframe</a>
### Example: Embedding a Web Page

Note that some web sites will block embedding of their web pages. In this example, I'm embedding one of my own web pages.

```html
<iframe width="400" height="200" src="butterflies.html"></iframe> 
```
  <iframe width="400" height="200" src="butterflies.html"></iframe> 

### Example: Embedding a YouTube Video

Note that the link for the YouTube video is not the general URL, but the *embed* link provided on the YouTube page.

```html
<iframe width='500' src='https://www.youtube.com/embed/5K3w7CKkeOQ' title='Descriptive title of the video'></iframe>
```
<iframe width='500' src='https://www.youtube.com/embed/5K3w7CKkeOQ' title='Descriptive title of the video'></iframe>



## Making Multimedia Accessible

Audio and video are not usable by everyone. People who are deaf or hard of hearing can't hear audio, people who are blind or have low vision can't see video, and people using screen readers or keyboards need controls they can operate. Build accessibility in from the start:

- **Provide playback controls.** Always include the `controls` attribute so users can pause, adjust the volume, and seek, with a mouse or the keyboard. Avoid `autoplay`, especially with sound, because it interferes with screen readers and can be disorienting.
- **Provide a text alternative.** Offer a transcript of audio, or a transcript of the spoken words and important visual information in a video. Link to it near the media element.
- **Add captions to video.** Use the `<track>` element to attach a captions file (WebVTT format, `.vtt`) to a `<video>` element:

  ```html
  <video controls>
    <source src="lecture.mp4" type="video/mp4">
    <track kind="captions" src="lecture-en.vtt" srclang="en" label="English" default>
    Your browser does not support the video element.
  </video>
  ```

  The text inside the `<video>` element is fallback content, shown only by browsers that don't support the `<video>` element.
- **Give iframes a descriptive `title`.** Screen readers announce the `title` attribute to tell users what an embedded frame contains.

  ```html
  <iframe width="500" src="https://www.youtube.com/embed/5K3w7CKkeOQ"
          title="Descriptive title of the video"></iframe>
  ```

- **Don't rely on a single sense.** Information that is only in the sound or only in the picture is missed by some users. Make sure the transcript or captions carry it.



## References and Resources

- Mozilla Developer Network (MDN) Reference and Tutorials:
  - <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" target="_blank">`<iframe>`: The Inline Frame element</a>
  - <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track" target="_blank">`<track>`: The Embed Text Track element</a>
- <a href="https://www.w3schools.com/tags/tag_iframe.asp" target="_blank">w3schools iframe</a>
- Related lecture notes:
  - [HTML Audio and Video](CIS195-LN-W09-D1-Audio+Video.md)




------

<a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" alt="Creative Commons License"></a>
Web Authoring Lecture Notes by <a href="https://profbird.dev" target="_blank">Brian Bird</a> 2018, revised <time>2026</time>, are licensed under a <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International License</a>. 

------
