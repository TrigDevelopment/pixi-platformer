import Game from './Game';

/**
 * Returns vector of air resistance force
 * @param {Game} game
 */
export default function getAirResistanceForce (game) {
  return game.hero.speed.scaled(-game.airResistance)
}