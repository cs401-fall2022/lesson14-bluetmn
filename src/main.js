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
