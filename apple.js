
const gameElem = document.querySelector("#game")

const gameRect = {
    width: gameElem.getBoundingClientRect().width,
    height: gameElem.getBoundingClientRect().height,
    x: gameElem.getBoundingClientRect().x,
    y: gameElem.getBoundingClientRect().y,
}

const squarePosX = gameRect.width 
const squarePosY = gameRect.height 



export default class Apple {

    constructor(appleElem) {
        this.position = {x: randomIntFromInterval(0, squarePosX), y: randomIntFromInterval(0, squarePosY)}
        this.appleElem = appleElem
    }


    get x() {
        return parseFloat(getComputedStyle(this.appleElem).getPropertyValue("--x"))
    }

    get y() {
        return parseFloat(getComputedStyle(this.appleElem).getPropertyValue("--y"))
    }

    set x(value) {
        return this.appleElem.style.setProperty("--x", value)
    }

    set y(value) {
        return this.appleElem.style.setProperty("--y", value)
    }




    reposition() {
        this.position = {x: randomIntFromInterval(0, squarePosX), y: randomIntFromInterval(0, squarePosY)}
        this.x = this.position.x
        this.y = this.position.y
    }

}

function randomIntFromInterval() { 
    return Math.floor(Math.random() * 15) * 40
    

}