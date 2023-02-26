import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleAssetToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.ASSET,
  string,
  Named,
  P
>;
