import './style.css'
import Experience from './Experience/Experience'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const appElem = document.querySelector('#app')
const experience = new Experience(appElem)