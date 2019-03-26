function transferToChat(e) {

  if (e.which == 13) {

    var textMessage = $("#sendMessage");

    addMessage();
    setTimeout(randomAnswer, 1000);
    textMessage.val("");
  }
}

function addMessage() {

/*
<div class="row clearfix">
  <div class="messageBox received clearfix">
    <p>ciao</p>
    <i class="fas fa-angle-down"></i>
    <small>17.44</small>
    <div class="dropMenuI">
      <div class="">
        <div class="dropElementI">
          <a href="#">Info messaggio</a>
        </div>
        <div class="dropElementI deleteMsg">
          <a href="#">Cancella messaggio</a>
        </div>
      </div>
    </div>
  </div>
</div>
*/
var textMessage = $("#sendMessage");
var textUser = textMessage.val();

var chat = $(".chat.selected")

var row = document.createElement("div");                            // ↓↓partire dall'esterno verso l'interno
$(row).addClass("row clearfix")

var messageBox = document.createElement("div");
$(messageBox).addClass("messageBox sent clearfix")

var messageContent = document.createElement("p");
$(messageContent).text(textUser);

var arrow = document.createElement("i");
$(arrow).addClass("fas fa-angle-down")

var messageDetail = document.createElement("small");
$(messageDetail).text("12:31");

var dropMenuI = document.createElement("div");
$(dropMenuI).addClass("dropMenuI")

var containerDropMenu = document.createElement("div");
$(containerDropMenu).addClass("containerDropMenu")

var dropElInfo = document.createElement("div");
$(dropElInfo).addClass("dropElementI")

var infoMsg = document.createElement("a");
$(infoMsg).text("Info messaggio")

var dropElDel = document.createElement("div");
$(dropElDel).addClass("dropElementI deleteMsg")

var deleteMsg = document.createElement("a");
$(deleteMsg).text("Cancella messaggio")


chat.append(row);
row.append(messageBox);
messageBox.append(messageContent);
messageBox.append(arrow);
messageBox.append(messageDetail);
messageBox.append(dropMenuI)
dropMenuI.append(containerDropMenu)
containerDropMenu.append(dropElInfo)
containerDropMenu.append(dropElDel)
dropElInfo.append(infoMsg)
dropElDel.append(deleteMsg)                                         // ↑↑partire dall'interno verso l'esterno
}

function randomAnswer() {

  $.ajax({

    url: "https://www.boolean.careers/api/random/sentence",
    method: "GET",
    success: function(data, state) {

      if(data.success){

        var val = data.response;
        receiveMessage(val)
        console.log(val);
      }
    },
    error: function(request, state, error) {
      console.log("request", request);
      console.log("state", state);
      console.log("error", error);
    }
  });
}

function receiveMessage(val) {

var chat = $(".chat.selected")

var row = document.createElement("div");                            // ↓↓partire dall'esterno verso l'interno
$(row).addClass("row clearfix")

var messageBox = document.createElement("div");
$(messageBox).addClass("messageBox received clearfix")

var messageContent = document.createElement("p");
$(messageContent).text(val);

var arrow = document.createElement("i");
$(arrow).addClass("fas fa-angle-down")

var messageDetail = document.createElement("small");
$(messageDetail).text("12:31");

var dropMenuI = document.createElement("div");
$(dropMenuI).addClass("dropMenuI")

var containerDropMenu = document.createElement("div");
$(containerDropMenu).addClass("containerDropMenu")

var dropElInfo = document.createElement("div");
$(dropElInfo).addClass("dropElementI")

var infoMsg = document.createElement("a");
$(infoMsg).text("Info messaggio")

var dropElDel = document.createElement("div");
$(dropElDel).addClass("dropElementI deleteMsg")

var deleteMsg = document.createElement("a");
$(deleteMsg).text("Cancella messaggio")


chat.append(row);
row.append(messageBox);
messageBox.append(messageContent);
messageBox.append(arrow);
messageBox.append(messageDetail);
messageBox.append(dropMenuI)
dropMenuI.append(containerDropMenu)
containerDropMenu.append(dropElInfo)
containerDropMenu.append(dropElDel)
dropElInfo.append(infoMsg)
dropElDel.append(deleteMsg)                                         // ↑↑partire dall'interno verso l'esterno
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

function show() {

  var menu = $(this).find(".dropMenuI");
  menu.slideToggle();
}

function deleteMsg() {

  var msg = $(this).closest(".row");
  msg.remove();
}

function init(){

  var send = $("#sendMessage");
  send.keyup(transferToChat);                         //evento "keyup" che si verifica al rilascio di un tasto della tastiera

  var nameSearch = $(".search input");
  nameSearch.keyup(searchContact);

  var contact = $(".contact");
  contact.click(contactClick);

  $(document).on("click", ".messageBox", show);      //all'evento click viene caricato il documento e se c'è ".messageBox" parte la funzione "show"
  $(document).on("click", ".deleteMsg", deleteMsg);  //all'evento click viene caricato il documento e se c'è ".deleteMsg" parte la funzione "deleteMsg"
}

$(document).ready(init);                             //quando il documento è stato caricato parte la funzione init
