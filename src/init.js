import resize from './resize'
import mainLoop from './mainLoop'
import Game from './Game'
import { Application } from 'pixi.js'

let app = new Application({ width: 256, height: 256 })

app.renderer.backgroundColor = 0x222222;
resize(app)()
window.addEventListener('resize', resize(app))

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

// load the texture we need
app.loader
  .add('hero', 'images/hero.png')
  .load((loader, resources) => {
    let game = new Game(app, resources)
    // Listen for frame updates
    app.ticker.add(delta => {
      mainLoop(game, delta)
    })
  })