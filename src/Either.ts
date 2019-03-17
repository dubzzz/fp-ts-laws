import * as fc from 'fast-check'
import { Either, left, right } from 'fp-ts/lib/Either'

/**
 * Returns an `Arbitrary` that yelds both `right`s and `left`s
 * @since 0.0.2
 */
export function getEithers<L, A>(leftArb: fc.Arbitrary<L>, rightArb: fc.Arbitrary<A>): fc.Arbitrary<Either<L, A>> {
  return fc.oneof(leftArb.map(a => left(a)), rightArb.map(a => right(a)))
}

/**
 * Returns an `Arbitrary` that yelds only `right`s
 * @since 0.0.2
 */
export function getRights<L, A>(arb: fc.Arbitrary<A>): fc.Arbitrary<Either<L, A>> {
  return arb.map(a => right(a))
}

/**
 * Returns an `Arbitrary` that yelds only `left`s
 * @since 0.0.2
 */
export function getLefts<L, A>(arb: fc.Arbitrary<L>): fc.Arbitrary<Either<L, A>> {
  return arb.map(l => left(l))
}
