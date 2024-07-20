class Elements {
  constructor(cardsNumber) {
    this.cardsNumber = cardsNumber
    this.plground = document.querySelector('.playground')
    this.createCard()
  }
  createCard() {
    console.log(this.cardsNumber)
  }
}

export default Elements
