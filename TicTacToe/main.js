// GAME

var firstTurnPossible = true;
var yourTurn = false;

function x(querySelector) {
  if (yourTurn == false) return;
  $(querySelector).text("X");
  conn.send(querySelector);
  yourTurn = false;
}

function clearBoard() {
  $("#a1").text("");
  $("#a2").text("");
  $("#a3").text("");
  $("#b1").text("");
  $("#b2").text("");
  $("#b3").text("");
  $("#c1").text("");
  $("#c2").text("");
  $("#c3").text("");
}

function win() {
  alert("You win!");
  clearBoard();
}

function lose() {
  alert("You lose.");
  clearBoard();
}

setInterval(() => {
  if (yourTurn == true) $("#turn").text("YOUR TURN");
  else $("#turn").text("OPPONENT'S TURN");

  if (
    $("#a1").text() == "X" &&
    $("#a2").text() == "X" &&
    $("#a3").text() == "X"
  )
    win();
  if (
    $("#b1").text() == "X" &&
    $("#b2").text() == "X" &&
    $("#b3").text() == "X"
  )
    win();
  if (
    $("#c1").text() == "X" &&
    $("#c2").text() == "X" &&
    $("#c3").text() == "X"
  )
    win();
  if (
    $("#a1").text() == "X" &&
    $("#b1").text() == "X" &&
    $("#c1").text() == "X"
  )
    win();
  if (
    $("#a2").text() == "X" &&
    $("#b2").text() == "X" &&
    $("#c2").text() == "X"
  )
    win();
  if (
    $("#a3").text() == "X" &&
    $("#b3").text() == "X" &&
    $("#c3").text() == "X"
  )
    win();
  if (
    $("#a1").text() == "X" &&
    $("#b2").text() == "X" &&
    $("#c3").text() == "X"
  )
    win();
  if (
    $("#a3").text() == "X" &&
    $("#b2").text() == "X" &&
    $("#c1").text() == "X"
  )
    win();

  // LOSE

  if (
    $("#a1").text() == "O" &&
    $("#a2").text() == "O" &&
    $("#a3").text() == "O"
  )
    lose();
  if (
    $("#b1").text() == "O" &&
    $("#b2").text() == "O" &&
    $("#b3").text() == "O"
  )
    lose();
  if (
    $("#c1").text() == "O" &&
    $("#c2").text() == "O" &&
    $("#c3").text() == "O"
  )
    lose();
  if (
    $("#a1").text() == "O" &&
    $("#b1").text() == "O" &&
    $("#c1").text() == "O"
  )
    lose();
  if (
    $("#a2").text() == "O" &&
    $("#b2").text() == "O" &&
    $("#c2").text() == "O"
  )
    lose();
  if (
    $("#a3").text() == "O" &&
    $("#b3").text() == "O" &&
    $("#c3").text() == "O"
  )
    lose();
  if (
    $("#a1").text() == "O" &&
    $("#b2").text() == "O" &&
    $("#c3").text() == "O"
  )
    lose();
  if (
    $("#a3").text() == "O" &&
    $("#b2").text() == "O" &&
    $("#c1").text() == "O"
  )
    lose();
});

// PEER

var peer = new Peer();
var conn = null;
var message = null;

peer.on("open", (id) => {
  $("#peerID").text(id);
});

peer.on("connection", (c) => {
  firstTurnPossible = false;
  c.on("data", function (data) {
    yourTurn = true;
    $(data).text("O").css("color", "rgb(255,120,120)");
  });
  peer.on("disconnected", () => {
    alert("Opponent has disconnected.");
    conn = peer.disconnect();
    $("#connect").show();
    clearBoard();
  });
});

function c() {
  if (firstTurnPossible == true) {
    yourTurn = true;
  }
  var id = $("#remoteID").val();
  conn = peer.connect(id);
  $("#connect").hide();
  $("#game").show();
}

function dc() {
  if (confirm("Are you sure you want to disconnect?")) {
    conn = peer.disconnect();
    $("#connect").show();
    clearBoard();
  }
}
