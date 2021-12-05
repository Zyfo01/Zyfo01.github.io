var score = 0;
var misses = 0;
var timeLeft = 60;
var timeBetweenSpawns = 1000;
var nodesCreated = 0;

function random(max) {
    return Math.floor(Math.random() * max);
}

function start() {
    document.getElementById("timerText").innerHTML = "1:00";
    score = 0;
    document.getElementById("scoreText").innerHTML = score;
    misses = 0;
    document.getElementById("missesText").innerHTML = misses;
    document.getElementById("start").style.display = "none";
    document.getElementById("end").style.display = "none";
    document.getElementById("countdown").style.display = "block";
    document.getElementById("countdown").innerHTML = "3";
    setTimeout(function() {
        document.getElementById("countdown").innerHTML = "2";
    }, 1000);
    setTimeout(function() {
        document.getElementById("countdown").innerHTML = "1";
    }, 2000);
    setTimeout(function() {
        timer();
        nodeLauncher(timeBetweenSpawns);
        document.getElementById("missArea").style.display = "block";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("timer").style.display = "block";
        document.getElementById("score").style.display = "block";
        document.getElementById("misses").style.display = "block";
    }, 3000);
}

function timer() {
    var interval = setInterval(function() {
        timeLeft--;
        if (timeLeft > 9) {
            document.getElementById("timerText").innerHTML = "0:" + timeLeft;
        } else if (timeLeft > -1 && timeLeft <= 9) {
            document.getElementById("timerText").innerHTML = "0:0" + timeLeft;
        } 
        if (timeLeft == 0) {
            setTimeout(function () {
                clearInterval(interval);
                end();
                timeLeft = 60;
            }, 1000)
        }
    }, 1000);
}

function end() {
    document.getElementById("end").style.display = "block";
    document.getElementById("missArea").style.display = "none";
    document.getElementById("finalScore").innerHTML = score;
    document.getElementById("finalMisses").innerHTML = misses;
    document.getElementById("%targetsHit").innerHTML = Math.round((score / nodesCreated) * 100) + "%";
    document.getElementById("accuracy").innerHTML = Math.round((score / (score + misses)) * 100) + "%";
}

function nodeLauncher(time) {
    var interval = setInterval(function() {
        createNode();
    }, time)
    setTimeout(function() {
        clearInterval(interval);
    }, 59000)
}

function createNode() {
    nodesCreated++;
    var x = random(98);
    var y = random(96);
    var scale = 1;
    var newNode = document.createElement("DIV");
    newNode.classList.add('node');
    newNode.style.left = x + "%";
    newNode.style.bottom = y + "%";
    document.body.appendChild(newNode);
    var interval = setInterval(function() {
        scale -= 0.01;
        newNode.style.transform = "scale(" + scale + ")";
        if (scale <= 0) {
            clearInterval(interval);
            newNode.style.display = "none";
            miss();
        }
    }, 30);
    newNode.onclick = function() {
        clearInterval(interval);
        newNode.style.display = "none";
        score++;
        document.getElementById("scoreText").innerHTML = score;
    };
}

function miss() {
    misses++;
    document.getElementById("missesText").innerHTML = misses;
}

function spawns() {
    document.getElementById("start").style.display = "none";
    document.getElementById("timeBetweenSpawns").style.display = "block";
}
function spawnSave() {
    document.getElementById("timeBetweenSpawns").style.display = "none";
    document.getElementById("start").style.display = "block";
    timeBetweenSpawns = parseInt(document.getElementById("spawnTime").value);
}

function themeSelect() {
    document.getElementById("themeSelect").style.display = "block";
    document.getElementById("start").style.display = "none";
}

function theme(color) {
    document.getElementById("stylesheet").href = "themes/" + color + ".css";
}

function themeBack() {
    document.getElementById("themeSelect").style.display = "none";
    document.getElementById("start").style.display = "block";
}
function home() {
    document.getElementById("end").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("score").style.display = "none";
    document.getElementById("misses").style.display = "none";
    document.getElementById("start").style.display = "block";
}

