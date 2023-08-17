---
title: Forms, Part 1
description: Basics of HTML Forms
keywords: form, input, control element, fieldset, input type, input value, label.
material: Lecture Notes
generator: Typora
author: Brian Bird
---
**CIS195 Web Authoring 1: HTML**

<h1>HTML Forms, Part 1</h1>

<table>
  <thead>
    <tr>
      <th colspan="2">Topics by Week for the Eight-Week Term</th>
    </tr>
  </thead>
    <tbody>
    <tr>
      <td>1. Intro to HTML</td>
      <td>5. Midterm, Layout with CSS</td>
    </tr>
    <tr>
      <td>2. More HTML, file paths</td>
      <td>6. CSS Grid and Flexbox</td>
    </tr>
    <tr>
      <td>3. Site structure and navigation</td>
      <td>7. HTML Tables</td>
    </tr>
    <tr>
      <td>4. Formatting with CSS</td>
      <td><mark>8. HTML Forms, Final</mark></td>
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
<h2>Contents</h2>

[TOC]

## Introduction

- Announcements

- Review due dates 



### Purpose of forms

Forms allow users to enter data that can be processed by code that either runs in the browser (JavaScript) or that runs on the server (PHP, ASP.NET, Node.js, etc.)



## Basic Form Elements

```html
<form>
  First name:<br>
  <input type="text" name="firstname"><br>
  Last name:<br>
  <input type="text" name="lastname">
  <br><br>
  <input type="submit" value="Submit">
</form>
```

### Input element

The most common use of the input element is to enter text&mdash;this is the default use. 

#### *type attribute*

Tye type attribute determines what kind of control will be shown in the browser. It has these possible values:

- text
- submit
- reset
- button
- checkbox
- radio
- See this [MDN article on input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#_types) for more types.

#### *name attribute*

This attribute defines the name of the field. It will be used in the name-value pair that is sent to the server.


```html
<input type="text" name="lastname"><br>
```

#### *value attribute*

Use this to set a default value for an input element.


```html
<input type="text" name="lastname" value="Stark"><br>
```

#### *placeholder attribute*

This attribute puts "watermark" text in an input element.

```html
<input type="text" name="firstname" placeholder="First name"><br>
```

#### *hidden attribute*

This attribute makes an input element invisible.

```html
<input type="text" name="lastname" hidden><br>
```



### Focus

When you click on a control, it's outline will become bolder or show in some way that it has been selected. This is called giving it focus.
Using the tab key you can move from one control to the next in the form.

### Terminology

- **Control Element**: form elements that the user can interact with, like the `<input> `element, are also known as a *control* *element*s.

- **Field**: Any control element that lets you enter information (that's all of them except the button) is also known as a *field*.

- **Value**: The information entered in a field is called the *value*.

  

### Try it

[Try it out on W3Schools](https://www.w3schools.com/html/html_forms.asp)



## Fieldset and Legend Elements

The `<fieldset.` element groups a set of controls in a form by putting a box around them.

The `<legend>` element inserts a legend (aka title) into the box surrounding the fields.

```html
<form>
  <fieldset>
    <legend>User's Name</legend>
    First name:<br>
    <input type="text" name="firstname"><br>
    Last name:<br>
    <input type="text" name="lastname">
  </fieldset>
  <input type="submit" value="Submit">
</form>
```



[Try it out on W3Schools](https://www.w3schools.com/tags/tag_fieldset.asp)



## Label Element

Labels don't change the appearance of the form, but they:

- Are semantic tags that make the purpose of the text above the input element clear to developers.
- Provide a target for CSS formatting.
- Are clickable if the `for` attribute is used (the *for* value must match the `id` of the input element).
- Give focus to the associated control when the user clicks on the label.

**Note**: labels are in-line elements but, you can change them to a block element with the CSS `display:block` property.

```html
<form>
  <label for="first">First name:</label><br>
  <input type="text" name="firstname" id="first"><br>
  <label for="second">Last name:</label><br>
  <input type="text" name="lastname" id="second">
  <br><br>
  <input type="submit" value="Submit">
</form>
```


## Text Area Element

The `<textarea>` element allows users to enter multiple lines of text.
The row and cols attributes determine the size.
The wrap attribute determines the type of line warp: hard or soft.

- Hard: Carriage-return and line-feed character codes are inserted into the text where it wraps.
  - The code for carriage-return is: `%0D`.
  - The code for line-feed is: `%0A`.
  
- Soft: No character codes are inserted where the text wraps.

```html
<label for="review">Describe the trail</label>
<textarea name="review" id="review" rows="3" cols="40" wrap="hard"></textarea>
```




------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)
Web Authoring Lecture Notes by [Brian Bird](https://profbird.dev), 2017, revised 2023, is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------

