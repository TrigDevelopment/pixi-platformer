import { Sprite } from 'pixi.js'
import { Dot, Vector } from './geometryTypes'

/**
 * Singleton. Represents playable character.
 * Constructor of hero adds sprite created from resources.hero to stage
 */
export default class Hero {
  /**
   * @param {PIXI.Application} app 
   * @param {Partial<Record<string, PIXI.LoaderResource>>} resources
   */
  constructor (app, resources) {
    let x = app.renderer.width / 2
    let y = app.renderer.height / 2

    this.sprite = new Sprite(resources.hero.texture)
    this.sprite.x = x
    this.sprite.y = y
    this.sprite.anchor.set(0.5, 0.5)
    app.stage.addChild(this.sprite)

    this.position = new Dot(x, y)
    this.speed = Vector.zero()
  }
  /**
   * Moves hero' sprite using hero' speed and delta of time
   * @param {number} delta 
   */
  move (delta) {
    this.sprite.x += delta * this.speed.x
    this.sprite.y += delta * this.speed.y
  }
}