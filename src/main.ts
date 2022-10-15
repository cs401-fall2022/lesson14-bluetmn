
import { sayHello } from "./hello" ;

window.addEventListener("DOMContentLoaded", loadhandler);

function loadhandler() {
    let btn = document.getElementById("surprise");
    btn.addEventListener("click", function() {
        let toChange = document.getElementById("message");
        btn.classList.add("hidden");
        toChange.innerHTML = sayHello("World");
    });
}
 