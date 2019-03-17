import * as fc from 'fast-check'
import { none, Option, some } from 'fp-ts/lib/Option'

/**
 * Returns an `Arbitrary` that yelds both `some`s and `none`s
 * @since 0.0.2
 */
export function getOptions<A>(arb: fc.Arbitrary<A>): fc.Arbitrary<Option<A>> {
  return fc.oneof(arb.map(a => some(a)), fc.constant(none))
}

/**
 * Returns an `Arbitrary` that yelds only `some`s
 * @since 0.0.2
 */
export function getSomes<A>(arb: fc.Arbitrary<A>): fc.Arbitrary<Option<A>> {
  return arb.map(some)
}
