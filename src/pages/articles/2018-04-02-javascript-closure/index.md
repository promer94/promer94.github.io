---
title: JavaScript Closure
date: "2018-04-02"
layout: post
path: "/javascript-closure/"
categories:
  - JavaScript
  - Fundamental
---  
# 闭包

 对于 JavaScript 的初学者来说，闭包算是一个难点。 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) 的 JavaScript 文档对闭包的概念给出了准确的定义，也提供了简单直观的的实例，是一个非常好的学习材料。 这篇文章将从文档出发，对闭包的知识点进行一个简单的梳理。
<!--more-->
## 闭包是什么       
首先我们需要对闭包提供一个准确的定义。 在文档中，闭包的定义是 'A closure is the combination of a function and the lexical environment within which that function was declared'。这个定义非常的拗口，我们只需要留有一个印象。真正理解定义最好方式就是通过实际的代码。 假设：
 ```js
 function init() {
    var name = "Hello"; // name 是一个被 init 创建的局部变量
    function displayName() { 
        // displayName() 是内部函数,一个闭包
        alert(name); // 使用了父函数中声明的变量
    }
    displayName(); 
}
init();
```  
通过以上的代码块来看，我们可以简单总结为闭包是 ‘一个拥有外部变量的函数’。 例子中的函数 `displayname`可以调用不属于自己的外部变量`name`，不管此 `displayName` 函数最终是否被返回，实际上由 `name` 和 `displayName` 组成的闭包已经形成了。  
```js
 function init() {
    var name = "Hello"; // name 是一个被 init 创建的局部变量
    function displayName() { 
        // displayName() 是内部函数,一个闭包
        alert(name); // 使用了父函数中声明的变量
    }
    return displayName(); // 闭包被返回
}
var fun = init();
fun();
```     
上面的新代码块的区别在于函数`init`返回了一个函数`displayName`。通过这个返回的函数，我们就可以访问这个函数所相关联的词法环境或者说数据。本来应该被销毁的`name`变量保留了下来，而且只能通过调用函数的方式来访问，这也就是私有性。 

---
## 闭包的作用  
实际上在上一个例子中，我们已经看到了闭包的作用，闭包可以用来模拟私有变量和方法。 它让函数和函数所操作的某些数据联系了起来。
```js
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */
```     
在上面的例子中文门可以看到 `privateCounter`和`changeBy`作为下面三个函数共同的词法环境形成了闭包。在`makeCounter`执行之后，本该消失的词法环境被保留下来，只能通过返回的三个函数进行更改和访问。

---
## 在循环中创建闭包：一个常见错误；
在 ECMAScript 2015 引入 let 这个关键字之前，有一个常见的在循环中创建闭包的错误。
```html
<p id="help">Helpful notes will appear here</p>
<p>E-mail: <input type="text" id="email" name="email"></p>
<p>Name: <input type="text" id="name" name="name"></p>
<p>Age: <input type="text" id="age" name="age"></p>
``` 

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
``` 
这段代码执行的结果就是，无论你选择哪一个输入框，helper 信息都会显示为第三个。原因就是返回三个闭包实际上共享了由`var`这个关键词创建的 `item`这一个词法环境。闭包只会捕获自由变量的引用，所以三个闭包中的`item`都指向了第三个 helper text。根据这一点我们可以将代码修改如下


```js
function setupHelpAnonymous(){
    var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

    for(var i = 0; i < helpText.length; i++){
      var item = helpText[i];
      (function() {
        var item = helpText[i];
        document.getElementById(item.id).onfocus = function() {
          showHelp(item.help);
        }
     })();
    }
  }

  setupHelpAnonymous()
  ```   
在上面的代码片段中，通过使用一个 IIFE(立即执行函数表达式)对`item`进行了立刻求值。通过这种方式`onfocus`就能获取到正确的 helpText。在 ES6 引入了‘block scope’之后，我们可以使用 `let` 关键字更优雅的解决这个错误
```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
```  
每一次循环，都有一个新的 item 被创建，三个函数不再共享同一个词法环境。
