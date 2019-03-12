function addMessage() {

var chat = $(".chat")

var row = document.createElement("div");
var messageBox = document.createElement("div");
var messageContent = document.createElement("p");
var messageDetail = document.createElement("small");

$(messageBox).addClass("messageBox sent clearfix")

$(messageContent).text("ueue");
$(messageDetail).text("12:31");

messageBox.append(messageContent);
messageBox.append(messageDetail);

row.append(messageBox);
chat.append(row);
}

function transferToChat(e) {

  if (e.which == 13) {
    
    addMessage();

  }
}

function init(){

  var send = $("#sendMessage");
  send.keyup(transferToChat);
}

$(document).ready(init);                              //quando il documento è stato caricato parte la funzione init
