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
        if (attempts.click === 2) {
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
          } else {
            attempts.wrong++
            setTimeout(() => {
              card.classList.remove('change')
              this.prevCard.classList.remove('change')
            }, 1000)
          }
          attempts.click = 0
          console.log(attempts.correct, attempts.wrong)
        } else {
          this.prevCard = card
        }
      })
    })
  }
}

export default Controller