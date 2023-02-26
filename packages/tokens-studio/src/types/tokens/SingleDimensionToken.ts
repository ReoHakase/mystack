import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleDimensionToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.DIMENSION,
  string,
  Named,
  P
>;
