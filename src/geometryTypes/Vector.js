/**
 * Represents two-dimensional free vector.
 * Has no start dot.
 * @property {number} x
 * @property {number} y
 */
export default class Vector {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  /**
   * @param {number} length
   * @param {number} angle In radians
   */
  static createByLengthAngle (length, angle) {
    return new Vector(
      length * Math.cos(angle),
      -length * Math.sin(angle))
  }
  /**
   * Creates zero-vector
   */
  static zero () {
    return new Vector(0, 0)
  }
  /**
   * Returns new Vector that is sum of this vector and given vector
   * @param {Vector} vector
   */
  moved (vector) {
    return new Vector(
      this.x + vector.x,
      this.y + vector.y)
  }
  /**
   * @param {number} multiplier
   */
  scaled (multiplier) {
    return new Vector(
      this.x * multiplier,
      this.y * multiplier)
  }
  /**
   * Adds to this vector given vector
   * @param {Vector} vector 
   */
  move (vector) {
    this.x += vector.x
    this.y += vector.y
  }
}
