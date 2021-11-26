var input = null;
var Ans = null;
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
    if (document.getElementById("display").innerHTML == Math.round(eval(input) * 1000000) / 1000000 ||
    document.getElementById("display").innerHTML == '0') {
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
