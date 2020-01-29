# Javascript-ES6-101-
![Artboard 1@2x](https://github.com/topkoka/Javascript-ES6-101-/blob/master/Ai%20info/2x/Artboard%201%402x.png)

## Object
```js
 let clone = Object.assign({},user);
```

## JQuery Method
![Artboard 1@2x](http://codewithme.us/dc/reveal.js/images/document-ready.png)
``` js
 // $(selectors).method("parameter1","parameter2")
$(document).ready(function() {
// javascript code here!!
});
    
```
####  selectors
```js

    <script type="text/javascript" language="javascript">
        $(document).ready(function(){
            // $ (selectors).method("parameter1","parameter2")
            $('#div2,.small').css("background-color","blue");
            $('div.small span').css("background-color","red");
            $('.big').css("background-color","yellow");
        });
    </script>

    <div class="big" id="div1">
        <p>This is first division of the DOM.</p>
    </div>
    <div class="medium" id="div2">
        <p>This is second division of the DOM.</p>
    </div>
    <div class="small" id="div3">
        <span>This is third division of the DOM</span>
    </div>
```

#### attributes
```js
// ดึงค่า attributes
var title = $("em").attr("title");
 $("#divid").text(title);
 
 // set attributes
 $("#myimg").attr("src", "images/dog2.jpg");
 
 // ลบ attributes
 $("table").removeAttr("border");

```
##### attributes
```js

    <div>
        <em title="Bold and BraveSSS">This is first paragraph.</em>
        <p id="myid"  >This is second paragraph.</p>
        <div id="divid"></div>
    </div>

    <script type="text/javascript" language="javascript">
        $(document).ready(function () {
            var title = $("em").attr("title");
            $("#divid").text(title);
        });
    </script>

```
```html
This is first paragraph.
This is second paragraph.

Bold and BraveSSS
```
##### ` เปลี่ยนรูป `
```
  <div>
        <img src="images/dog1.jpg" alt="Sample image" />
        <img id="myimg" src="images/dog1.jpg" alt="Sample image" />
    </div>

    <script type="text/javascript" language="javascript">
        $(document).ready(function () {
            
            $("#myimg").attr("src", "images/dog2.jpg");
        });
    </script>
  
```
##### ` ลบ `
```js
    <table border="2">
        <tr>
            <td>This is first table</td>
        </tr>
    </table>

    <table border="3">
        <tr>
            <td>This is second table</td>
        </tr>
    </table>

    <table border="4">
        <tr>
            <td>This is third table</td>
        </tr>
    </table>
    
 <script type="text/javascript" language="javascript">
        $(document).ready(function () {
           $("table").removeAttr("border");
        });
    </script>

```
#### Class
```
 // addclass
   $("em").addClass("selected");
 
 // removeClass
  $("p#pid1").removeClass("red");
  
  // toggleClass (มีเอาออก-ไม่มีใส่เข้าไป)
    $(this).toggleClass("red");
```
##### ` add class`
```js
    <style>
        .selected {
            color: red;
        }
        .highlight {
            background: yellow;
        }
    </style>
<body>
    <em title="Bold and Brave">This is first paragraph.</em>
    <p id="myid">This is second paragraph.</p>
</body>
 <script type="text/javascript" language="javascript">
        $(document).ready(function () {
            $("em").addClass("selected");
            $("#myid").addClass("highlight");
        });
    </script>
```
##### `removeClass`
```js
    <style>
        .red {
            color: red;
        }

        .green {
            color: green;
        }
    </style>


<body>
    <p class="red" id="pid1">This is first paragraph.</p>
    <p class="green" id="pid2">This is second paragraph.</p>
</body>
 <script type="text/javascript" language="javascript">
 $(document).ready(function () {
          $("p#pid1").removeClass("red");
          $("p#pid2").removeClass("green");
 });
    </script>
```
##### `toggleClass `
```js
    <style>
        .red {
            color: red;
        }
    </style>
    
<body>
    <p class="green">Click following line to see the result</p>
    <p class="red" id="pid">This is first paragraph.</p>
</body>

<script>
  $(document).ready(function () {
            $("p#pid").click(function () {
                $(this).toggleClass("red");
            });
        });
    </script>
```
# NEW
    51219.01 info=> arrow function
    51219.02 update readme show info
    61219.01 update info v0.1f
