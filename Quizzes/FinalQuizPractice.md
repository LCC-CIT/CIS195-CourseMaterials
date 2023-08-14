# Final Quiz Practice

1. Matching - Box model

   - Margin = space outside the border
   - Border = line around the content plus padding
   - Padding = space inside the border
   - Content = the innermost area

2. True/false - border style

   By default the border is hidden = true.

3. Multiple choice - Rounded corners  
   What does this rule do: `border-radius: 10px 10px 20px 20px;''

   A. The top two corners are rounded more than the bottom two.

   B. The bottom two corners are rounded more than the top two. = 100%

   C. All of the corners are rounded the same amount.

   D. The left corners are rounded more than the right corners.

   E. The right corners are rounded more than the left corners.

4. Multiple choice - background image  
   ```css
   body {
     height: 500px;
     background-image: url("sunset.png") 
     background-repeat: no-repeat
     background-position: center;
   }
   ```

   Choose all statements that are true for this rule.

   A. The height of the image is 500px. = 0%

   B. The image will not be tiled across the page. = 33%

   C. The image will be centered vertically. = 33%

   D. The image will fill the whole page. = 0%

   E. The image will be centered horizontally. = 33%

5. True/false - Fixed layout  

   This rule will create a fixed layout: `body { width: 75%; }`

6. Multiple choice - float

   Choose all the statements that are true for this code snippet:

   ```html
   <p>p1</p>
   <p style="float: left;">p2</p>
   <p style="clear: left";>p3</p>
   ```

   A. Paragraph p2 will be positioned immediately to the right of p1. = 50%

   B. Paragraph p3 will be positioned immediately to the right of p2. = 0%

   C. Paragraph p2 will be positioned immediately to the left of p1. = 0%

   D. Paragraph p3 will be positioned directly below p1. = 50%

   E. Paragraph p2 will be positioned on top of p1. = 0%

7. Multiple choice - float and clear  
   Which of these statements about float and clear are true?  
   A. `float: right` will move an element as far to the right of the preceding element as possible. = 33% 

   B.  `float: left` will move an element as far to the left of the preceding element as possible. = 0%  
   C. `float: left` will move an element to the immediate right of the preceding element.  = 33%

   D. `clear: right` is used on an element to put it back into normal flow after a preceding element has been floated right. = 33%  
   E. `clear: left` is used on an element to move it all the way to the left. = 0%  

8. Multiple choice - grid  
   Which of the following are true for the CSS property: `display: grid`?  
   A. It is used to make a block element into a grid container. = 33%  
   B. In order to make a grid layout, `grid-template-columns` and/or `grid-template-rows` properties need to be used. = 33%  
   C. Only the elements inside the grid container are affected by the grid template(s). = 33%  
   D. Only `<div>` elements can be used as grid containers. = 0%  
   E. The width of gird rows and columns are always set automatically.  = 0%  

9. Multiple choice - grid  
   Which statements are true for this code:  

   ```html
   <div style="display: grid; grid-template-columns: 25% 25%;">
     <div>Item 1</div>
     <div>Item 2</div>
     <div>Item 3</div>  
     <div>Item 4</div> 
   </div>
   ```

   A. There will be two rows and two columns. = 33%  
   B. There will be one column and four rows. = 0%  
   C The columns will be 1/4 the width of the web page. = 33%  
   D. There will be four columns and one row. = 0%  
   E. Items 1 and 2 will be in the first row, 3 and 4 in the second. = 33%  

10. Matching - grid terms  
    - grid gap = gap between columns or rows in a grid.
    - grid lines = invisible lines above, below, and between cells in a grid.
    - grid container = a block element that is used for grid layout.
    - grid template = a property of the grid container that determines the number and width of rows or columns.

11. Multiple choice - grid lines  
    Choose all the correct statements:  
    A. There are grid lines on each side of every cell in the grid. = 33%  
    B. A grid with two columns and two rows will have three vertical and three horizontal gird lines. = 33%  
    C. Gird lines are numbered starting at 0. = 0%  
    D. Grid lines are used to control row and column spanning. = 33%  
    E. Grid lines for visible boundaries around grid items. = 0%  

12. True/false - flexbox direction
  

    A flexbox can be made either vertical or horizontal by setting the `flex-direction` property to `row` or `column`.  = true.

13. True/false - flexbox container  
    Only a div can be used as a flexbox container.  = false.

14. Multiple choice - flexbox code  
    Select all the statements that are true about the code below:  

    ```html
    <div style="display:flex;">
    	<p>P1</p>
    	<p>P2</p>
    	<p>P3</p>
    </div>
    ```

    A. The `div` will be a horizontal (row) flexbox container. = 50%  
    B. The paragraphs, P1 through P3, will all be on the left side of the flexbox. = 50%.  
    C. The paragraphs, P1 through P3, will all be on the right side of the flexbox. = 0%.  
    D. The `div` will be a vertical (column) flexbox container. = 0%  
    E.  The paragraphs, P1 through P3, will all be centered in the flexbox. = 0%.

15. Multiple choice - flexbox, align-items  
    Which of the following statements are true of the `align-items` property for flexboxes?   
    (The axis of a row flexbox is horizontal, for a column it's vertical. The cross-axis direction for a row is vertical, for a column it's horizontal.)

    A. It is used to align flex items at right angles (cross-axis) to the container direction.  = 33%  
    B. The default is to stretch the flex items all the way across the axis of the  flexbox.  = 33%  
    C. Setting `align-items` to `center` will center the flex items across the flexbox.  = 33%  
    D. Setting `align-items` to `center` will center the flex items in the direction of the axis of the flexbox.  = 0%  
    E. The default is to align the flex items at the top of the flexbox. = 0%

16. Multiple choice - flexbox, justify-content  
    Which of the following statements are true of the `justify-conent` property for flexboxes?   

    A. It is only used to align flex items in a row (horizontal) flexbox.  = 33%  
    B. The default is to align the flex items on the left side of the  flexbox.  = 33%  
    C. Setting `justify-conent` to `center` will center the flex items horizontally in the flexbox.  = 33%  
    D. Setting `justify-conent` to `center` will center the flex items in the both vertically and horizontally the flexbox.  = 0%  
    E. The default is to align the flex items to the right of the flexbox. = 0%

17. 

