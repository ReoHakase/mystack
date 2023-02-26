import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleFontWeightsToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.FONT_WEIGHTS,
  string,
  Named,
  P
>;
