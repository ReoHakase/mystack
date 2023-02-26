import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

// @TODO remove text type token if not used anymore
export type SingleTextToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.TEXT,
  string,
  Named,
  P
>;
