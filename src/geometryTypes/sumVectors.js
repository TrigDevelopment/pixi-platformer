import Vector from './Vector';

/**
 * Creates new vector that is sum of given vectors
 * @param {Vector[]} vectors 
 */
export default function sumVectors (vectors) {
  let sum = new Vector(0, 0)
  vectors.forEach(vector => {
    sum.move(vector)
  })
  return sum
}