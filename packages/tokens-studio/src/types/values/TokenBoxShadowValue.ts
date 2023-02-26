export enum BoxShadowTypes {
  DROP_SHADOW = 'dropShadow',
  INNER_SHADOW = 'innerShadow',
}

export type TokenBoxshadowValue = {
  color: string;
  type: BoxShadowTypes;
  x: string | number;
  y: string | number;
  blur: string | number;
  spread: string | number;
  blendMode?: string;
};
