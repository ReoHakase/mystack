import { SingleToken } from './SingleToken';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DeepKeyTokenMap extends Record<string, DeepKeyTokenMap | SingleToken> {}
