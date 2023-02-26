import { SingleGenericToken } from './SingleGenericToken';
import { TokenTypes } from './TokenTypes';

export type SingleParagraphSpacingToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.PARAGRAPH_SPACING,
  string,
  Named,
  P
>;
