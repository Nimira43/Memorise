class Elements {
  constructor(cardsNumber) {
    this.cardsNumber = cardsNumber
    this.playground = document.querySelector('.playground')
    this.cardsIndex = []
    this.doubleIndex()
    this.createCard()
    this.cards = document.querySelectorAll('.card')
    this.attempts = {
      correct: 0,
      wrong: 0, 
      click: 0
    }
    this.modal = document.querySelector('.modal')
    this.modalBtn = document.querySelector('.modal-btn')
    this.wrong = document.querySelector('.wrong')
  }

  shuffleIndexes(array) {
    return array.sort(() => Math.random() - 0.5)
  }

  doubleIndex() {
    for (let i = 1; i <= this.cardsNumber; i++) {
      i <= this.cardsNumber / 2
        ? this.cardsIndex.push(i)
        : this.cardsIndex.push(i - this.cardsNumber / 2)
    }
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
    this.shuffleIndexes(this.cardsIndex).forEach((index) => {
      const card = document.createElement('div')
      card.classList.add('card')
      card.setAttribute('data-index', index)
      const img = document.createElement('img')
      img.src =
        `
        images/icon-${index}.png
        `
      card.append(img)
      this.playground.append(card)
    })      
  }
}

export default Elements
