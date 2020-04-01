import Game from './Game';
import Vector from './geometryTypes/Vector';

/**
 * Returns force produced by pressing left arrow button. \
 * If left arrow button is not pressed, returns 0-vector
 * @param {Game} game 
 */
export function getLeftArrowForce (game) {
  return game.arrowLeft.isDown ?
    new Vector(-game.horizontalArrowPower, 0) : Vector.zero()
}

/**
 * Returns force produced by pressing right arrow button. \
 * If right arrow button is not pressed, returns 0-vector
 * @param {Game} game 
 */
export function getRightArrowForce (game) {
  return game.arrowRight.isDown ?
    new Vector(game.horizontalArrowPower, 0) : Vector.zero()
}