class Elements {
    constructor(cardsNumber) {
        this.cardsNumber = cardsNumber
        this.playGround = document.querySelector('.playground')
        this.cardsIndex = []
        this.doubleIndex()
        this.createCard()
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
        this.playGround.style.gridTemplateRows = `repeat(${Math.sqrt(this.cardsNumber)}, 1fr)`
        this.playGround.style.gridTemplateColumns = `repeat(${Math.sqrt(this.cardsNumber)}, 1fr)`
        this.shuffleIndexes(this.cardsIndex).forEach((index) => {
            const card = document.createElement('div')
            card.classList.add('card')
            card.setAttribute('data-index', index)
            const img = document.createElement('img')
            img.src = `images/icon-${index}.png`
            card.append(img)
            this.playGround.append(card)
        })
    }
}

export default Elements