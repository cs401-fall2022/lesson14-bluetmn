
import { sayHello } from "./hello" ;

let btn = document.getElementById("surprise");

function surprise() : void {
    let toHide = document.getElementById("btn");
    let toChange = document.getElementById("message");

    btn.classList.add("hidden");
    toChange.innerHTML = sayHello("World");
}