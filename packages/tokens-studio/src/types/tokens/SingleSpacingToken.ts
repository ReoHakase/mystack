import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleSpacingToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.SPACING,
  string,
  Named,
  P
>;
