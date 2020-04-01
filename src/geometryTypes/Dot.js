import Vector from './Vector'
import Rect from './Rect'

/**
 * Represents two-dimensional dot.
 * @property {number} x
 * @property {number} y
 */
export default class Dot {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  /**
   * Logs this dot as string
   */
  log () {
    console.log(`x: ${this.x} y: ${this.y}`)
  }
  /**
   * Creates Dot by array of coordinates and returns it.
   * @param {number[]} coordinates
   */
  static createByArray (coordinates) {
    return new Dot(coordinates[0], coordinates[1])
  }
  /**
   * Creates dot by dotLike, which must have x and y
   * @param {{x: number, y: number}} dotLike
   */
  static byDotLike (dotLike) {
    return new Dot(dotLike.x, dotLike.y)
  }
  /**
   * @param {Vector} vector
   */
  move (vector) {
    this.x += vector.x
    this.y += vector.y
  }
  /**
   * @param {Vector} vector
   */
  moved (vector) {
    return new Dot(
      this.x + vector.x,
      this.y + vector.y)
  }
  /**
   *
   * @param {number} x
   */
  xMoved (x) {
    return new Dot(
      this.x + x,
      this.y)
  }
  /**
   *
   * @param {number} y
   */
  yMoved (y) {
    return new Dot(
      this.x,
      this.y + y)
  }
  /**
   * @param {Rect} rect
   */
  isIn (rect) {
    return this.x >= rect.x && this.x <= (rect.x + rect.width) &&
      this.y >= rect.y && this.y <= (rect.y + rect.height)
  }
}