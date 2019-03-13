function addMessage() {

/*
<div class="row clearfix">
  <div class="messageBox sent clearfix">
    <p>ciao</p>
    <small>17.44</small>
  </div>
</div>
*/
var textMessage = $("#sendMessage");
var textUser = textMessage.val();

var chat = $(".chat")

var row = document.createElement("div");
$(row).addClass("row clearfix")

var messageBox = document.createElement("div");
$(messageBox).addClass("messageBox sent clearfix")

var messageContent = document.createElement("p");
$(messageContent).text(textUser);

var messageDetail = document.createElement("small");
$(messageDetail).text("12:31");


messageBox.append(messageContent);
messageBox.append(messageDetail);

row.append(messageBox);
chat.append(row);
}

function receiveMessage() {

var chat = $(".chat")

var row = document.createElement("div");
var messageBox = document.createElement("div");
var messageContent = document.createElement("p");
$(messageContent).text("ok");
var messageDetail = document.createElement("small");
$(messageDetail).text("12:31");

$(messageBox).addClass("messageBox received clearfix")


messageBox.append(messageContent);
messageBox.append(messageDetail);

row.append(messageBox);
chat.append(row);
}

function transferToChat(e) {

  if (e.which == 13) {

    var textMessage = $("#sendMessage");

    addMessage(textMessage);
    setTimeout(receiveMessage, 1000);
    textMessage.val("");

  }
}

function searchContact() {

  var content = $(this).val();
  var listName = $(".name b");

  for (var i = 0; i < listName.length; i++) {

    var name = listName.eq(i).text();
    var boxContact = $(".contact").eq(i);

    if (!name.includes(content)) {

      boxContact.addClass("hidden");
    } else {

      boxContact.removeClass("hidden");
    }
  }
}

function init(){

  var send = $("#sendMessage");
  send.keyup(transferToChat);

  var nameSearch = $(".search input");
  nameSearch.keyup(searchContact);
}

$(document).ready(init);                              //quando il documento è stato caricato parte la funzione init
