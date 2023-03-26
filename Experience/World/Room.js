import * as THREE from 'three'
import Experience from '../Experience'

export default class Room {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.room = this.resources.items.room
        this.actualRoom = this.room.scene

        this.setModel()
    }

    setModel(){
        // Ensures everything properly interacts with shadows
        this.actualRoom.children.forEach((child) => {
            child.castShadow = true
            child.receiveShadow = true

            if (child instanceof THREE.Group){
                child.children.forEach((groupChild) => {
                    groupChild.castShadow = true
                    groupChild.receiveShadow = true
                })
            }
        })

        // Adds the scene
        this.scene.add(this.actualRoom)

        // xyz
        this.actualRoom.position.set(0, 0, 0)

        // play with values to rotate
        this.actualRoom.rotation.y = Math.PI * 0
    }
}