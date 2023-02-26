import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleBorderRadiusToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.BORDER_RADIUS,
  string,
  Named,
  P
>;
