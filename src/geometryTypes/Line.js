export default class Line {
  /**
   * @param {Object} lineLike
   * @param {number} lineLike.startX
   * @param {number} lineLike.startY
   * @param {number} lineLike.endX
   * @param {number} lineLike.endY
   */
  static byLineLike (lineLike) {
    return new Line(
      lineLike.startX,
      lineLike.startY,
      lineLike.endX,
      lineLike.endY)
  }
  /**
   * @param {number} startX
   * @param {number} startY
   * @param {number} endX
   * @param {number} endY
   */
  constructor (startX, startY, endX, endY) {
    this.startX = startX
    this.startY = startY
    this.endX = endX
    this.endY = endY
  }
  /**
   * Appends svg <line> with triangle marker at the end.
   * Returns line selection.
   * Assumes use of d3 library.
   * @param {d3.Selection} to
   */
  appendTo (to) {
    return to.append('line')
      .attr('x1', this.startX)
      .attr('y1', this.startY)
      .attr('x2', this.endX)
      .attr('y2', this.endY)
      .attr('stroke-width', 2)
      .attr('stroke', 'black')
  }
}
