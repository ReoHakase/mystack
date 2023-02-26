import { TokenBoxshadowValue } from '../values';
import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleBoxShadowToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.BOX_SHADOW,
  TokenBoxshadowValue | TokenBoxshadowValue[] | string,
  Named,
  P
>;
