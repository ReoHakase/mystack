import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleColorToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.COLOR,
  string,
  Named,
  P
>;
