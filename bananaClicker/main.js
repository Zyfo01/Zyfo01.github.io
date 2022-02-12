var clicks = 0;
var upgCost = 100;
var workerCost = 200;
var superWorkerCost = 1000;
var farmCost = 60000;
var multiplier = 1;
var workers = 0;
var superWorkers = 0;
var farms = 0;
var paused = false;
var expPriceMultiplier = 0;
var expPriceWorker = 0;
var expPriceSuperWorker = 0;
var expPriceFarm = 0;

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
    document.getElementById("farmCost").innerHTML = farmCost / 1000 + "k";
    document.getElementById("currentMultiplier").innerHTML = multiplier;
    document.getElementById("nextMultiplier").innerHTML = multiplier + 1;
    document.getElementById("currentWorkers").innerHTML = workers;
    document.getElementById("nextWorker").innerHTML = workers + 1;
    document.getElementById("currentSuperWorkers").innerHTML = superWorkers;
    document.getElementById("nextSuperWorker").innerHTML = superWorkers + 1;
    document.getElementById("currentFarms").innerHTML = farms;
    document.getElementById("nextFarm").innerHTML = farms + 1;

    if (multiplier % 10 == 0 && expPriceMultiplier != multiplier / 10) {
      expPriceMultiplier++;
    }

    if (workers % 7 == 0 && expPriceWorker != workers / 7) {
      expPriceWorker++;
    }

    if (superWorkers % 5 == 0 && expPriceSuperWorker != superWorkers / 5) {
      expPriceSuperWorker++;
    }

    if (farms % 3 == 0 && expPriceFarm != farms / 3) {
      expPriceFarm++;
    }
  }
}, 0);

setInterval(function () {
  if (paused == false) {
    clicks +=
      (farms * 750 + superWorkers * 10 + workers) * Math.ceil(multiplier / 5);
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
      workerCost += 100 * (1 + expPriceWorker / 10);
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
      superWorkerCost += 1000 * (1 + expPriceSuperWorker / 10);
    } else {
      notEnoughBananas();
    }
  }
}

function newFarm() {
  if (paused == false) {
    if (clicks >= farmCost) {
      clicks -= farmCost;
      farms++;
      farmCost += 140000 * (1 + expPriceFarm / 10);
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

function help() {
  alert(
    "Click on the banana to gain more bananas. Buy upgrades from the shop. Prices have slight exponential increases as you buy more items. The multiplier is fully effective on clicks, while much weaker on workers and farms."
  );
}
