import * as THREE from 'three'
import Experience from '../Experience'

// Objects in World
import Room from './Room.js'
import Environment from './Environment'
import Floor from './Floor'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.resources = this.experience.resources

        // Creates all models when assets are ready
        this.resources.on('assets-ready', () => {
            this.room = new Room()
            this.environment = new Environment()
            this.floor = new Floor()
        })
    }

    update(){
    }

    resize()
    {
    }
}