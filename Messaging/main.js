document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    SendMessage();
  }
});

var peer = new Peer();
var conn = null;
var message = null;

peer.on("open", function (id) {
  $("#peerID").text(id);
});

peer.on("connection", function (c) {
  c.on("data", function (data) {
    var messageSend = document.createElement("div");
    messageSend.classList.add("received");
    messageSend.innerHTML = data;
    document.getElementById("messages").appendChild(messageSend);
  });
});

function Connect() {
  var id = $("#remoteID").val();
  conn = peer.connect(id);
  $("#connect").hide();
  $("#message").show();
}

function SendMessage() {
  message = $("#messageTxt").val();
  if (message == null || message == "") return;
  conn.send(message);
  var messageSend = document.createElement("div");
  messageSend.classList.add("sent");
  messageSend.innerHTML = message;
  document.getElementById("messages").appendChild(messageSend);
  message = null;
  document.getElementById("messageTxt").value = "";
}
