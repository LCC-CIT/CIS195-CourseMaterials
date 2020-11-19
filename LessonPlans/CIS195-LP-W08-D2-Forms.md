# More HTML Forms, Part 2

**More Control Elements and Validation**

| Course weeks and topics  |                            |
| ------------------------ | -------------------------- |
| 1. Intro to HTML 5       | 6. Page Layout with CSS    |
| 2. First Web Page        | 7. HTML Tables             |
| 3. Developing a Web Site | <mark>8. HTML Forms</mark> |
| 4. Design with CSS       | 9. Multimedia              |
| 5. Midterm               | 10.Term Project            |


## Contents

[TOC]

## More Control Elements
### Selection Lists

Selection lists present the user with a set of options from which they may select one (or more?). Selection lists are often displayed by the browser as a drop-down list or a scrollable list.  

```HTML
<label for="hike">Hiking Trails</label>
<select name="hike" id="trail" size="3">
   <option value="pisgah">Mt. Pisgah Summit</option>
   <option value="spencer">Spencer Butte</option>
   <option value="fall">Fall Creek</option>
   <option value="alsea">Alsea Falls</option>
</select>
```
The `size` attribute determines how many options are shown without scrolling the list.        

#### Selection of multiple items

- By default, only one selection is allowed. Setting the attribute `multiple="multiple"` allows - The shift or control keys can be used when selecting multiple items.
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
<input type="radio" name="steepness"value="intermediate"> Steep trail<br>
```
[Radio button practice on W3Schools](https://www.w3schools.com/html/html_form_input_types.asp)



#### Access Keys

The `accesskey` attribute specifies a keyboard shortcut for moving the focus to a particular element.

```HTML
<input type="radio" name="length" value="short"          accesskey="s">Short trail<br>
<input type="radio" name="length" value="long">Long trail accesskey="l<br />        
```

To use the access key in Chrome, Edge or Safari, hold down the *alt* key while pressing the  shortcut key. In Firefox, hold down the *alt* and *shift* keys while pressing the access key.

[Access Key Practice on W3Schools](https://www.w3schools.com/tags/att_global_accesskey.asp)



## Input Validation

We can improve the way our form works and give our users a        better experience, if we let them know when they have entered        information that isn't valid for a particular form field. There        are several ways we can do this using HTML. (There are even more        ways to do this with JavaScript running on our web page or with        code running on the server.)
      

### Validation using HTML5 input types

These `<input>` types are all essentially        variants of the "text" type, but they limit the range of        characters that the user is allowed to enter and change the        appearance of the control to match the input type.
      

- date
- email
- number
- password
- tel
            *Note: tel does not do much            validation, but on most browsers**, it will pop up a numeric            keypad.*
        
- [and more](https://www.w3schools.com/html/html_form_input_types.asp)


​      

Code example:
        ` <input type="email" name="name"          placeholder="person@example.com"> ` 
        Running in the browser:
      

  

#### Validation using the required attribute

Use the *required*        attribute to ensure that the user enters something in a field.
      

Code example:
        ` <input type="tel" name="telephone" required>        `

  

###          

### Validation using *regular expressions*

 

The pattern attribute allows us to use a special          pattern-matching string called a *regular expression*, also          called a *reg**ex*. It must be a valid          JavaScript regular expression. This means: 


        Code example:
` <input name="zip" placeholder="97405-1234"          pattern="^\d{5}(-\d{4})?$"> `
        Running in the browser:

  

 

- ^ = Start of the string.
-  \ denotes that the charter following it is not a literal            character and should be interpreted as special.
              Or, if the following character is already a special            character, then it should be interpreted literally.
- \d{5} = Match 5 digits (for condition 1, 2, 3)
- (?:…) = Grouping
- [-\s] = Match a space (for condition 3) or a hyphen (for            condition 2)
- \d{4} = Match 4 digits (for condition 2, 3)
- …? = The pattern before it is optional (for condition 1)
- $ = End of the string.

#### Regex reference

###  

-  [Regex demo page](https://regex101.com/r/aYnU3Q/1)
- [ MDN: text input attributes (including                 pattern)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)
- [ MDN: Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)




------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)
ASP.NET Core MVC Lecture Notes by [Brian Bird](https://profbird.dev) is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------

