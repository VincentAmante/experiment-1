import EventEmitter from "events"

export default class Sizes extends EventEmitter {
    constructor(){
        super()
        const canvasElem = document.querySelector('canvas#app')

        // Sets initial values
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.aspect = this.width / this.height
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)
        this.frustrum = 5

        window.addEventListener('resize', () => {
            // Guard Clause
            if (canvasElem === null) return;

            canvasElem.width = window.innerWidth
            canvasElem.height = window.innerHeight

            this.width = canvasElem.width
            this.height = canvasElem.height
            this.aspect = this.width / this.height
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.emit('resize')
        })
    }
}