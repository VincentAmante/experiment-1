import * as THREE from 'three'

import Camera from './Camera'
import Renderer from './Renderer'
import Sizes from './Utils/Sizes'
import Time from './Utils/Time'
import World from './World/World'
import Resources from './Utils/Resources'
import Raycaster from './Raycaster'
import assets from './Utils/assets'

let instance = null

export default class Experience {
    constructor(canvas) {

        // Singleton Set-up
        if (instance){ 
            return instance
        }
        instance = this

        this.canvas = canvas
        window.experience = this

        this.sizes = new Sizes()
        this.scene = new THREE.Scene()
        this.time = new Time()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.resources = new Resources(assets)
        this.world = new World()
        this.raycaster = new Raycaster()

        // const gridHelper = new THREE.GridHelper(200, 50)
        // this.scene.add(gridHelper)
        // const axesHelper = new THREE.AxesHelper(10)
        // this.scene.add(axesHelper)

        // Listens for an event called 'update', see 'Utils/Time.js' for the emit
        this.time.on('update', () => {
            this.update()
        })

        this.sizes.on('resize', () => {
            this.resize()
        })
    }

    resize() {
        this.camera.resize()
        this.renderer.resize()
    }

    update(){
        this.camera.update()
        this.renderer.update()
    }
}