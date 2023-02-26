import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleOpacityToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.OPACITY,
  string,
  Named,
  P
>;
