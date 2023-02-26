import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleLetterSpacingToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.LETTER_SPACING,
  string,
  Named,
  P
>;
