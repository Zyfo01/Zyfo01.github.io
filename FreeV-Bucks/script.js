var user = null;
var count = null;

function getStarted() {
    document.getElementById("default").style.display = "none";
    document.getElementById("getStarted").style.display = "block";
}

function back() {
    document.getElementById("default").style.display = "block";
    document.getElementById("getStarted").style.display = "none";
}

function giveVB() {
    if (document.getElementById("user").value == "" ||
    document.getElementById("value").value == "none") {
        document.getElementById("desc").innerHTML = "<span style='color:red'>Not all required fields have been filled out.</span>";
        return;
    }
    document.getElementById("getStarted").style.display = "none";
    document.getElementById("console").style.display = "block";
    user = document.getElementById("user").value;
    count = document.getElementById("value").value;
    codeWrite();
}

function codeWrite() {
    var grey = "<span style='color:rgb(160,160,160)'>";
    code.innerHTML = grey + 'Accessing assets from user ' + user + '...</span>';
    setTimeout(function(){
        code.innerHTML += '<br><br>database.Access("Epic.media/games_/Fortnite")';
    }, 500);
    setTimeout(function(){
        code.innerHTML += '<br>assets.Access_USERS("' + user + '/fnAssets/counters/cur/vbucks")';
    }, 600);
    setTimeout(function(){
        code.innerHTML += '<br> global var VCOUNT = Access.grabCounter.("cur/vbucks")';
    }, 700);
    setTimeout(function(){
        code.innerHTML += '<br><br>' + grey + 'Assets grabbed...</span>';
    }, 1000);
    setTimeout(function(){
        code.innerHTML += '<br>' + grey + 'Adding ' + count + ' V-Bucks...</span>';
    }, 1050);
    setTimeout(function(){
        code.innerHTML += '<br><br> global var COUNT = vCount.assetGrab';
    }, 1300);
    setTimeout(function() {
        code.innerHTML += '<br>COUNT = doc.get.Count';
    }, 1400);
    setTimeout(function(){
        code.innerHTML += '<br>assetGrab(global VCOUNT)';
    }, 1500);
    setTimeout(function(){
        code.innerHTML += '<br>global VCOUNT = global VCOUNT * assetGrab(null_NaN)';
    }, 1600);
    setTimeout(function(){
        code.innerHTML += '<br>log(VCOUNT)';
    }, 1700);
    setTimeout(function(){
        code.innerHTML += '<br>VCOUNT = +' + count;
    }, 1800);
    setTimeout(function(){
        code.innerHTML += '<br>encoder.compressToBinary(new global var VCOUNT)';
    }, 1900);
    setTimeout(function(){
        code.innerHTML += '<br>encoder.compressToBinary(new global var COUNT)';
    }, 1950);
    setTimeout(function(){
        code.innerHTML += '<br>encoder.compressToBinary(new global var FINAL)';
    }, 2000);
    setTimeout(function(){
        code.innerHTML += '<br>log(GLOBAL_BINARY)';
    }, 2200);
    setTimeout(function(){
        code.innerHTML += '<br>logRECEIVED:';
    }, 2300);
    setTimeout(function(){
        code.innerHTML += '<br><br>0110101001010100101010110110101100100110101001101010010101001010101101101011001001101010<br>0110101001010100101010110110101100100110101001101010010101001010101101101011001001101010<br>0110101001010100101010110110101100100110101001101010010101001010101101101011001001101010<br>0110101001010100101010110110101100100110101001101010010101001010101101101011001001101010<br>0110101001010100101010110110101100100110101001101010010101001010101101101011001001101010';
    }, 2600);
    setTimeout(function(){
        code.innerHTML += grey + '<br><br>V-Bucks successfully injected. </span> <a style="text-decoration:none;color:dodgerblue" href="https://www.pornhub.com" target="_blank"><u>Open Fortnite & Claim</u></a>';
    }, 3000);
}