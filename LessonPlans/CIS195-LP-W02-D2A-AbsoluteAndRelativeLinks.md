**CIS195 Web Authoring 1: HTML**

# Folders, Files, and Paths

| Course weeks and topics              |                         |
| ------------------------------------ | ----------------------- |
| 1. Intro to HTML 5                   | 6. Page Layout with CSS |
| 2. <u>More HTML</u>, History of HTML | 7. HTML Tables          |
| 3. Developing a Web Site             | 8. HTML Forms           |
| 4. Design with CSS                   | 9. Multimedia           |
| 5. Midterm                           | 10. Term Project        |

**Contents**

[TOC]

## Folders and Paths

Folders (called directories on Linux) can hold files or other folders. When folders hold other folders, we say they are *nested*. Look at some nested folders in the Windows file explorer, or in the Mac OS finder.

A path describes the hierarchy of nested folders that leads to a particular folder or file. Here's are two examples:

```bash
C:/Users/Brian/Repos/CIS195-Demos/Unit02/SouthIndia/Chennai/index.html
C:/Users/Brian/Repos/CIS195-Demos/Unit02/SouthIndia/ChennaiArea/index.html
```

#### Path Delimiters

The items in a path are separated by slashes. Windows originally used *back-slashes*,
`\` 
which is different from Mac OS and Linux which use *forward-slashes*.
 `/`
Windows now will accept either one. I recommend using forward-slashes since they are more universally recognized.

### Absolute paths

A path that includes all of the folders, starting with the first one is called an absolute path. The paths in the example above are absolute and even includes the drive letter. 

The drive letter is optional if you are specifying a path on the same drive where the web page doing the specifying is located. If you leave off the drive letter the path looks like this:

`/Users/Brian/Repos/CIS195-Demos/Unit02/SouthIndia/Chennai/index.html`

Notice that the path starts with a slash.

### Relative paths

A relative path specifies the location of a file or folder relative to some other folder. For example, if I am in the `CIS195-Demos` folder then the relative path would be `Unit02/SouthIndia/Chennai/index.html`

Notice that there is no slash at the beginning of a relative path.

Here's another example, lets say I added a new `index.html` web page in the `SouthIndia` folder. If I put links in it to the other two pages, they would look like this:

```html
<a href="Chennai/index.html">Chennai</a>
<a href="ChennaiArea/index.html">Chennai Area</a>
```

If I want to write a path to a folder or file that is "above" the one I'm in, then I use two dots to represent going up one folder. For example, looking at the absolute paths above,  lets say I want to put a link from the `ChennaiArea/index.html` page to the `Chennai/index.html` page. I could write the link like this:

```html
<a href=""../Chennai/index.html">South India</a>
```



If I want to go up by more than one folder I use more double-dots. For example, if  have an index.html page in the Unit02 folder and I want to link to it from my Chennai page, the link would look like this:

```html
<a href="../../index.html">Unit 2"</a>
```

### Best practice

Always use relative paths. If you use absolute paths, your web site's links will break when you put it on a different computer (like a server, or your instructor's computer).



## Reference

[HTML File Paths](https://www.w3schools.com/Html/html_filepaths.asp)&mdash;W3Schools

------

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/) These lecture notes are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/), by [Brian Bird](https://profbird.dev/), fall 2020.