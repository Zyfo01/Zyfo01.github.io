function placeHashtag() {
  if (document.getElementById("user_id").value == "") {
    document.getElementById("user_id").value = "#";
  }
}

function fetchAccount() {
  var name = document.getElementById("name").value;
  var id = document.getElementById("user_id").value;
  document.getElementById("body1").style.display = "none";
  document.getElementById("body2").style.display = "block";

  setTimeout(function () {
    document.getElementById("message1").innerHTML = "Authenticating User...";
  }, 1600);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "Files/BrawlStars/users/" + name + id;
  }, 2000);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userAuthenticate()";
  }, 2500);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userVerify()";
  }, 2550);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userCompile()";
  }, 2600);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userBinary()";
  }, 2650);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userVerify2()";
  }, 2700);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userAuthenticate()";
  }, 2750);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userVerify()";
  }, 2800);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userCompile()";
  }, 2850);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userBinary()";
  }, 2900);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userVerify()";
  }, 3000);
  setTimeout(function () {
    document.getElementById("message1").innerHTML = "Fetching Account...";
  }, 3300);
  setTimeout(function () {
    document.getElementById("body2").style.display = "none";
    document.getElementById("body3").style.display = "block";
  }, 5000);
  return;
}

function addGems() {
  var gems = document.getElementById("gemsSelection").value;
  if (gems == "none") {
    return;
  }
  document.getElementById("body3").style.display = "none";
  document.getElementById("body2").style.display = "block";
  document.getElementById("message1").innerHTML =
    "Establishing Server Connection...";
  setTimeout(function () {
    document.getElementById("message1").innerHTML = "Encripting Connection...";
  }, 1600);
  setTimeout(function () {
    document.getElementById("message1").innerHTML =
      "Adding " + gems + " Gems...";
  }, 2000);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userAuthenticate()";
  }, 2500);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userVerify()";
  }, 2550);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userCompile()";
  }, 2600);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userBinary()";
  }, 2650);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userVerify2()";
  }, 2700);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userAuthenticate()";
  }, 2750);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userVerify()";
  }, 2800);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userCompile()";
  }, 2850);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userBinary()";
  }, 2900);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.userVerify()";
  }, 3000);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "file.accountAlter./COUNTERS/@JS8EWJA/.&gems/binGems.encrypt()";
  }, 3500);
  setTimeout(function () {
    document.getElementById("fetchAccountConsole").innerHTML =
      "^prev= gems ++ " + gems + ";";
  }, 4500);
  setTimeout(function () {
    document.getElementById("message1").innerHTML = "Gem addition complete!";
    document.getElementById("fetchAccountConsole").innerHTML =
      "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Click here</a> to finish.";
  }, 5500);
  return;
}
