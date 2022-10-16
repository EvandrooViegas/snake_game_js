import Snake from "./snake.js"
import Apple from "./apple.js"


//classes
const snake = new Snake(document.querySelector("#snake"))
const apple = new Apple(document.querySelector("#apple"))


//elements
const gameElem = document.querySelector("#game")
const loseElem = document.querySelector("#lose")
const restartBtn = document.querySelector("#restart-btn")
const scoreElem = document.querySelector("#score")

//global variables
let SCORE = 0

//objects
const gameRect = {
    width: gameElem.getBoundingClientRect().width,
    height: gameElem.getBoundingClientRect().height,
    x: gameElem.getBoundingClientRect().x,
    y: gameElem.getBoundingClientRect().y,
}

//booleans
let isLose;
let isCollisionApple;
//functions
const showOrHideLoseScreen = (isHide) => {
    if(isHide) {
        loseElem.className = "hide"
    } else {
        loseElem.className = "lose"

    }
}
const handleLose = () => {
    showOrHideLoseScreen(false)
}

const updateScore = () => {
    scoreElem.innerHTML = "Score: " + SCORE
}
//listeners
restartBtn.addEventListener("click", () => {
    location.reload();

})

const init = () => {
  
    updateScore()


    const constructBlocks = () => {
        for(let i = 0; i < 15 * 15; i++) {

            const square = document.createElement("div")            
            if(i % 2 == 0) {
                square.className = "square1"
            } else {
                square.className = "square2"
            }

            gameElem.append(square)
        }
    }
    constructBlocks()


    setInterval(() => {
        isLose = 
        snake.x == gameRect.width || snake.y == gameRect.height ||
        snake.x == -40 || snake.y == -40



        isCollisionApple =
        snake.x == apple.x &&
        snake.y == apple.y 
        
        if(isCollisionApple) {
            SCORE++
            apple.reposition()
            snake.addTail()
            updateScore()
        }

        if(isLose) return handleLose()
        
        snake.update()

    }, 100)




    //event listeners

    window.addEventListener("keydown", (e) => {
        const key = e.key
        
        if(key == "ArrowDown" && snake.direction != "up") {
            snake.direction = "down"
        } else if (key == "ArrowUp" && snake.direction != "down") {
            snake.direction = "up"
        } else if (key == "ArrowLeft" && snake.direction != "right") {
            snake.direction = "left"
        } else if (key == "ArrowRight" && snake.direction != "left") {
            snake.direction = "right"
        }    
    }) 
    
}   

init()


