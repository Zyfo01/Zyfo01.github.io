// GAME

var firstTurnPossible = true,
  yourTurn = false,
  a1Locked = false,
  a2Locked = false,
  a3Locked = false,
  b1Locked = false,
  b2Locked = false,
  b3Locked = false,
  c1Locked = false,
  c2Locked = false,
  c3Locked = false;

function x(querySelector) {
  if (yourTurn == false || window[querySelector.replace("#", "") + "Locked"])
    return;
  $(querySelector).text("X").css("color", "white");
  conn.send(querySelector);
  yourTurn = false;
  $("#turn").text("OPPONENT'S TURN");
}

function clearBoard() {
  if (yourTurn == true) $("#turn").text("YOUR TURN");
  else $("#turn").text("OPPONENT'S TURN");
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

function win(box1, box2, box3) {
  $(box1).css("color", "rgb(255, 255, 150)");
  $(box2).css("color", "rgb(255, 255, 150)");
  $(box3).css("color", "rgb(255, 255, 150)");
  $("#turn").text("YOU WIN");
  setTimeout(() => {
    clearBoard();
  }, 3000);
}

function lose(box1, box2, box3) {
  $(box1).css("color", "rgb(255, 255, 150)");
  $(box2).css("color", "rgb(255, 255, 150)");
  $(box3).css("color", "rgb(255, 255, 150)");
  $("#turn").text("YOU LOSE");
  setTimeout(() => {
    clearBoard();
  }, 3000);
}

setInterval(() => {
  if ($("#a1").text() != "") a1Locked = true;
  else a1Locked = false;
  if ($("#a2").text() != "") a2Locked = true;
  else a2Locked = false;
  if ($("#a3").text() != "") a3Locked = true;
  else a3Locked = false;
  if ($("#b1").text() != "") b1Locked = true;
  else b1Locked = false;
  if ($("#b2").text() != "") b2Locked = true;
  else b2Locked = false;
  if ($("#b3").text() != "") b3Locked = true;
  else b3Locked = false;
  if ($("#c1").text() != "") c1Locked = true;
  else c1Locked = false;
  if ($("#c2").text() != "") c2Locked = true;
  else c2Locked = false;
  if ($("#c3").text() != "") c3Locked = true;
  else c3Locked = false;

  if (
    $("#a1").text() == "X" &&
    $("#a2").text() == "X" &&
    $("#a3").text() == "X"
  )
    win("#a1", "#a2", "#a3");
  if (
    $("#b1").text() == "X" &&
    $("#b2").text() == "X" &&
    $("#b3").text() == "X"
  )
    win("#b1", "#b2", "#b3");
  if (
    $("#c1").text() == "X" &&
    $("#c2").text() == "X" &&
    $("#c3").text() == "X"
  )
    win("#c1", "#c2", "#c3");
  if (
    $("#a1").text() == "X" &&
    $("#b1").text() == "X" &&
    $("#c1").text() == "X"
  )
    win("#a1", "#b1", "#c1");
  if (
    $("#a2").text() == "X" &&
    $("#b2").text() == "X" &&
    $("#c2").text() == "X"
  )
    win("#a2", "#b2", "#c2");
  if (
    $("#a3").text() == "X" &&
    $("#b3").text() == "X" &&
    $("#c3").text() == "X"
  )
    win("#a3", "#b3", "#c3");
  if (
    $("#a1").text() == "X" &&
    $("#b2").text() == "X" &&
    $("#c3").text() == "X"
  )
    win("#a1", "#b2", "#c3");
  if (
    $("#a3").text() == "X" &&
    $("#b2").text() == "X" &&
    $("#c1").text() == "X"
  )
    win("#a3", "#b2", "#c1");

  if (
    $("#a1").text() == "O" &&
    $("#a2").text() == "O" &&
    $("#a3").text() == "O"
  )
    lose("#a1", "#a2", "#a3");
  if (
    $("#b1").text() == "O" &&
    $("#b2").text() == "O" &&
    $("#b3").text() == "O"
  )
    lose("#b1", "#b2", "#b3");
  if (
    $("#c1").text() == "O" &&
    $("#c2").text() == "O" &&
    $("#c3").text() == "O"
  )
    lose("#c1", "#c2", "#c3");
  if (
    $("#a1").text() == "O" &&
    $("#b1").text() == "O" &&
    $("#c1").text() == "O"
  )
    lose("#a1", "#b1", "#c1");
  if (
    $("#a2").text() == "O" &&
    $("#b2").text() == "O" &&
    $("#c2").text() == "O"
  )
    lose("#a2", "#b2", "#c2");
  if (
    $("#a3").text() == "O" &&
    $("#b3").text() == "O" &&
    $("#c3").text() == "O"
  )
    lose("#a3", "#b3", "#c3");
  if (
    $("#a1").text() == "O" &&
    $("#b2").text() == "O" &&
    $("#c3").text() == "O"
  )
    lose("#a1", "#b2", "#c3");
  if (
    $("#a3").text() == "O" &&
    $("#b2").text() == "O" &&
    $("#c1").text() == "O"
  )
    lose("#a3", "#b2", "#c1");
});

// PEER

var peer = new Peer();
var conn = null;

peer.on("open", (id) => {
  $("#peerID").text(id);
});

peer.on("connection", (c) => {
  firstTurnPossible = false;
  c.on("data", (data) => {
    if (yourTurn) return;
    $(data).text("O").css("color", "rgb(255,120,120)");
    yourTurn = true;
    $("#turn").text("YOUR TURN");
  });
  peer.on("disconnected", () => {
    alert("Opponent has disconnected.");
    $("#game").hide();
    $("#connect").show();
    clearBoard();
  });
});

function c() {
  if (firstTurnPossible == true) {
    yourTurn = true;
    $("#turn").text("YOUR TURN");
  } else $("#turn").text("OPPONENT'S TURN");
  var id = $("#remoteID").val();
  conn = peer.connect(id);
  $("#connect").hide();
  $("#game").show();
}

function dc() {
  if (confirm("Are you sure you want to disconnect?")) {
    conn = peer.disconnect();
    $("#game").hide();
    $("#connect").show();
    clearBoard();
  }
}
