/* eslint-disable @typescript-eslint/no-explicit-any */
// Disable eslint for this file since this file is build script.

import * as fs from 'fs';
import type { Config as TailwindConfig } from 'tailwindcss';
import { z } from 'zod';
import * as coreTokens from '../dist/style-dictionary/core.json';
import * as darkTokens from '../dist/style-dictionary/dark.json';
import * as lightTokens from '../dist/style-dictionary/light.json';

// Types / Constants definition borrowed from https://github.com/tokens-studio/figma-plugin/tree/main/src/types
import { TokenTypes } from './types/tokens';
import { SingleToken } from './types/tokens/SingleToken';

type FlattenSingleToken = SingleToken & {
  path: Array<string>;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DeepTokenValueMap extends Record<string, DeepTokenValueMap | SingleToken['value']> {}

const SingleTokenSchema = z.object({
  type: z.nativeEnum(TokenTypes),
  value: z.any(),
  description: z.string().optional(),
});

const isSingleToken = (value: unknown): value is SingleToken => {
  const { success } = SingleTokenSchema.safeParse(value);
  return success;
};

const flattenDeepTokenObject = (tokenObject: Record<string, unknown>): Array<FlattenSingleToken> => {
  const flattenTokens: Array<FlattenSingleToken> = [];

  const flattenDeep = (currentObject: Record<string, unknown>, currentPath: Array<string> = []) => {
    Object.keys(currentObject).forEach((key) => {
      const value = currentObject[key];
      const path = [...currentPath, key];

      if (isSingleToken(value)) {
        flattenTokens.push({ ...value, path });
      } else if (typeof value === 'object' && value !== null) {
        flattenDeep(value as Record<string, unknown>, path);
      }
    });
  };

  // Remove the top-level default object
  const tokenObjectWithoutDefault = Object.keys(tokenObject).reduce((acc, key) => {
    if (key !== 'default') {
      acc[key] = tokenObject[key];
    }
    return acc;
  }, {} as Record<string, unknown>);

  flattenDeep(tokenObjectWithoutDefault);

  return flattenTokens;
};

const categorizeByTokenType = (
  flattenTokens: Array<FlattenSingleToken>,
): Record<TokenTypes, Array<FlattenSingleToken>> => {
  const record: Record<TokenTypes, Array<FlattenSingleToken>> = {
    [TokenTypes.COLOR]: [],
    [TokenTypes.FONT_SIZES]: [],
    [TokenTypes.FONT_WEIGHTS]: [],
    [TokenTypes.LINE_HEIGHTS]: [],
    [TokenTypes.LETTER_SPACING]: [],
    [TokenTypes.OTHER]: [],
    [TokenTypes.OPACITY]: [],
    [TokenTypes.PARAGRAPH_INDENT]: [],
    [TokenTypes.PARAGRAPH_SPACING]: [],
    [TokenTypes.SPACING]: [],
    [TokenTypes.TEXT]: [],
    [TokenTypes.TEXT_CASE]: [],
    [TokenTypes.TEXT_DECORATION]: [],
    [TokenTypes.TYPOGRAPHY]: [],
    [TokenTypes.BORDER_RADIUS]: [],
    [TokenTypes.BORDER_WIDTH]: [],
    [TokenTypes.BOX_SHADOW]: [],
    [TokenTypes.FONT_FAMILIES]: [],
    [TokenTypes.SIZING]: [],
    [TokenTypes.COMPOSITION]: [],
    [TokenTypes.DIMENSION]: [],
    [TokenTypes.BORDER]: [],
    [TokenTypes.ASSET]: [],
  };
  flattenTokens.forEach((token) => {
    record[token.type].push(token);
  });
  return record;
};

const reconstructDeepTokenValueMap = (flattenTokens: Array<FlattenSingleToken>): DeepTokenValueMap => {
  const deepTokenValueMap: DeepTokenValueMap = {};
  flattenTokens.forEach((token) => {
    const { path, value } = token;
    let currentObject = deepTokenValueMap;
    path.forEach((key, index) => {
      if (index === path.length - 1) {
        currentObject[key] = value;
      } else {
        if (!currentObject[key]) {
          currentObject[key] = {};
        }
        currentObject = currentObject[key] as DeepTokenValueMap;
      }
    });
  });
  return deepTokenValueMap;
};

const buildTailwindConfig = (styleDictionaryObject: Record<string, unknown>) => {
  const flattenTokens = flattenDeepTokenObject(styleDictionaryObject);
  const flattenTokensWithCroppedPath = flattenTokens.map((token) => {
    // Remove the first element of the path array
    // This is because the first element is mostly given by the category name
    // e.g. color, fontSizes, etc.
    // Since it is better to tell its type by the type property, we can remove it.
    const path = token.path.slice(1);
    return { ...token, path };
  });
  const flattenTokensByType = categorizeByTokenType(flattenTokensWithCroppedPath);
  // For each token type, reconstruct the deep token value map
  const deepTokenValueMapByType = Object.fromEntries(
    Object.entries(flattenTokensByType).map(([tokenType, tokens]) => [tokenType, reconstructDeepTokenValueMap(tokens)]),
  );

  const config: TailwindConfig['theme'] = {
    colors: deepTokenValueMapByType[TokenTypes.COLOR] as any,
  };

  return config;
};

// Export as JSON
fs.writeFileSync('./dist/tailwind-css/core.json', JSON.stringify(buildTailwindConfig(coreTokens), null, 2));
fs.writeFileSync('./dist/tailwind-css/dark.json', JSON.stringify(buildTailwindConfig(darkTokens), null, 2));
fs.writeFileSync('./dist/tailwind-css/light.json', JSON.stringify(buildTailwindConfig(lightTokens), null, 2));
