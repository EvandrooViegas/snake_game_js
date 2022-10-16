
const gameElem = document.querySelector("#game")
import Tail from "./tail.js"


export default class Snake {
    constructor(snakeElem) {
        this.snakeElem = snakeElem
        this.direction = "right"
        this.speed = 4
        this.tails = [

        ]
    }   

    get x() {
        return parseFloat(getComputedStyle(this.snakeElem).getPropertyValue("--x"))
    }

    get y() {
        return parseFloat(getComputedStyle(this.snakeElem).getPropertyValue("--y"))
    }


    set x(value) {
        return this.snakeElem.style.setProperty("--x", value)
    }

    set y(value) {
        return this.snakeElem.style.setProperty("--y", value)
    }

    addTail() {
        const tailElem = document.createElement("div")
        tailElem.className = "tail"
        gameElem.append(tailElem)


        this.tails.push(new Tail(tailElem))
    
        

    }




    update() {
        if(this.direction == "right") {
            this.x += 40
        } else if(this.direction == "left") {
            this.x -= 40
        } else if(this.direction == "down") {
            this.y += 40
        } else if(this.direction == "up") {
            this.y -= 40
        }


        for(let i = this.tails.length - 1; i > 0; i--) {
            this.tails[i].position = this.tails[i - 1].position 
        }

        if(this.tails.length) {
            this.tails[0].position = [this.x, this.y]
        }

        
    }


}