document.addEventListener("keypress", keyPressed);

var clicks = 0;
var upgCost = 100;
var workerCost = 200;
var superWorkerCost = 1000;
var farmCost = 100000;
var multiplier = 1;
var workers = 0;
var superWorkers = 0;
var farms = 0;
var paused = false;
var expPriceMultiplier = 0;
var expPriceWorker = 0;
var expPriceSuperWorker = 0;
var expPriceFarm = 0;
var settingsOpen = false;
var difficulty = 2;

function onClick() {
  if (paused == false) {
    clicks += 1 * multiplier;
  }
}

function abbreviate(x) {
  var y;
  if (x < 10000) {
    y = x;
  } else if (x >= 10000 && x < 1000000) {
    y = (Math.round(x / 10) * 10) / 1000 + "K";
  } else if (x >= 1000000 && x < 1000000000) {
    y = (Math.round(x / 10000) * 10000) / 1000000 + "M";
  } else if (x >= 1000000000 && x < 1000000000000) {
    y = (Math.round(x / 10000000) * 10000000) / 1000000000 + "B";
  } else if (x >= 1000000000000 && x < 1000000000000000) {
    y = (Math.round(x / 10000000000) * 10000000000) / 1000000000000 + "t";
  } else if (x >= 1000000000000000) {
    y =
      (Math.round(x / 10000000000000) * 10000000000000) / 1000000000000000 +
      "q";
  }
  return y;
}

setInterval(function () {
  if (paused == false) {
    document.getElementById("clicks").innerHTML = abbreviate(clicks);
    document.getElementById("upgCost").innerHTML = abbreviate(upgCost);
    document.getElementById("workerCost").innerHTML = abbreviate(workerCost);
    document.getElementById("superWorkerCost").innerHTML =
      abbreviate(superWorkerCost);
    document.getElementById("farmCost").innerHTML = abbreviate(farmCost);
    document.getElementById("currentMultiplier").innerHTML = multiplier;
    document.getElementById("nextMultiplier").innerHTML = multiplier + 1;
    document.getElementById("currentWorkers").innerHTML = workers;
    document.getElementById("nextWorker").innerHTML = workers + 1;
    document.getElementById("currentSuperWorkers").innerHTML = superWorkers;
    document.getElementById("nextSuperWorker").innerHTML = superWorkers + 1;
    document.getElementById("currentFarms").innerHTML = farms;
    document.getElementById("nextFarm").innerHTML = farms + 1;

    if (difficulty == 2) {
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

    if (difficulty == 3) {
      if (multiplier % 5 == 0 && expPriceMultiplier != multiplier / 5) {
        expPriceMultiplier++;
      }

      if (workers % 3 == 0 && expPriceWorker != workers / 3) {
        expPriceWorker++;
      }

      if (superWorkers % 2 == 0 && expPriceSuperWorker != superWorkers / 2) {
        expPriceSuperWorker++;
      }

      if (farms % 1 == 0 && expPriceFarm != farms / 1) {
        expPriceFarm++;
      }
    }
  }
}, 0);

setInterval(function () {
  if (paused == false) {
    if (difficulty == 1) {
      clicks += (farms * 200 + superWorkers * 10 + workers) * multiplier;
    } else if (difficulty == 2) {
      clicks +=
        (farms * 200 + superWorkers * 10 + workers) * Math.ceil(multiplier / 5);
    } else if (difficulty == 3) {
      clicks +=
        (farms * 150 + superWorkers * 7 + workers) * Math.ceil(multiplier / 10);
    }
  }
}, 500);

function upgrade() {
  if (paused == false) {
    if (clicks >= upgCost) {
      clicks -= upgCost;
      multiplier++;
      spendAnimation(upgCost);
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
      spendAnimation(workerCost);
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
      spendAnimation(superWorkerCost);
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
      spendAnimation(farmCost);
      farmCost += 150000 * (1 + expPriceFarm / 10);
    } else {
      notEnoughBananas();
    }
  }
}

function spendAnimation(price) {
  price = abbreviate(price);
  var elem = document.createElement("H3");
  if (price < 10000) {
    elem.innerHTML = price;
  } else if (price >= 10000 && price < 1000000) {
    elem.innerHTML = Math.round(price * 10) / 10 / 1000 + "k";
  } else if (price >= 1000000 && price < 1000000000) {
    elem.innerHTML = Math.round(price * 100) / 100 / 1000000 + "m";
  } else if (price >= 1000000000) {
    elem.innerHTML = Math.round(price * 100) / 100000 / 1000000000 + "B";
  }
  elem.innerHTML = "-" + price.toString();
  elem.style.color = "red";
  elem.style.position = "absolute";
  elem.style.left = "50%";
  elem.style.transform = "translate(-50%)";
  elem.style.top = "455px";
  elem.style.fontSize = "40px";
  document.body.appendChild(elem);
  var elemTop = 455;
  var elemOpacity = 1;
  var interval = setInterval(function () {
    elemTop -= 0.1;
    elemOpacity -= 0.005;
    elem.style.top = elemTop.toString() + "px";
    elem.style.opacity = elemOpacity.toString();
  });
  setTimeout(function () {
    clearInterval(interval);
    document.body.removeChild(elem);
  }, 1000);
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

function settings() {
  document.getElementById("save").style.top = "180px";
  document.getElementById("cancel").style.top = "180px";
  document.getElementById("areYouSure").style.display = "none";
  if (settingsOpen == false) {
    settingsOpen = true;
    paused = true;
    document.getElementById("shop").style.display = "none";
    document.getElementById("banana").style.display = "none";
    document.getElementById("clickCounter").style.display = "none";
    document.getElementById("divider2").style.display = "none";
    document.getElementById("settingsMenu").style.display = "block";
  } else if (settingsOpen == true) {
    settingsOpen = false;
    paused = false;
    document.getElementById("shop").style.display = "block";
    document.getElementById("banana").style.display = "block";
    document.getElementById("clickCounter").style.display = "block";
    document.getElementById("divider2").style.display = "block";
    document.getElementById("settingsMenu").style.display = "none";
  }
}

function easy() {
  document.getElementById("easy").style.backgroundColor = "orange";
  document.getElementById("easy").style.color = "rgb(30,30,30)";
  document.getElementById("normal").style.backgroundColor = "rgb(30,30,30)";
  document.getElementById("normal").style.color = "orange";
  document.getElementById("hard").style.backgroundColor = "rgb(30,30,30)";
  document.getElementById("hard").style.color = "orange";
}

function normal() {
  document.getElementById("normal").style.backgroundColor = "orange";
  document.getElementById("normal").style.color = "rgb(30,30,30)";
  document.getElementById("easy").style.backgroundColor = "rgb(30,30,30)";
  document.getElementById("easy").style.color = "orange";
  document.getElementById("hard").style.backgroundColor = "rgb(30,30,30)";
  document.getElementById("hard").style.color = "orange";
}

function hard() {
  document.getElementById("hard").style.backgroundColor = "orange";
  document.getElementById("hard").style.color = "rgb(30,30,30)";
  document.getElementById("normal").style.backgroundColor = "rgb(30,30,30)";
  document.getElementById("normal").style.color = "orange";
  document.getElementById("easy").style.backgroundColor = "rgb(30,30,30)";
  document.getElementById("easy").style.color = "orange";
}

function areYouSure() {
  if (
    (document.getElementById("easy").style.backgroundColor == "orange" &&
      difficulty != 1) ||
    (document.getElementById("normal").style.backgroundColor == "orange" &&
      difficulty != 2) ||
    (document.getElementById("hard").style.backgroundColor == "orange" &&
      difficulty != 3)
  ) {
    document.getElementById("save").style.top = "130px";
    document.getElementById("cancel").style.top = "130px";
    document.getElementById("areYouSure").style.display = "block";
  }
}

function areYouSureCancel() {
  document.getElementById("save").style.top = "180px";
  document.getElementById("cancel").style.top = "180px";
  document.getElementById("areYouSure").style.display = "none";
}

function keyPressed(e) {
  if ((e.key = "ENTER" && settingsOpen == true)) {
    saveSettings();
  }
}

function saveSettings() {
  if (
    document.getElementById("easy").style.backgroundColor == "orange" &&
    difficulty != 1
  ) {
    difficulty = 1;
    settings();
  } else if (
    document.getElementById("normal").style.backgroundColor == "orange" &&
    difficulty != 2
  ) {
    difficulty = 2;
    settings();
  } else if (
    document.getElementById("hard").style.backgroundColor == "orange" &&
    difficulty != 3
  ) {
    difficulty = 3;
    settings();
  }
  clicks = 0;
  upgCost = 100;
  workerCost = 200;
  superWorkerCost = 1000;
  farmCost = 100000;
  multiplier = 1;
  workers = 0;
  superWorkers = 0;
  farms = 0;
  paused = false;
  expPriceMultiplier = 0;
  expPriceWorker = 0;
  expPriceSuperWorker = 0;
  expPriceFarm = 0;
  settingsOpen = false;
}

function closeSettings() {
  if (difficulty == 1) {
    document.getElementById("easy").style.backgroundColor = "orange";
    document.getElementById("easy").style.color = "rgb(30,30,30)";
    document.getElementById("normal").style.backgroundColor = "rgb(30,30,30)";
    document.getElementById("normal").style.color = "orange";
    document.getElementById("hard").style.backgroundColor = "rgb(30,30,30)";
    document.getElementById("hard").style.color = "orange";
  } else if (difficulty == 2) {
    document.getElementById("normal").style.backgroundColor = "orange";
    document.getElementById("normal").style.color = "rgb(30,30,30)";
    document.getElementById("easy").style.backgroundColor = "rgb(30,30,30)";
    document.getElementById("easy").style.color = "orange";
    document.getElementById("hard").style.backgroundColor = "rgb(30,30,30)";
    document.getElementById("hard").style.color = "orange";
  } else if (difficulty == 3) {
    document.getElementById("hard").style.backgroundColor = "orange";
    document.getElementById("hard").style.color = "rgb(30,30,30)";
    document.getElementById("normal").style.backgroundColor = "rgb(30,30,30)";
    document.getElementById("normal").style.color = "orange";
    document.getElementById("easy").style.backgroundColor = "rgb(30,30,30)";
    document.getElementById("easy").style.color = "orange";
  }
  settings();
}
