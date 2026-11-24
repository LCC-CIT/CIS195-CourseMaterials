# Lab 5 Instructions


## Using CSS to Control Web Page Layout

You will practice using CSS by applying it to the review web site you made in lab 2 and improved in lab 4.

Before you start, make a copy of your *Lab4* folder and name the copy *Lab5*. Do all your work for this lab in the *Lab5* folder so that your Lab 4 web site on citstudent stays unchanged.

### Part 1: Layout for the home page

You will use the home page from lab 4, part 1 as your starting point.

1. If your home page doesn't have a *figure* on it, add one that enhances the appearance of the page and fits the page's topic.
2. Create an external style sheet named *home.css* for just the home page with rules that:
   - Set a background image.
   - Set a fixed width for the body of the page.
   - Use the float property to move the figure to the right side of the page.
   - Use the clear property to end the float.
3. Link *home.css* to the home page <u>after</u> the link to *site.css*, so that its rules take precedence.


### Part 2: Layout for the whole web site

Use the whole web site from lab 4, part 2 as a starting point. Put the CSS for this part in *site.css*.

1. If they aren't already there, add a `<header>` element containing an `<h1>` and a `<nav>` element to every page (including the home page). The `<nav>` should contain a list of links to the home page and to each of the review pages.

2. Add float and other appropriate CSS properties to style the navigation links on each page. The navigation list should be arranged horizontally and links should look like buttons (have a colored background, no bullets, etc.) rather than links.

3. For at least one figure, add CSS properties to:
   - Add padding, a visible border, and margin.
   - Make the corners of the figure rounded.
   - Use relative positioning to place the figure somewhere other than its original location.

4. For the header of each page (including the home page), add CSS properties to:
   - Add a background image.
   - Set the Z order so that the heading (H1) is on top.

Your site folder structure will now look like this:

- Lab5
  - index.html  (home page)
  - home.css  (CSS for the home page)
  - site.css  (CSS for the whole site)
  - reviews
    - review HTML files
  - images
    - all image files

Check your pages using the <a href="https://validator.w3.org" target="_blank">W3C HTML Validator</a>  and the <a href="https://jigsaw.w3.org/css-validator/" target="_blank">W3C CSS Validator</a>.

## Submission

#### Publishing to citstudent

- Use FileZilla to upload your *Lab5* folder, with all its files and sub-folders, to citstudent.
  - Do <u>not</u> zip the files.
  - Parts 1 and 2 are in the same web site, so you only need to upload that one folder.
- Record the URL (web address) of your home page so that you can enter it on Canvas.
  Hint: remember that *public_html* is <u>not</u> part of the URL.

#### Submitting to Canvas

- Zip your *Lab5* folder.

- Upload the zip file to Canvas.

- Enter the URL (web address) of your site's home page in the "Online Text" box for this assignment on Canvas. This is important&mdash;without this, I won't be able to find your web page on the Internet.

  

## Grading Criteria

[Lab 5 grading rubric](Lab5Rubric-CIS195.html)



------

<a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" alt="Creative Commons License"></a> Web Authoring Lab Instructions by <a href="https://profbird.dev" target="_blank">Brian Bird</a>, 2017, revised <time>2026</time>,  are licensed under a <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International License</a>. 

------------



