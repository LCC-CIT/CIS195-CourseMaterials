<h1>Lab 9 Instructions</h1>

<h2>HTML Tables</h2>

<h3>Contents</h3>

[TOC]

## Objectives for parts 1 and 2

You will get practice creating tables with the following features:

- Rows with multiple cells (td elements)

- Headings

- Borders

- Row and column spans

- A caption

- Footer

- CSS styling

  

## Part 1: A weekly class schedule

Make a web page containing a table that represents your weekly schedule (it can be real or fictitious).

Your table should meet the following requirements:

1. The table should have a column for each work day of the week (at least five).
2. There should be enough rows that you can show each day's events in that day's column. (at least three).
3. Add a row of headings (one for each day of the week).
4. Add borders around each of the cells
5. Add events (at least two per day, and not all on the same rows).
6. Add a caption.



## Part 2: A one-month calendar

Create a web page for with a table for a one month calendar for a real or fictitious organization (a club, sports team, school, etc.). Choose a particular month and arrange the table so that the days of the week are across the top and each square has the number for the day of the month in it and the event.

Your events table should contain the following:

1. A header.

   - Use `<thead>`
   - There should be at least seven columns (one for each day of the week).

2. A body.

   - Use `<tbody>`

   - Each cell, aka `<td>` element, should contain a number representing the day of the month. Put it in a location in the square that looks good--not right in front of the event.

   - Put at least eight events in separate squares (days).

   - Alt least one event should use a `rowspan` attribute.

     *Note: you can specify the day-of-month numbers as a range in the td that spans multiple rows. For example: 15&ndash;17.*

   - At least two events should use a `colspan` attribute.

3. A footer.

   - Use `<tfoot>`
   - Provide some kind of a summary in a row that contains one or more `<td>` elements with at least one`<colspan>` attribute.

4. A caption that provides an appropriate title for the table.

5. Apply styling to the events calendar using an embedded stylesheet.

   - Use a `<colgroup>` element to apply styling to at least one column.
   - Set border properties in a way that looks good to you.
   - Set background color of anything you like.
   - Set a text property for some or all of the text in the table.

## Examples

Here are examples of parts 1 and 2 done by a previous student. This is to give you an idea about how your tables might look, but please choose your own topics (content) and arrangement of cells.

[Part 1: A Weekly Schedule](Example_WeeklySchedule.pdf)

[Part 2: A One-Month Calendar](Example_MonthCalendar.pdf)

## Submitting your web pages

- Publish to the web server

  - Upload both web pages to citstudent (unzipped).
  - Put the URLs for the pages in the online text for the Moodle assignment.

- Upload to Moodle

  - Zip the files into one .zip file.
  - Upload the zip to Moodle using the lab submission link for the assignment. 
  

## Assessment

Your lab assignment will be assessed according to this rubric:

[Table Lab Rubric](Lab6Rubric-CIS195.htm)




------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Web Authoring Lab Instructions by [Brian Bird](https://profbird.dev), 2018, revised <time>2023</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------



