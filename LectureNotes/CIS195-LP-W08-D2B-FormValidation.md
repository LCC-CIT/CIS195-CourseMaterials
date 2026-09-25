**CIS195 Web Authoring 1: HTML  
**

<div>

Brian Bird

</div>

  
***Topic: HTML Form Validation  
***

<div class="section">

  
**Introduction**  

-   Announcements  
-   Review due dates

<div>

**Overview**

</div>

Overview here

</div>

<div class="section">

Article on HTML5 data types here.  
Code example:  
` <input type="email" name="name"           placeholder="person@example.com"> `  
Running in the browser:  

Article on validation here.

-   Required attribute.  
    Code example:  
    ` <input type="text" name="name" placeholder="Carol Danvers"               required> `

### Validation with Regular Expressions

The pattern must be a valid JavaScript regular expression. This means:

-   \\ denotes that the following character is not a literal character and should be interpreted as special, unless the character that follows is already a special character, then it should be interpreted literally.
-   ^ matches beginning of input, unless it's the first character in a pattern, then it negates (inverts) the pattern

  
Code example:  
` <input name="zip" placeholder="97405-1234"           pattern="^\d{5}(-\d{4})?$"> `  
Running in the browser:  

#### Alternative regex for zip code

    ^\d{5}(?:[-\s]\d{4})?$

    ^[0-9]{5}(?:-[0-9]{4})?$

-   ^ = Start of the string.
-   \\d{5} = Match 5 digits (for condition 1, 2, 3)
-   (?:…) = Grouping
-   \[-\\s\] = Match a space (for condition 3) or a hyphen (for condition 2)
-   \\d{4} = Match 4 digits (for condition 2, 3)
-   …? = The pattern before it is optional (for condition 1)
-   $ = End of the string.

^ \# Assert position at the beginning of the string.  
\[0-9\]{5} \# Match a digit, exactly five times.  
(?: \# Group but don't capture:  
- \# Match a literal "-".  
\[0-9\]{4} \# Match a digit, exactly four times.  
) \# End the non-capturing group.  
? \# Make the group optional.  
$ \# Assert position at the end of the string.  

</div>

<div class="section">

-   [Regex demo page](https://regex101.com/r/aYnU3Q/1)
-   [MDN: text input attributes (including pattern)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)
-   [MDN: Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

</div>
