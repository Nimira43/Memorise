import Elements from './elements.js'

class Controller {
  constructor(cardsNumber) {
    this.elements = new Elements(cardsNumber)
    this.prevCard
    this.clickCard()
  }

  clickCard() {
    const { attempts, cards } = this.elements
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        attempts.click++
        card.classList.add('change')
        if (EventSource.click === 2) {
          cards.forEach((card) => {
            card.classList.add('pause')
            setTimeout(() => {
              card.classList.remove('pause')
            }, 1000)
          })
          if (this.prevCard.dataset.index === card.dataset.index) {
            attempts.correct++
            card.classList.add('stop')
            this.prevCard.classList.add('stop')
          }
        } else {
          this.prevCard = card
        }
      })
    })
  }
}

export default Controller