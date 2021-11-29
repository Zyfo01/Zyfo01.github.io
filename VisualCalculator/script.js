var input = null;
var Ans = null;
var darkMode = false;
function solve() {
    input = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    setTimeout(function(){
        try {
            document.getElementById("display").innerHTML = Math.round(eval(input) * 1000000) / 1000000;
            Ans = Math.round(eval(input) * 1000000) / 1000000;
        }
        catch {
            document.getElementById("display").innerHTML = 'ERROR';
            setTimeout(function() {
                alert('An error ocurred. Common errors can include: Using parentheses as multiplication, incorrect syntax, and operations on their own.');
                document.location.href = "";
            }, 100);
        }
    }, 100);
}

function display(x) {
    if (x == ' + ' || x == ' - ' || x == ' * ' || x == ' / ') {
        if (document.getElementById("display").innerHTML == Math.round(eval(input) * 1000000) / 1000000) {
            document.getElementById("display").innerHTML = 'Ans' + x;
            return;
        }
        if (document.getElementById("display").innerHTML == '') {
            document.getElementById("display").innerHTML = '0' + x;
            return;
        }
    }
    if (document.getElementById("display").innerHTML == Math.round(eval(input) * 1000000) / 1000000) {
        document.getElementById("display").innerHTML = x;
    } else {
        document.getElementById("display").innerHTML += x;
    }
}
function memClear() {
    document.getElementById("display").innerHTML = 'MEM CL';
    setTimeout(function() {
        document.location.href = "";
    }, 600);
}
function clearDisplay() {
    document.getElementById("display").innerHTML = "";
}

function modeSwitch() {
    darkMode = !darkMode;
    if (darkMode == true) {
        document.getElementById("body").style.backgroundColor = "rgb(30,30,30)";
        document.getElementById("modeSwitch").style.borderColor = "rgb(200,200,200)";
        document.getElementById("modeSwitch").style.color = "rgb(200,200,200)";
        document.getElementById("modeSwitchBubble").style.backgroundColor = "rgb(200,200,200)";
    } else if (darkMode == false) {
        document.getElementById("body").style.backgroundColor = "rgb(200, 200, 200)";
        document.getElementById("modeSwitch").style.borderColor = "rgb(30,30,30)";
        document.getElementById("modeSwitch").style.color = "rgb(30,30,30)";
        document.getElementById("modeSwitchBubble").style.backgroundColor = "rgb(30,30,30)";
        
    }
}

function modeHover() {
    if (darkMode == true) {
        document.getElementById("modeSwitch").style.color = "rgb(200,200,200)";
        document.getElementById("modeSwitch").style.width = "70px";
    } else if (darkMode == false) {
        document.getElementById("modeSwitch").style.color = "rgb(30,30,30)";
        document.getElementById("modeSwitch").style.width = "70px";
        
    }
}
function modeUnHover() {
    document.getElementById("modeSwitch").style.color = "transparent";
    document.getElementById("modeSwitch").style.width = "20px";
}
