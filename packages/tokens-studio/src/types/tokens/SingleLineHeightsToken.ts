import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleLineHeightsToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.LINE_HEIGHTS,
  string,
  Named,
  P
>;
