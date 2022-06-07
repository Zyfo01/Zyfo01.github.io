import * as System from "./modules/System.js";

let started = false;
document.onmousedown = () => {
    if (!started) {
        setTimeout(() => {
            System.start();
        }, 100);
        started = true;
    }
}