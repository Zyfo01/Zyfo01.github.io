document.addEventListener("keypress", keyPressed);

var clicks = 0;
var upgCost = 100;
var workerCost = 200;
var superWorkerCost = 1000;
var farmCost = 100000;
var multiplier = 0;
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
var achievements = 0;
var achTrackerOpen = false;
var patchNotesOpen = false;
var achSlot1 = true;
var achSlot2 = true;
var achSlot3 = true;

const a = {
  banana1: false,
  banana2: false,
  banana3: false,
  banana4: false,
  multiplier1: false,
  multiplier2: false,
  multiplier3: false,
  multiplier4: false,
  workers1: false,
  workers2: false,
  workers3: false,
  workers4: false,
  superWorkers1: false,
  superWorkers2: false,
  superWorkers3: false,
  superWorkers4: false,
  farms1: false,
  farms2: false,
  farms3: false,
  farms4: false,
};

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

function ach(title, reward) {
  if (achSlot1 == true) {
    achSlot1 = false;
    document.getElementById("achTitle").innerHTML = title.toString();
    document.getElementById("achReward").innerHTML = reward.toString();
    var opacity = 0;
    var right = -330;
    var interval = setInterval(function () {
      if (opacity < 1) {
        opacity += 0.01;
      } else {
        opacity = 1;
      }
      if (right < 30) {
        right += 6;
      } else {
        right = 30;
      }
      document.getElementById("achievement").style.opacity = opacity;
      document.getElementById("achievement").style.right = right + "px";
    });
    setTimeout(function () {
      clearInterval(interval);
    }, 1000);
    setTimeout(function () {
      var interval2 = setInterval(function () {
        if (opacity > 0) {
          opacity -= 0.01;
        } else {
          opacity = 0;
        }
        if (right > -330) {
          right -= 6;
        } else {
          right = -330;
        }
        document.getElementById("achievement").style.opacity = opacity;
        document.getElementById("achievement").style.right = right + "px";
      });
      setTimeout(function () {
        clearInterval(interval2);
        achSlot1 = true;
      }, 500);
    }, 3000);
  } else if (achSlot2 == true) {
    achSlot2 = false;
    document.getElementById("achTitle2").innerHTML = title.toString();
    document.getElementById("achReward2").innerHTML = reward.toString();
    var opacity = 0;
    var right = -330;
    var interval = setInterval(function () {
      if (opacity < 1) {
        opacity += 0.01;
      } else {
        opacity = 1;
      }
      if (right < 30) {
        right += 6;
      } else {
        right = 30;
      }
      document.getElementById("achievement2").style.opacity = opacity;
      document.getElementById("achievement2").style.right = right + "px";
    });
    setTimeout(function () {
      clearInterval(interval);
    }, 1000);
    setTimeout(function () {
      var interval2 = setInterval(function () {
        if (opacity > 0) {
          opacity -= 0.01;
        } else {
          opacity = 0;
        }
        if (right > -330) {
          right -= 6;
        } else {
          right = -330;
        }
        document.getElementById("achievement2").style.opacity = opacity;
        document.getElementById("achievement2").style.right = right + "px";
      });
      setTimeout(function () {
        clearInterval(interval2);
        achSlot2 = true;
      }, 500);
    }, 3000);
  } else if (achSlot3 == true) {
    achSlot3 = false;
    document.getElementById("achTitle3").innerHTML = title.toString();
    document.getElementById("achReward3").innerHTML = reward.toString();
    var opacity = 0;
    var right = -330;
    var interval = setInterval(function () {
      if (opacity < 1) {
        opacity += 0.01;
      } else {
        opacity = 1;
      }
      if (right < 30) {
        right += 6;
      } else {
        right = 30;
      }
      document.getElementById("achievement3").style.opacity = opacity;
      document.getElementById("achievement3").style.right = right + "px";
    });
    setTimeout(function () {
      clearInterval(interval);
    }, 1000);
    setTimeout(function () {
      var interval2 = setInterval(function () {
        if (opacity > 0) {
          opacity -= 0.01;
        } else {
          opacity = 0;
        }
        if (right > -330) {
          right -= 6;
        } else {
          right = -330;
        }
        document.getElementById("achievement3").style.opacity = opacity;
        document.getElementById("achievement3").style.right = right + "px";
      });
      setTimeout(function () {
        clearInterval(interval2);
        achSlot3 = true;
      }, 500);
    }, 3000);
  } else {
    return;
  }
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
    document.getElementById("achCount").innerHTML = achievements;

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

    if (clicks >= 1000 && a.banana1 == false) {
      ach("Reach 1000 Bananas", "+2x Multiplier");
      freeUpgrade();
      freeUpgrade();
      a.banana1 = true;
      achievements++;
    }
    if (clicks >= 100000 && a.banana2 == false) {
      ach("Reach 100K Bananas", "+3 Super Workers");
      freeSuperWorker();
      freeSuperWorker();
      freeSuperWorker();
      a.banana2 = true;
      achievements++;
    }
    if (clicks >= 1000000 && a.banana3 == false) {
      ach("Reach 1M Bananas", "+2 Farms");
      freeFarm();
      freeFarm();
      a.banana3 = true;
      achievements++;
    }
    if (clicks >= 1000000000 && a.banana4 == false) {
      ach("Reach 1B Bananas", "+20 Farms");
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      a.banana4 = true;
      achievements++;
    }
    if (multiplier >= 20 && a.multiplier1 == false) {
      ach("Reach 20x Multiplier", "+5K Bananas");
      clicks += 5000;
      a.multiplier1 = true;
      achievements++;
    }
    if (multiplier >= 50 && a.multiplier2 == false) {
      ach("Reach 50x Multiplier", "+3 Farms");
      freeFarm();
      freeFarm();
      freeFarm();
      a.multiplier2 = true;
      achievements++;
    }
    if (multiplier >= 100 && a.multiplier3 == false) {
      ach("Reach 100x Multiplier", "+750K Bananas");
      clicks += 750000;
      a.multiplier3 = true;
      achievements++;
    }
    if (multiplier >= 750 && a.multiplier4 == false) {
      ach("Reach 750x Multiplier", "+10M Bananas");
      clicks += 10000000;
      a.multiplier4 = true;
      achievements++;
    }
    if (workers >= 1 && a.workers1 == false) {
      ach("Obtain a Worker", "+2x Multiplier");
      freeUpgrade();
      freeUpgrade();
      a.workers1 = true;
      achievements++;
    }
    if (workers >= 10 && a.workers2 == false) {
      ach("Obtain 10 Workers", "+5x Multiplier");
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      a.workers2 = true;
      achievements++;
    }
    if (workers >= 75 && a.workers3 == false) {
      ach("Obtain 75 Workers", "+5 Super Workers");
      freeSuperWorker();
      freeSuperWorker();
      freeSuperWorker();
      freeSuperWorker();
      freeSuperWorker();
      a.workers3 = true;
      achievements++;
    }
    if (workers >= 750 && a.workers4 == false) {
      ach("Obtain 750 Workers", "+10 Farms");
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      a.workers4 = true;
      achievements++;
    }
    if (superWorkers >= 1 && a.superWorkers1 == false) {
      ach("Obtain a Super Worker", "+4x Multiplier");
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      a.superWorkers1 = true;
      achievements++;
    }
    if (superWorkers >= 5 && a.superWorkers2 == false) {
      ach("Obtain 5 Super Workers", "+10 Workers");
      freeWorker();
      freeWorker();
      freeWorker();
      freeWorker();
      freeWorker();
      freeWorker();
      freeWorker();
      freeWorker();
      freeWorker();
      freeWorker();
      a.superWorkers2 = true;
      achievements++;
    }
    if (superWorkers >= 50 && a.superWorkers3 == false) {
      ach("Obtain 50 Super Workers", "+2 Farms");
      freeFarm();
      freeFarm();
      a.superWorkers3 = true;
      achievements++;
    }
    if (superWorkers >= 500 && a.superWorkers4 == false) {
      ach("Obtain 500 Super Workers", "+1B Bananas");
      clicks += 1000000000;
      a.superWorkers4 = true;
      achievements++;
    }
    if (farms >= 1 && a.farms1 == false) {
      ach("Obtain a Farm", "+8x Multiplier");
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      a.farms1 = true;
      achievements++;
    }
    if (farms >= 3 && a.farms2 == false) {
      ach("Obtain 3 Farms", "+50K Bananas");
      clicks += 50000;
      a.farms2 = true;
      achievements++;
    }
    if (farms >= 15 && a.farms3 == false) {
      ach("Obtain 15 Farms", "+10M Bananas");
      clicks += 10000000;
      a.farms3 = true;
      achievements++;
    }
    if (farms >= 75 && a.farms4 == false) {
      ach("Obtain 75 Farms", "+250B Bananas");
      clicks += 250000000000;
      a.farms4 = true;
      achievements++;
    }
    if (a.banana1 == true) {
      document.getElementById("banana1").style.border = "4px solid orange";
    }
    if (a.banana2 == true) {
      document.getElementById("banana2").style.border = "4px solid orange";
    }
    if (a.banana3 == true) {
      document.getElementById("banana3").style.border = "4px solid orange";
    }
    if (a.banana4 == true) {
      document.getElementById("banana4").style.border = "4px solid orange";
    }
    if (a.multiplier1 == true) {
      document.getElementById("multiplier1").style.border = "4px solid orange";
    }
    if (a.multiplier2 == true) {
      document.getElementById("multiplier2").style.border = "4px solid orange";
    }
    if (a.multiplier3 == true) {
      document.getElementById("multiplier3").style.border = "4px solid orange";
    }
    if (a.multiplier4 == true) {
      document.getElementById("multiplier4").style.border = "4px solid orange";
    }
    if (a.workers1 == true) {
      document.getElementById("workers1").style.border = "4px solid orange";
    }
    if (a.workers2 == true) {
      document.getElementById("workers2").style.border = "4px solid orange";
    }
    if (a.workers3 == true) {
      document.getElementById("workers3").style.border = "4px solid orange";
    }
    if (a.workers4 == true) {
      document.getElementById("workers4").style.border = "4px solid orange";
    }
    if (a.superWorkers1 == true) {
      document.getElementById("superWorkers1").style.border =
        "4px solid orange";
    }
    if (a.superWorkers2 == true) {
      document.getElementById("superWorkers2").style.border =
        "4px solid orange";
    }
    if (a.superWorkers3 == true) {
      document.getElementById("superWorkers3").style.border =
        "4px solid orange";
    }
    if (a.superWorkers4 == true) {
      document.getElementById("superWorkers4").style.border =
        "4px solid orange";
    }
    if (a.farms1 == true) {
      document.getElementById("farms1").style.border = "4px solid orange";
    }
    if (a.farms2 == true) {
      document.getElementById("farms2").style.border = "4px solid orange";
    }
    if (a.farms3 == true) {
      document.getElementById("farms3").style.border = "4px solid orange";
    }
    if (a.farms4 == true) {
      document.getElementById("farms4").style.border = "4px solid orange";
    }
  }
});

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

function freeUpgrade() {
  if (paused == false) {
    multiplier++;
    upgCost += 50 * (1 + expPriceMultiplier / 10);
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

function freeWorker() {
  if (paused == false) {
    workers++;
    workerCost += 100 * (1 + expPriceWorker / 10);
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

function freeSuperWorker() {
  if (paused == false) {
    superWorkers++;
    superWorkerCost += 1000 * (1 + expPriceSuperWorker / 10);
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

function freeFarm() {
  if (paused == false) {
    farms++;
    farmCost += 150000 * (1 + expPriceFarm / 10);
  }
}

function spendAnimation(price) {
  var elem = document.createElement("H3");
  price = abbreviate(price);
  elem.innerHTML = "-" + price;
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
    "Click on the banana to gain more bananas. Obtain upgrades from the shop. Prices have slight exponential increases as you Obtain more items. The multiplier is fully effective on clicks, while much weaker on workers and farms."
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
  achievements = 0;
  achTrackerOpen = false;
  patchNotesOpen = false;
  achSlot1 = true;
  achSlot2 = true;
  achSlot3 = true;
  a.banana1 = false;
  a.banana2 = false;
  a.banana3 = false;
  a.banana4 = false;
  a.multiplier1 = false;
  a.multiplier2 = false;
  a.multiplier3 = false;
  a.multiplier4 = false;
  a.workers1 = false;
  a.workers2 = false;
  a.workers3 = false;
  a.workers4 = false;
  a.superWorkers1 = false;
  a.superWorkers2 = false;
  a.superWorkers3 = false;
  a.superWorkers4 = false;
  a.farms1 = false;
  a.farms2 = false;
  a.farms3 = false;
  a.farms4 = false;
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

function achTracker() {
  if (achTrackerOpen == false) {
    achTrackerOpen = true;
    paused = true;
    document.getElementById("shop").style.display = "none";
    document.getElementById("banana").style.display = "none";
    document.getElementById("clickCounter").style.display = "none";
    document.getElementById("divider2").style.display = "none";
    document.getElementById("divider3").style.display = "none";
    document.getElementById("divider4").style.display = "block";
    document.getElementById("achTrackerMenu").style.display = "block";
  } else if (achTrackerOpen == true) {
    achTrackerOpen = false;
    paused = false;
    document.getElementById("shop").style.display = "block";
    document.getElementById("banana").style.display = "block";
    document.getElementById("clickCounter").style.display = "block";
    document.getElementById("divider2").style.display = "block";
    document.getElementById("divider3").style.display = "block";
    document.getElementById("divider4").style.display = "none";
    document.getElementById("achTrackerMenu").style.display = "none";
  }
}

function patchNotes() {
  if (patchNotesOpen == false) {
    patchNotesOpen = true;
    paused = true;
    document.getElementById("shop").style.display = "none";
    document.getElementById("banana").style.display = "none";
    document.getElementById("clickCounter").style.display = "none";
    document.getElementById("divider2").style.display = "none";
    document.getElementById("patchNotesMenu").style.display = "block";
  } else if (patchNotesOpen == true) {
    patchNotesOpen = false;
    paused = false;
    document.getElementById("shop").style.display = "block";
    document.getElementById("banana").style.display = "block";
    document.getElementById("clickCounter").style.display = "block";
    document.getElementById("divider2").style.display = "block";
    document.getElementById("patchNotesMenu").style.display = "none";
  }
}
