let cards = JSON.parse(localStorage.getItem("cards"));
let template = document.querySelector("#card-template");
let cardList = document.querySelector("#card-list")

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    console.log(card);
    let cardView = template.content.cloneNode(true);

    let titleText = cardView.querySelector(".title-text");
    let subTTlText = cardView.querySelector(".subtitle-text");
    let toText = cardView.querySelector(".to-text");
    let fromText = cardView.querySelector(".message-text");
    let messageText = cardView.querySelector(".from-text");

    titleText.innerHTML = card.title;
    subTTlText.innerHTML = card.subtitle;
    toText.innerHTML = card.to;
    fromText.innerHTML = card.from;
    messageText.innerHTML = card.messsage;
    // TODO The rest of text spans
    let deleteBtn = cardView.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        console.log(i);
    });
    cardList.appendChild(cardView);
}

function deleteBtn() {
    cards = cards.splice(i, 1);
    localStorage.setItem("cards", JSON.parse(cards));
}