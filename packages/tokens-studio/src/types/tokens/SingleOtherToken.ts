import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleOtherToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.OTHER,
  string,
  Named,
  P
>;
