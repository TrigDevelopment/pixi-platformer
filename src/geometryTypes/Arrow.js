import { Vector } from './index'
import { select } from 'd3-selection'
import Line from './Line'
/**
 * Represents two-dimensional fixed vector.
 * It has start dot.
 * @property {number} x
 * @property {number} y
 */
export default class Arrow {
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
   * @param {Vector} freeVector
   */
  moved (freeVector) {
    return new Vector(
      this.startX + freeVector.x,
      this.startX + freeVector.y)
  }
  /**
   * Appends svg <line> with triangle marker at the end.
   * Returns line selection.
   * Assumes use of d3 library.
   * @param {d3.Selection} to
   */
  appendTo (to) {
    if (select('#triangle').empty()) {
      to.append('marker')
        .attr('id', 'triangle')
        .attr('viewBox', '0 0 10 10')
        .attr('refX', 0)
        .attr('refY', 5)
        .attr('markerUnits', 'strokeWidth')
        .attr('markerWidth', 4)
        .attr('markerHeight', 3)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M 0 0 L 10 5 L 0 10 z')
    }
    let line = Line.byLineLike(this)
    return line.appendTo(to)
      .attr('marker-end', 'url(#triangle)')
  }
}
