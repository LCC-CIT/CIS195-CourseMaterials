---
title: Forms, Part 2
description: More on HTML Forms
keywords: selection lists, option groups, radio buttons, check boxes, access keys, input validation
material: Lecture Notes
generator: Typora
author: Brian Bird
---
**CIS195 Web Authoring 1: HTML**

<h1>HTML Forms, Part 2</h1>

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
      <td><mark>8. HTML Forms</mark></td>
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

## Introduction

- Announcements
- Review due dates 
- Answer questions about the lab assignment or anything else



## More Control Elements

### Selection Lists

Selection lists present the user with a set of options from which they may select one (or more?). Selection lists are often displayed by the browser as a drop-down list or a scrollable list.  

```HTML
<label for="trail">Hiking Trails</label>
<select name="hike" id="trail" size="3">
   <option value="pisgah">Mt. Pisgah Summit</option>
   <option value="spencer">Spencer Butte</option>
   <option value="fall">Fall Creek</option>
   <option value="alsea">Alsea Falls</option>
</select>
```
The `size` attribute determines how many options are shown without scrolling the list. 
If you set `size="1"`, the control will give you a drop-down selection list when you click on it.

#### Selection of multiple items

- By default, only one selection is allowed. Setting the attribute `multiple="multiple"` allows the shift or control keys to be used when selecting multiple items.
  - Shift: lets you select items in a continuous range.
  - Control: lets you select multiple single items.

####  Option groups for selection lists         

Option Groups allow a developer to organize the options into  labeled groups:

```HTML
<select name="hike" id="trail" size="4">
   <optgroup label="Near Eugene">        
       <option value="pisgah">Mt. Pisgah Summit</option>
       <option value="spencer">Spencer Butte</option>
   </optgroup>
   <optgroup label="Further Out">        
       <option value="fall">Fall Creek</option>
        <option value="alsea">Alsea Falls</option>
   </optgroup>
</select>
```

[Practice: Select element on W3Schools](https://www.w3schools.com/tags/tag_select.asp)

[Reference: Select element on MDN ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)



### Option Buttons        

**Also known as *radio buttons***

The `checked` attribute specifies the default selection        

```HTML
<input type="radio" name="difficulty" value="easy" checked>Easy<br>
<input type="radio" name="difficulty" value="intermediate">Moderately challenging<br/>
<input type="radio" name="difficulty" value="challenging">Very challenging<br />
```
Radio buttons can be grouped by the `name` attribute. 
Selection of buttons with the same name will be mutually exclusive.

```HTML
<input type="radio" name="length" value="short">Short trail<br>
<input type="radio" name="length" value="long">Long trail<br>
<input type="radio" name="steepness" value="flat">Level trail<br>`
<input type="radio" name="steepness"value="intermediate">Steep trail<br>
```
[Radio button practice on W3Schools](https://www.w3schools.com/html/html_form_input_types.asp)



### Access Keys

The `accesskey` attribute specifies a keyboard shortcut for moving the focus to a particular element.

```HTML
<input type="radio" name="length" value="short" accesskey="s">Short trail<br>
<input type="radio" name="length" value="long"  accesskey="l">Long trail<br>        
```

To use the access key in Chrome, Edge or Safari, hold down the *alt* key while pressing the  shortcut key. In Firefox, hold down the *alt* and *shift* keys while pressing the access key.

[Access Key Practice on W3Schools](https://www.w3schools.com/tags/att_global_accesskey.asp)



## Input Validation

We can improve the way our form works and give our users a better experience, if we let them know when they have entered information that isn't valid for a particular form field. There are several ways we can do this using HTML. (There are even more ways to do this with JavaScript running on our web page or with other code running on a server.)
      

### Validation using HTML5 input types

These `<input>` types are all essentially variants of the "text" type, but they limit the range of  characters that the user is allowed to enter and/or change the appearance of the control to match the input type.
      

- `date`&mdash;In addition to the input box, this will pops up a date picker in the web browser.
- `email`&mdash;Only allows text in the format of a valid email address to be entered.
- `number`&mdash;In addition to the input box, this will pop up a number pad in the web browser.
- `password`&mdash;Hides the text that is entered.
- `range` &mdash;A range of valid values can be specified. 
  
- [and more](https://www.w3schools.com/html/html_form_input_types.asp)

Code example:
```HTML
<input type="email" name="name" placeholder="person@example.com"> 
```

Running in the browser:
<form> <input name="name" placeholder="person@example.com" type="email">
<input type="submit"> </form>
### Validation using the required attribute

Use the *required* attribute to ensure that the user enters something in a field.
      
Code example:

```HTML
<input type="tel" name="telephone" required>
```

Running in the browser:
<form><input type="tel" name="telephone" required>
<input type="submit"></form>

### Validation using regular expressions

The pattern attribute allows us to use a special pattern-matching string called a *regular expression*, also  called a *regex*. 

 Code example:


```HTML
<input name="zip" placeholder="97405-1234" pattern="^\d{5}(-\d{4})?$">
```
 Running in the browser:

<form><input name="zip" placeholder="97405-1234" pattern="^\d{5}(-\d{4})?$">
  <input type="submit">
</form>

Here is the meaning of the symbols in the pattern attribute: 

| |  Meaning of Regular Expression Symbols  |
|-------------------------------------------|--|
| `^`  | Start of the string. |
| `\` | denotes that the charter following it is not a literal character and should be interpreted as special |
| `\d{5}` | Match 5 digits |
| `(?:…)` |  Grouping |
| `[-\s]` | Match a space or a hyphen |
| `\d{4}` | Match 4 digits |
| `?` | The pattern before it is optional |
| `$` |  End of the string |

#### Regex references

-  [Regex demo page](https://regex101.com/r/aYnU3Q/1)
- [ MDN: text input attributes (including pattern)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)
- [ MDN: Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)




------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)
Web Authoring Lecture Notes by [Brian Bird](https://profbird.dev) 2018, revised <time>2023</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------

