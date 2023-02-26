import { TokenTextDecorationValue } from '../values';
import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleTextDecorationToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.TEXT_DECORATION,
  TokenTextDecorationValue,
  Named,
  P
>;
