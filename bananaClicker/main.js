var clicks = 0;
var upgCost = 100;
var workerCost = 200;
var superWorkerCost = 1000;
var multiplier = 1;
var workers = 0;
var superWorkers = 0;

function onClick() {
  clicks += 1 * multiplier;
}

setInterval(function () {
  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById("upgCost").innerHTML = upgCost;
  document.getElementById("workerCost").innerHTML = workerCost;
  document.getElementById("superWorkerCost").innerHTML = superWorkerCost;
  document.getElementById("currentMultiplier").innerHTML = multiplier;
  document.getElementById("nextMultiplier").innerHTML = multiplier + 1;
  document.getElementById("currentWorkers").innerHTML = workers;
  document.getElementById("nextWorker").innerHTML = workers + 1;
  document.getElementById("currentSuperWorkers").innerHTML = superWorkers;
  document.getElementById("nextSuperWorker").innerHTML = superWorkers + 1;
}, 0);

setInterval(function () {
  clicks += ((superWorkers * 10) + workers) * multiplier;
}, 500);

function upgrade() {
  if (clicks >= upgCost) {
    clicks -= upgCost;
    multiplier++;
    upgCost += 50;
  } else {
    notEnoughBananas();
  }
}

function newWorker() {
  if (clicks >= workerCost) {
    clicks -= workerCost;
    workers++;
    workerCost += 100;
  } else {
    notEnoughBananas();
  }
}

function newSuperWorker() {
  if (clicks >= superWorkerCost) {
    clicks -= superWorkerCost;
    superWorkers++;
    superWorkerCost += 1000;
  } else {
    notEnoughBananas();
  }
}

function notEnoughBananas() {
  document.getElementById("clicks").style.color = "red";
  document.getElementById("clicks").style.fontSize = "50px";
  document.getElementById("bananaIcon").style.fontSize = "50px";
  setTimeout(function () {
    document.getElementById("clicks").style.color = "rgb(255, 217, 0)";
    document.getElementById("clicks").style.fontSize = "40px";
    document.getElementById("bananaIcon").style.fontSize = "40px";
  }, 100);
}
