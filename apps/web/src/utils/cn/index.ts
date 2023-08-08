import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  // ↓ Add values to existing theme scale or create a new one
  // theme: {
  //   spacing: ['sm', 'md', 'lg'],
  // },
  // ↓ Add values to existing class groups or define new ones
  // classGroups: {
  //   foo: ['foo', 'foo-2', { 'bar-baz': ['', '1', '2'] }],
  //   bar: [{ qux: ['auto', (value: unknown) => Number(value) >= 1000] }],
  // },
  // ↓ Here you can define additional conflicts across class groups
  // conflictingClassGroups: {
  //   foo: ['bar'],
  // },
});

export const cn = twMerge;
