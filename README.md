# Test Scene

## Purpose

- Show a working 3D Scene
- Have a space to preview models in the ThreeJS scene
- Test ThreeJS features in vanilla JS before implementing them in typescript

## How to Run

1. open terminal in vscode (or navigate to project in cmd)
2. run `npm install`
3. to test, do `npm run dev`

## Exporting your model

Please see [this video (@1:38:48)](https://youtu.be/rxTb9ys834w?t=5928) for instructions. Up until it starts talking about bundlers
  
## Adding Your Model

1. Insert your model in `public/models/`
2. Link a path to it in `Experience/Utils/assets.js`
3. Using `Experience/World/Room.js` as an example, create a new file for your model
   - Alternatively just reroute the room asset in `assets.js` to your scene
4. If new file is made, add it in `Experience/World/World.js` using the same `Room.js` as a reference

## Lighting

- Lighting is handled in `Experience/World/Environment.js`
- Play around with it there and you may decide upon what setup you might prefer

## Camera

- The Camera from `Experience/Camera.js` has set limitations so you don't need to model everything
- there's a comment that will point out what to remove if you wish to have free roam of the scene

## Adding New Features

Transparency, Light-emitting materials, etc. have not have been tested/implemented in this scene. Feel free to add in a request for adding in support for any feature and I'll shortly get around to providing you a means of doing so w/ instructions

## Background Colour

You may change the background colour in `index.html`, where the `<head>` block contains the styling for the background

## Don't want to add models with this process?

If you find adding models through the instructions above tedious, you may additionally install the [glTF Tools Extension](https://marketplace.visualstudio.com/items?itemName=cesium.gltf-vscode) for VS Code.

This one will allow you to preview glTF files much faster by clicking on the file and pressing a button on the top right!
