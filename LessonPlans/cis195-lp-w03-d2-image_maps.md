CIS 195 Web Authoring 1: HTML 

# Web Sites and Hyperlinks

### by Brian Bird



| Topics by Week           |                             |
| ------------------------ | --------------------------- |
| 1. Intro to HTML 5       | 6. Midterm                  |
| 2. More HTML 5           | 7. HTML Tables              |
| 3. Developing a Web Site | 8. HTML Forms               |
| 4. Design with CSS       | 9. Multimedia               |
| 5. Page Layout with CSS  | 10. Review and Term Project |

Contents
--------

-   [Introduction](#topic1)
-   [Review - Controller Action Methods](#topic2)
-   [Further Reading](#topic7)
-   [Next Class](#topic8)


Introduction
------------

-   Review lab due dates on Moodle
-   Answer questions about lab 3


::: {#topic2 .slide}
### Main focus today

- Web site structure
- Hyperlinks

    NOTE: The textbook publisher\'s slides go into depth on relative and absolute paths as well as directory structure, but the tutorial and review projects don\'t use multiple directories! Also, the slides don\'t explain the base element in enough detail. Case problem 1 requires use of base with a named target.

::: {#topic3 .slide}
Web Site Structure
------------------

The organization of the code is determined by folders (directories).\
The web site\'s structure is determined by hyperlinks.

### Folders and Paths

Folders (called directories on Linux) can hold files or other folders.
When folders hold other folders, we say they are *nested*. Look at some
nested folders in the Windows file explorer, or in the Mac OS finder.

A path describes the hirerarchy of nested folders that leads to a
particular folder or file. Here\'s an example of a path:

    C:/Users/Brian/Documents/SouthIndia/Chennai/index.html

### Hyperlink Navigation and Site maps

A sitemap shows how the web pages are linked together. It can be done as
simply as by using an outline:\
<https://creativecybersolutions.com/>

-   Navigation (on every page)
    -   Home
    -   Services
    -   About
    -   Contact us
    -   Client Login

For a site with more complex navigation (hyperlinks) you would need a
more complex map. Look at [The Highlands](http://www.highlands97405.com) web site.
(Instructor: draw a site map on the white board.)

### Base path for hyperlinks

The \<base\> tag sets a default path for all the href and src attributes
on the page.\
It should be put in the \<head\> element.

Example:\

`<head>   <!-- other stuff left out -->                <base href="Chennai/" target="_blank"></head>`
:::

::: {#topic6 .slide}
Example
-------
:::

::: {#topic7 .slide}
Further Reading
---------------

[W3Schools tutorila on the \<base\>
tag](https://www.w3schools.com/tags/tag_base.asp)\

::: {#topic8 .slide}
Next Class
----------

We will go into more detail on unit testing

