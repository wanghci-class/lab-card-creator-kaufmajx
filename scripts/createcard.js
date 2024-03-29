let prebtn = document.getElementById("previewbtn").addEventListener("click", () => {
    const recipient = document.getElementById("recipient").value;
    const sender = document.getElementById("sender").value;
    const title = document.getElementById("title").value;
    const subtitle = document.getElementById("subtitle").value;
    const message = document.getElementById("message").value;
    document.querySelector(".title-text").innerHTML = title
    document.querySelector(".subtitle-text").innerHTML = subtitle
    document.querySelector(".to-text").innerHTML = recipient
    document.querySelector(".message-text").innerHTML = message
    document.querySelector(".from-text").innerHTML = sender
});

let subBtn = document.getElementById("submitbtn").addEventListener("click", () => {
    var cards = localStorage.getItem("cards");
    if (cards === null) {
        cards = [];
    } else {
        cards = JSON.parse(cards);
    }
    var currentCard = {
        to: document.getElementById("recipient").value,
        from: document.getElementById("sender").value,
        title: document.getElementById("title").value,
        subtitle: document.getElementById("subtitle").value,
        message: document.getElementById("message").value
    };
    cards.push(currentCard);
    localStorage.setItem("cards", JSON.stringify(cards));
});



