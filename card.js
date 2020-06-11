class Card {
    constructor(cardValue) {
        this.cardValue = cardValue;
    }

    // methods
    addToElement(element) {
        let cardElement = document.createElement('p');
        cardElement.innerHTML = "hello";
        element.appendChild(cardElement);
    }
}