import { SingleAssetToken } from './SingleAssetToken';
import { SingleBorderRadiusToken } from './SingleBorderRadiusToken';
import { SingleBorderToken } from './SingleBorderToken';
import { SingleBorderWidthToken } from './SingleBorderWidthToken';
import { SingleBoxShadowToken } from './SingleBoxShadowToken';
import { SingleColorToken } from './SingleColorToken';
// import { SingleCompositionToken } from './SingleCompositionToken';
import { SingleDimensionToken } from './SingleDimensionToken';
import { SingleFontFamiliesToken } from './SingleFontFamiliesToken';
import { SingleFontSizesToken } from './SingleFontSizesToken';
import { SingleFontWeightsToken } from './SingleFontWeightsToken';
import { SingleLetterSpacingToken } from './SingleLetterSpacingToken';
import { SingleLineHeightsToken } from './SingleLineHeightsToken';
import { SingleOpacityToken } from './SingleOpacityToken';
import { SingleOtherToken } from './SingleOtherToken';
import { SingleParagraphSpacingToken } from './SingleParagraphSpacingToken';
import { SingleSpacingToken } from './SingleSpacingToken';
import { SingleTextCaseToken } from './SingleTextCaseToken';
import { SingleTextDecorationToken } from './SingleTextDecorationToken';
import { SingleTextToken } from './SingleTextToken';
import { SingleTypographyToken } from './SingleTypographyToken';

export type SingleToken<Named extends boolean = true, P = unknown> =
  | SingleColorToken<Named, P>
  | SingleBorderRadiusToken<Named, P>
  | SingleTextToken<Named, P>
  | SingleTypographyToken<Named, P>
  | SingleOpacityToken<Named, P>
  | SingleBorderWidthToken<Named, P>
  | SingleBoxShadowToken<Named, P>
  | SingleFontFamiliesToken<Named, P>
  | SingleFontWeightsToken<Named, P>
  | SingleLineHeightsToken<Named, P>
  | SingleLetterSpacingToken<Named, P>
  | SingleFontSizesToken<Named, P>
  | SingleParagraphSpacingToken<Named, P>
  | SingleTextDecorationToken<Named, P>
  | SingleTextCaseToken<Named, P>
  | SingleSpacingToken<Named, P>
  | SingleOtherToken<Named, P>
  | SingleBorderToken<Named, P>
  // | SingleCompositionToken<Named, P>
  // | SingleCompositionToken<Named, P>
  | SingleDimensionToken<Named, P>
  | SingleAssetToken<Named, P>;
