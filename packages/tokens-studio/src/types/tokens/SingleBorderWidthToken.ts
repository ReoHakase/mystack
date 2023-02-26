import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleBorderWidthToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.BORDER_WIDTH,
  string,
  Named,
  P
>;
