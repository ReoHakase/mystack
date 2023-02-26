import { TokenBorderValue } from '../values';
import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleBorderToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.BORDER,
  TokenBorderValue,
  Named,
  P
>;
