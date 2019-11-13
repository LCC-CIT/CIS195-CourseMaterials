**CIS195 Web Authoring 1: HTML**

***Topic: Tables***

| Course weeks and topics  |                         |
| ------------------------ | ----------------------- |
| 1. Intro to HTML 5       | 6. Page Layout with CSS |
| 2. First Web Page        | <u>7. HTML Tables</u>   |
| 3. Developing a Web Site | 8. HTML Forms           |
| 4. Design with CSS       | 9. Multimedia           |
| 5. Midterm               | 10.Term Project         |

**Introduction**

- Look at someone's lab 5.
- Review due dates (lab and quiz).
- Ask about progress on term projects.

**Overview**

- [Table Structure
  ](#structure)
- [Borders](https://lcc-cit.github.io/CIS195-CourseMaterials/LessonPlans/CIS195-LP-W07-D1-Tables.html#borders)
- [Headings and Cells
  ](#cells)
- [Row and Column Spans](#spans)
- [Captions](#captions)

**Introduction**

- What is a table--in general?
- Where are tables commonly used?

**Structure of a Table
**

Tables are constructed using multiple elements (which means multiple tags). A table with two rows and three columns would be written in HTML like this:

```html
<table>
    <tr>   <!-- tr = table row, this is the beginning of a row -->
        <td>row 1, column 1</td>    <!-- td = table data, this is a cell -->
        <td>row 1, column 2</td>
        <td>row 1, column 3</td>
    </tr>
    <tr>
        <td>row 2, column 1</td> 
        <td>row 2, column 2</td> 
        <td>row 2, column 3</td>
    </tr>
</table>
```

The table above will be rendered like this:

<table>     <tr>                            <!-- tr = table row, this is the beginning of a row -->         <td>row 1, column 1</td>    <!-- td = table data, this is a cell -->         <td>row 1, column 2</td>         <td>row 1, column 3</td>     </tr>     <tr>         <td>row 2, column 1</td>          <td>row 2, column 2</td>          <td>row 2, column 3</td>     </tr> </table>   
**Borders**

Borders can be added using CSS. For example:

```css
table, td {
  border: 1px solid;
}
```

The table above will be rendered like this:

<style>
  table, td {
    border: 1px solid;
  }
</style>
<table>
  <tr><td>row1, column 1</td><td>row1, column 2</td><td>row 1, column 3</td></tr>
  <tr><td>row2, column 1</td><td>row2, column 2</td><td>row 2, column 3</td></tr>
 <table>

| row 1, column 1 | row 1, column 2 | row 1, column 3 |
| --------------- | --------------- | --------------- |
| row 2, column 1 | row 2, column 2 | row 2, column 3 |

**Headings and Cells
**

A special type of table cell is a heading, <th></th>. The following code can be placed above row 1 and provides headings for the columns:
column 1 column 2 column 3



| column 1        | column 2        | column 3        |
| --------------- | --------------- | --------------- |
| row 1, column 1 | row 1, column 2 | row 1, column 3 |
| row 2, column 1 | row 2, column 2 | row 2, column 3 |

**Row and Column Spans**

row 1, columns 1 and 2rows 1 and 2, column 3row 2, column 1row 2, column 2 



| column 1               | column 2               | column 3 |
| ---------------------- | ---------------------- | -------- |
| row 1, columns 1 and 2 | rows 1 and 2, column 3 |          |
| row 2, column 1        | row 2, column 2        |          |

**Captions**

 Table Example