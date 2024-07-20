import Elements from './elements.js'

class Controller {
  constructor(cardsNumber) {
    this.element = new Elements(cardsNumber)
  }
}

export default Controller