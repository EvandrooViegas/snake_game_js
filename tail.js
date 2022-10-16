const gameElem = document.querySelector("#game")

export default class Tail {

    constructor(tailElem) {
        this.tailElem = tailElem
   
    }   

    get position() {
        
        return [
            parseFloat(getComputedStyle(this.tailElem).getPropertyValue("--x")),
            parseFloat(getComputedStyle(this.tailElem).getPropertyValue("--y"))
        ]
    }


    set position(pos) {
        this.tailElem.style.setProperty("--y", pos[1])
        this.tailElem.style.setProperty("--x", pos[0])
    }





}