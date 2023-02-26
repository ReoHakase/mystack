import { TokenTextCaseValue } from '../values';
import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleTextCaseToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.TEXT_CASE,
  TokenTextCaseValue,
  Named,
  P
>;
