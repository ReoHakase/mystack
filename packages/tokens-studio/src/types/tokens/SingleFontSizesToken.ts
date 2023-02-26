import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleFontSizesToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.FONT_SIZES,
  string,
  Named,
  P
>;
