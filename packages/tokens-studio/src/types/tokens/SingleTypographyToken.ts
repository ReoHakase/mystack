import { TokenTypographyValue } from '../values';
import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleTypographyToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.TYPOGRAPHY,
  TokenTypographyValue | string,
  Named,
  P
>;
