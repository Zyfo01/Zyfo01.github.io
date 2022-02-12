var clicks = 0;
var upgCost = 100;
var workerCost = 200;
var superWorkerCost = 1000;
var multiplier = 1;
var workers = 0;
var superWorkers = 0;
var paused = false;
var expPriceMultiplier = 0;
var expPriceWorker = 0;
var expPriceSuperWorker = 0;

function onClick() {
  if (paused == false) {
    clicks += 1 * multiplier;
  }
}

setInterval(function () {
  if (paused == false) {
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

    if (multiplier % 10 == 0 && expPriceMultiplier != multiplier / 10) {
      expPriceMultiplier++;
    }

    if (workers % 7 == 0 && expPriceWorker != workers / 7) {
      expPriceWorker++;
    }

    if (superWorkers % 5 == 0 && expPriceSuperWorker != superWorkers / 5) {
      expPriceSuperWorker++;
    }
  }
}, 0);

setInterval(function () {
  if (paused == false) {
    clicks += (superWorkers * 10 + workers) * Math.ceil(multiplier / 5);
  }
}, 500);

function upgrade() {
  if (paused == false) {
    if (clicks >= upgCost) {
      clicks -= upgCost;
      multiplier++;
      upgCost += 50 * (1 + expPriceMultiplier / 10);
    } else {
      notEnoughBananas();
    }
  }
}

function newWorker() {
  if (paused == false) {
    if (clicks >= workerCost) {
      clicks -= workerCost;
      workers++;
      workerCost += 100 * (1 + expPriceMultiplier / 10);
    } else {
      notEnoughBananas();
    }
  }
}

function newSuperWorker() {
  if (paused == false) {
    if (clicks >= superWorkerCost) {
      clicks -= superWorkerCost;
      superWorkers++;
      superWorkerCost += 1000 * (1 + expPriceMultiplier / 10);
    } else {
      notEnoughBananas();
    }
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

function pause() {
  if (paused == false) {
    paused = true;
    document.getElementById("pauseIcon").innerHTML = "play_arrow";
  } else {
    paused = false;
    document.getElementById("pauseIcon").innerHTML = "pause";
  }
}

function details() {
  alert(
    "Click the banana to gain points/bananas. Buy upgrades from the shop with the bananas you earn. Purchasing a multiplier adds 1 to your multiplier, and it multiplies each click's points by that amount, but is only 1/5 as strong on workers (although not allowing decimals or <1)."
  );
}
