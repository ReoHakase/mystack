import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleFontFamiliesToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.FONT_FAMILIES,
  string,
  Named,
  P
>;
