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
var btn = document.getElementById("surprise");
function surprise() {
    var toHide = document.getElementById("btn");
    var toChange = document.getElementById("message");
    btn.classList.add("hidden");
    toChange.innerHTML = (0, hello_1.sayHello)("World");
}
},{"./hello":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaGVsbG8udHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0NBLFNBQWdCLFFBQVEsQ0FBQyxNQUFjO0lBQ25DLE9BQU8sZ0NBQTBCLE1BQU0sQ0FBRyxDQUFDO0FBQy9DLENBQUM7QUFGRCw0QkFFQzs7OztBQ0ZELGlDQUFvQztBQUVwQyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRTlDLFNBQVMsUUFBUTtJQUNiLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVsRCxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QixRQUFRLENBQUMsU0FBUyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxPQUFPLENBQUMsQ0FBQztBQUMzQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXG5leHBvcnQgZnVuY3Rpb24gc2F5SGVsbG8oc291cmNlOiBzdHJpbmcpIDogc3RyaW5nIHtcbiAgICByZXR1cm4gYEhlbGxvIHRoZXJlISBJdCdzIG1lLCAkeyBzb3VyY2UgfWA7XG59XG5cbiIsIlxuaW1wb3J0IHsgc2F5SGVsbG8gfSBmcm9tIFwiLi9oZWxsb1wiIDtcblxubGV0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VycHJpc2VcIik7XG5cbmZ1bmN0aW9uIHN1cnByaXNlKCkgOiB2b2lkIHtcbiAgICBsZXQgdG9IaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5cIik7XG4gICAgbGV0IHRvQ2hhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlXCIpO1xuXG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgdG9DaGFuZ2UuaW5uZXJIVE1MID0gc2F5SGVsbG8oXCJXb3JsZFwiKTtcbn0iXX0=
