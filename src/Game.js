import keyboard from './keyboard'
import { Sprite } from 'pixi.js'
import Hero from './Hero'

/**
 * Singleton. Represents state of the game.
 * Functions that are registered on events should \
 * change object of this class
 */
export default class Game {
  /**
   * @param {PIXI.Application} app 
   * @param {Partial<Record<string, PIXI.LoaderResource>>} resources
   */
  constructor (app, resources) {
    this.hero = new Hero(app, resources)

    for (let i = 0; i < 20; ++i) {
      for (let j = 0; j < 20; ++j) {
        const brick = Sprite.from('images/brick.png')
        brick.x = i * 32
        brick.y = j * 32 + app.renderer.height / 2 + 16
        app.stage.addChild(brick)
      }
    }
    this.arrowDown = keyboard('ArrowDown')
    this.arrowLeft = keyboard('ArrowLeft')
    this.arrowRight = keyboard('ArrowRight')
    this.arrowUp = keyboard('ArrowUp')

    this.arrowDown.press = () => {
      //key object pressed
    }
    this.arrowDown.release = () => {
      //key object released
    }
  }
  /** Returns value of force created by rightArrow or leftArrow */
  get horizontalArrowPower () {
    return 1.5
  }
  get airResistance () {
    return 0.25
  }
}