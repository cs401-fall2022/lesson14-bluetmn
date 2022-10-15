(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = void 0;
function sayHello(source) {
    return "Hello there! It's me, ".concat(source);
}
exports.sayHello = sayHello;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./hello");
window.addEventListener("DOMContentLoaded", loadhandler);
function loadhandler() {
    var btn = document.getElementById("surprise");
    btn.addEventListener("click", function () {
        var toChange = document.getElementById("message");
        btn.classList.add("hidden");
        toChange.innerHTML = (0, hello_1.sayHello)("World");
    });
}
},{"./hello":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaGVsbG8udHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0NBLFNBQWdCLFFBQVEsQ0FBQyxNQUFjO0lBQ25DLE9BQU8sZ0NBQTBCLE1BQU0sQ0FBRyxDQUFDO0FBQy9DLENBQUM7QUFGRCw0QkFFQzs7OztBQ0ZELGlDQUFvQztBQUVwQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFFekQsU0FBUyxXQUFXO0lBQ2hCLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUMxQixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBQSxnQkFBUSxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxuZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvKHNvdXJjZTogc3RyaW5nKSA6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBIZWxsbyB0aGVyZSEgSXQncyBtZSwgJHsgc291cmNlIH1gO1xufVxuXG4iLCJcbmltcG9ydCB7IHNheUhlbGxvIH0gZnJvbSBcIi4vaGVsbG9cIiA7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBsb2FkaGFuZGxlcik7XG5cbmZ1bmN0aW9uIGxvYWRoYW5kbGVyKCkge1xuICAgIGxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1cnByaXNlXCIpO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0b0NoYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIHRvQ2hhbmdlLmlubmVySFRNTCA9IHNheUhlbGxvKFwiV29ybGRcIik7XG4gICAgfSk7XG59XG4gIl19
