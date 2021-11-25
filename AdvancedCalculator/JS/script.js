// BASIC

function add(a, b) {
    var ans = a + b;
    return ans.toString();
}
function sub(a, b) {
    var ans = a - b;
    return ans.toString();
}
function mul(a, b) {
    var ans = a * b;
    return ans.toString();
}
function div(a, b) {
    var ans = a / b;
    return ans.toString();
}

function basicSolve() {
    var x = parseInt(document.getElementById("a").value);
    var y = parseInt(document.getElementById("b").value);
    if (
    document.getElementById("operation").value == "none" ||
    document.getElementById("a").value == "" ||
    document.getElementById("b").value == "") {
        alert("Not all required fields have been filled out.");
        return;
    } else if (document.getElementById("operation").value == "+") {
        document.getElementById("answer").innerHTML = "Answer: " + add(x, y);
    } else if (document.getElementById("operation").value == "-") {
        document.getElementById("answer").innerHTML = "Answer: " + sub(x, y);
    } else if (document.getElementById("operation").value == "*") {
        document.getElementById("answer").innerHTML = "Answer: " + mul(x, y);
    } else if (document.getElementById("operation").value == "/") {
        document.getElementById("answer").innerHTML = "Answer: " + div(x, y);
    }
}
function basicClear() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("operation").value = "none";
    document.getElementById("answer").innerHTML = "";
}

// QUADRATICS

function quadSolve() {
    var equation = null;
    var a = parseInt(document.getElementById("ax").value);
    var b = parseInt(document.getElementById("bx").value);
    var c = parseInt(document.getElementById("c").value);

    if (a != 1 && a != -1 && a != 0) {
        var eqA = a + "x<sup>2</sup>";
    } else if (a == 1) {
        var eqA = "x<sup>2</sup>";
    } else if (a == -1) {
        var eqA = "-x<sup>2</sup>"
    } else if (a == 0) {
        alert("'a' cannot be equal to zero.");
        return;
    }
    if (b != 1 && b != -1 && b != 0) {
        var eqB = b + "x";
    } else if (b == 1) {
        var eqB = "x";
    } else if (b == -1) {
        var eqB = "-x"
    } else if (b == 0) {
        var eqB = ""
    }
    if (b != 0 && c != 0) {
        equation = eqA + " " + document.getElementById("operationQuad").value + " " + eqB + " " + document.getElementById("operationQuad2").value + " " + c;
    } else if (b == 0 && c != 0) {
        equation = eqA + " " + document.getElementById("operationQuad2").value + " " + c;
    } else if (b != 0 && c == 0) {
        equation = eqA + " " + document.getElementById("operationQuad").value + " " + eqB;
    } else if (b == 0 && c == 0) {
        equation = eqA;
    }
    equation = "<span style='color:dodgerblue'><b>" + equation + " = 0</b></span>"

    if (document.getElementById("operationQuad").value == "-") {
        b = -b;
    }
    if (document.getElementById("operationQuad2").value == "-") {
        c = -c;
    }
    var root1 = (-b + Math.sqrt(b * b - 4 * a * c)) / 2 * a;
    var root2 = (-b - Math.sqrt(b * b - 4 * a * c)) / 2 * a;
    if (
        document.getElementById("ax").value == "" ||
        document.getElementById("bx").value == "" ||
        document.getElementById("c").value == ""
    ) {
        alert("Not all required fields have been filled out.");
        return;
    }

    if (isNaN(root1) == false && isNaN(root2) == false && root1 != root2) {
        if (document.getElementById("roundTo").value == "wholeNum") {
            root1 = Math.round(root1);
            root2 = Math.round(root2);
            document.getElementById("answer").innerHTML = "The roots of " + equation + " are <br>" + root1 + ", " + root2;
        } else if (document.getElementById("roundTo").value == "tenth") {
            root1 = (Math.round(root1 * 10)) / 10;
            root2 = (Math.round(root2 * 10)) / 10;
            document.getElementById("answer").innerHTML = "The roots of " + equation + " are <br>" + root1 + ", " + root2;
        } else if (document.getElementById("roundTo").value == "hundredth") {
            root1 = (Math.round(root1 * 100)) / 100;
            root2 = (Math.round(root2 * 100)) / 100;
            document.getElementById("answer").innerHTML = "The roots of " + equation + " are <br>" + root1 + ", " + root2;
        } else if (document.getElementById("roundTo").value == "thousandth") {
            root1 = (Math.round(root1 * 1000)) / 1000;
            root2 = (Math.round(root2 * 1000)) / 1000;
            document.getElementById("answer").innerHTML = "The roots of " + equation + " are <br>" + root1 + ", " + root2;
        } else if (document.getElementById("roundTo").value == "noRound") {
            document.getElementById("answer").innerHTML = "The roots of " + equation + " are <br>" + root1 + ", " + root2;
        }
        if (document.getElementById("checkExtraneous").checked == true) {
            if (a * root1 * root1 + b * root1 + c != 0) {
                document.getElementById("answer").innerHTML = "The roots of " + equation + " are <br><span style='color:red'>" + root1 + "</span>, " + root2;
            }
            if (a * root2 * root2 + b * root2 + c != 0) {
                document.getElementById("answer").innerHTML = "The roots of " + equation + " are <br>" + root1 + ", <span style='color:red'>" + root2 + "</span>";
            }   
        }
    } 
    
    else if (isNaN(root1) == false && isNaN(root2) == false && root1 == root2) {
        if (document.getElementById("roundTo").value == "wholeNum") {
            root1 = Math.round(root1);
            document.getElementById("answer").innerHTML = "The root of " + equation + " is <br>" + root1;
        } else if (document.getElementById("roundTo").value == "tenth") {
            root1 = (Math.round(root1 * 10)) / 10;
            document.getElementById("answer").innerHTML = "The root of " + equation + " is <br>" + root1;
        } else if (document.getElementById("roundTo").value == "hundredth") {
            root1 = (Math.round(root1 * 100)) / 100;
            document.getElementById("answer").innerHTML = "The root of " + equation + " is <br>" + root1;
        } else if (document.getElementById("roundTo").value == "thousandth") {
            root1 = (Math.round(root1 * 1000)) / 1000;
            document.getElementById("answer").innerHTML = "The root of " + equation + " is <br>" + root1;
        } else if (document.getElementById("roundTo").value == "noRound") {
            document.getElementById("answer").innerHTML = "The root of " + equation + " is <br>" + root1;
        }
        if (document.getElementById("checkExtraneous").checked == true) {
            if (a * root1 * root1 + b * root1 + c != 0) {
                document.getElementById("answer").innerHTML = "The root of " + equation + " is <br><span style='color:red'>" + root1 + "</span>";
            }   
        }
    } 
    
    else if (isNaN(root1) == true && isNaN(root2) == true) {
        document.getElementById("answer").innerHTML = equation + " has no solutions.";
    }
}

function quadClear() {
    document.getElementById("ax").value = "";
    document.getElementById("bx").value = "";
    document.getElementById("c").value = "";
    document.getElementById("answer").innerHTML = "";
    document.getElementById("ext").style.display = "none";
    document.getElementById("checkExtraneous").checked = false;
}