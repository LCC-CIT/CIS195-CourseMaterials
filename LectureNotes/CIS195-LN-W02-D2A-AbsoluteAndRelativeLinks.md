---
title: Folders, Files and Paths
description: How to make links between pages in different folders .
keywords: File, path, folder, link, href, absoute path, relative path, path delimiter.
material: Lecture Notes
generator: Typora
author: Brian Bird
---
**CIS195 Web Authoring 1: HTML**

<h1>Folders, Files, and Paths</h1>

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

# Folders and Paths

Folders (called directories on Linux) can hold files or other folders. When folders hold other folders, we say they are *nested*. Look at some nested folders in the Windows file explorer, or in the Mac OS finder.

A path describes the hierarchy of nested folders that leads to a particular folder or file. Here's are two examples from Windows:

```bash
C:/Users/Brian/Repos/CIS195-Demos/Unit02/SouthIndia/Chennai/index.html
C:/Users/Brian/Repos/CIS195-Demos/Unit02/SouthIndia/ChennaiArea/index.html
```

<img src="FolderTree.png" style="zoom:40%;" />

## Path Delimiters

The items in a path are separated by slashes. Windows originally used *back-slashes*,
`\` 
which is different from Mac OS and Linux which use *forward-slashes*.
 `/`
Windows now will accept either one. I recommend using forward-slashes since they are more universally recognized.

# Absolute paths

A path that includes all of the folders, starting with the first one  is called an absolute path. The paths in the example above are absolute and even includes the drive letter, which is optional. 

- Windows absolute path example, including the optional drive letter:  
  `C:/Users/Brian/Repos/CIS195-Demos/Unit02/SouthIndia/Chennai/index.html`
- Mac OS absolute path example:  
  `/Volumes/Macintosh HD/Users/Brian/Repos/CIS195-Demos/Unit02/SouthIndia/Chennai/index.html`

On Windows, the drive letter is optional if you are specifying a path on the same drive where the web page doing the specifying is located. If you leave off the drive letter the path looks like this:

`/Users/Brian/Repos/CIS195-Demos/Unit02/SouthIndia/Chennai/index.html`

Notice that the path starts with a slash.

# Relative paths

A relative path specifies the location of a file or folder relative to some other folder. For example, if you are in the `SouthIndia` folder, then the relative path to the Chennai and ChennaiArea web pages would be: 

`Chennai/index.html`
`ChennaiArea/index.html`

Notice that there is no slash at the beginning of a relative path.

This is what you should always be using for link `href` and image `src` attributes!

## Linking to a page in a sub-folder

If there is a web page in the `SouthIndia` folder, you could put links in it to the other two pages like this:

```html
<a href="Chennai/index.html">Chennai</a>
<a href="ChennaiArea/index.html">Chennai Area</a>
```

<img src="FolderTree-SubfolderLink.png" style="zoom:50%;" />

## Linking to a page in a parent folder

You use two dots and a slash to specify going up one level in a path: `../`
For example, you could put a link in the Chennai web page to the SouthIndia web page like this:

```html
<a href="../index.html">South India</a>
```

<img src="FolderTree-ParentLink.png" style="zoom:50%;" />

If you want to go up by more than one folder, use double-dot-slash multiple times. For example, if  there is an index.html page in the Unit02 folder and you want to link to it from the Chennai page, the link would look like this:

```html
<a href="../../index.html">Unit 2</a>
```

<img src="FolderTree-LinkTwoFoldersUp.png" style="zoom:50%;" />

## Linking to a page in a sibling folder

To make a link to a folder that is a "sibling" (at the same level in the hierarchy), you need to use two-dots-slash to go up a folder and then go down to the sibling folder. For example, lets say you want to put a link from the `ChennaiArea/index.html` page to the `Chennai/index.html` page. You would need to go up one folder and then back down, like this:

```html
<a href="../Chennai/index.html">South India</a>
```

<img src="FolderTree-SiblingFolderLink.png" style="zoom:50%;" />



## Best practice

Always use relative paths. If you use absolute paths, your web site's links will break when you put it on a different computer (like a server, or your instructor's computer).



# Reference

[HTML File Paths](https://www.w3schools.com/Html/html_filepaths.asp)&mdash;W3Schools

------

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/) These lecture notes are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/), by [Brian Bird](https://profbird.dev/), fall 2020, updated summer 2023.