---
title: HTML Audio
description: Audio file formats and how to embed audio in a web page using the HTML audio element.
keywords: audio, codecs, MP3, AAC, Ogg Vorbis, FLAC, WAV, source
material: Lecture Notes
generator: Typora
author: Brian Bird
---
**CIS195 Web Authoring 1: HTML**

<h1>HTML Audio</h1>


<h2>Contents</h2>

[TOC]

## Audio Codecs

- MP3
  - Compression to around 10% the original size
  - Supported by: Internet Explorer, Chrome, Firefox, and Safari
  - Proprietary, royalty fees charged to browser makers
- AAC (Advanced Audio Coding)
  - The standard format for all Apple products (Mac, iPad, iPhone, etc.) 
  - Similar compression ratio to MP3
  - Potentially better sound quality than MP3
- Ogg Vorbis
  - Better sound quality than MP3
  - Supported by: Chrome, Firefox and Opera
  - Open source, royalty-free
- Flac (Free Lossless Audio Codec)
  
  -  Provides the best sound quality through lossless compression.
  - Compatible with all major desktop and mobile browsers.
  - Open source, royalty-free, developed by the <a href="https://en.wikipedia.org/wiki/Xiph.Org_Foundation" target="_blank">Xiph.Org Foundation</a>, 
  
- WAV
  - No compression, no loss in sound quality
  - Supported by: Chrome, Firefox, Safari and Opera
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



## References and Resources

- Mozilla Developer Network (MDN) Reference and Tutorials:
  -  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats" target="_blank">Media formats for HTML audio and video</a>
  - <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" target="_blank">`<audio>`: The Embed Audio element</a>

- <a href="https://archive.org/" target="_blank">Internet Archive</a>  Internet Archive is a non-profit library of millions of free books, movies, music, and more. A good source for multimedia files to use in your web sites.

- Related lecture notes:
  - [HTML Video](CIS195-LN-W09-D1B-Video.html)
  - [HTML iFrames and Accessible Multimedia](CIS195-LN-W09-D1C-IFrames+Accessibility.html)




------

<a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" alt="Creative Commons License"></a>
Web Authoring Lecture Notes by <a href="https://profbird.dev" target="_blank">Brian Bird</a> 2018, revised <time>2026</time>, are licensed under a <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International License</a>. 

------
