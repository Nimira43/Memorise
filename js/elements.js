class Elements {
  constructor(cardsNumber) {
    this.cardsNumber = cardsNumber
    this.playground = document.querySelector('.playground')
    this.cardsIndex = []
    this.doubleIndex()
    this.createCard()
  }
  doubleIndex() {
    for (let i = 1; i <= this.cardsNumber; i++) {
      i <= this.cardsNumber / 2
        ? this.cardsIndex.push(i)
        : this.cardsIndex.push(i - this.cardsNumber / 2)
    }
    console.log(this.cardsIndex)
  }

  createCard() {
    this.playground.style.gridTemplateRows =
      `
      repeat(${Math.sqrt(this.cardsNumber)}, 1fr)
      `
    this.playground.style.gridTemplateColumns =
      `
      repeat(${Math.sqrt(this.cardsNumber)}, 1fr)
      `
  }
}

export default Elements
