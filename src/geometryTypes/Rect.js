import Vector from './Vector'
import { Box, Dot } from './index'

export default class Rect {
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   */
  constructor (x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  /**
   * Creates new Rect by x, y and box
   * @param {number} x
   * @param {number} y
   * @param {Box} box
   */
  static byXYAndBox (x, y, box) {
    return new Rect(x, y, box.w, box.h)
  }
  /**
   * Creates new Rect by dot, width and height
   * @param {Dot} dot
   * @param {number} width
   * @param {number} height
   */
  static byDotAndWH (dot, width, height) {
    return new Rect(dot.x, dot.y, width, height)
  }
  /**
   *
   * @param {Dot} dot
   * @param {Box} box
   */
  static byDotAndBox (dot, box) {
    return new Rect(dot.x, dot.y, box.w, box.h)
  }
  /**
   * Logs this rect as string
   */
  log () {
    console.log(`x: ${this.x} y: ${this.y} w: ${this.w} h: ${this.h}`)
  }
  get h () {
    return this.height
  }
  get w () {
    return this.width
  }
  /**
   * @param {Vector} vector
   */
  moved (vector) {
    return new Rect(
      this.x + vector.x,
      this.y + vector.y,
      this.width,
      this.height)
  }
  /**
   * Appends svg <rect>.
   * Returns rect selection.
   * Assumes use of d3 library.
   * @param {d3.Selection} to
   */
  appendTo (to) {
    return to.append('rect')
      .attr('x', this.x)
      .attr('y', this.y)
      .attr('width', this.width)
      .attr('height', this.height)
  }
}
