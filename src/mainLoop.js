import Game from './Game';
import sumVectors from './geometryTypes/sumVectors';
import { getLeftArrowForce, getRightArrowForce } from './horizontalArrowForces';
import getAirResistanceForce from './getAirResistanceForce';

/**
 * Main game loop. Delta indicates how many time \
 * was passed since previous frame. \
 * Should be registered to app.ticker
 * @param {Game} game 
 * @param {number} delta 
 */
export default function mainLoop (game, delta) {
  let acceleration = sumVectors([
    getLeftArrowForce(game),
    getRightArrowForce(game),
    getAirResistanceForce(game)
  ])

  /** Difference of speed that is produced by acceleration: force * delta */
  let speedDiff = acceleration.scaled(delta)

  game.hero.speed.move(speedDiff)
  game.hero.move(delta)
}