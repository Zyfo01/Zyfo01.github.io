var input = null;

function solve() {
    input = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    setTimeout(function(){
        try {
            document.getElementById("display").innerHTML = eval(input);
        }
        catch {
            document.getElementById("display").innerHTML = 'ERROR';
            setTimeout(function() {
                alert('Please do not use parentheses as multiplication.');
                document.location.href = "";
            }, 100);
        }
    }, 100);
}

function display(x) {
    if (document.getElementById("display").innerHTML == eval(input)) {
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
