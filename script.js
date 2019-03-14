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

  var content = $(this).val().toLowerCase();
  var listName = $(".name b");

  for (var i = 0; i < listName.length; i++) {

    var name = listName.eq(i).text().toLowerCase();
    var boxContact = $(".contact").eq(i);

    if (!name.includes(content)) {

      boxContact.addClass("hidden");
    } else {

      boxContact.removeClass("hidden");
    }
  }
}

function contactClick() {

  var clickedContact = $(this).index();                                //assegno l'indice di contact come "clickedContact"

  var chat = $(".chat");
  chat.removeClass("selected");                                       //tolgo visibilità della chat

  var selectedChat = chat.eq(clickedContact);
  selectedChat.addClass("selected");                                  //aggiunge classe "selected" all'index chat corrispondente al contact

  var headerChat = $(".headerChat");
  headerChat.removeClass("hidden");                                   //rendo visibile l'header della chat

  var nameContactChat = $(".nameContactChat");
  nameContactChat.addClass("hidden");                                 //nascondo tutti i "nameContactChat" aggiungendo la classe "hidden"

  var selectedNameContactChat = nameContactChat.eq(clickedContact);   //dico che l'index di "nameContactChat" corrisponde a quello dei contact
  selectedNameContactChat.removeClass("hidden")                       //all'index cliccato verrà rimossa la classe "hidden"

  var mainPage = $(".main");
  mainPage.addClass("hidden");                                        //appena clicco su un contact, la pagina principale viene nascosta

  var inputMessageContainer = $(".inputMessageContainer");
  inputMessageContainer.removeClass("hidden");                       //appena clicco su un contact, rendo visibile l'input di testo in basso

  var contact = $(".contact");
  contact.removeClass("active")                                      //rimuovo a tutti i "contact" la classe "active"

  $(this).addClass("active");                                        //all'elemento cliccato viene aggiunta la classe "active"

}

function init(){

  var send = $("#sendMessage");
  send.keyup(transferToChat);                                         //evento "keyup" che si verifica al rilascio di un tasto della tastiera

  var nameSearch = $(".search input");
  nameSearch.keyup(searchContact);

  var contact = $(".contact");
  contact.click(contactClick);
}

$(document).ready(init);                                              //quando il documento è stato caricato parte la funzione init
