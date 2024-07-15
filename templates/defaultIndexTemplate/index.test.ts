import path from 'path';
import { describe, expect, it } from 'vitest';
import defaultIndexTemplate from '.';

describe(path.basename(__dirname), () => {
  it('should generate export statements for given file paths', () => {
    const filePaths = [
      { path: '/path/to/Icon1.svg' },
      { path: '/path/to/Icon2.svg' },
      { path: '/path/to/1Icon.svg' },
    ];

    const expectedOutput =
      `export { default as Icon1Icon } from './Icon1'\n` +
      `export { default as Icon2Icon } from './Icon2'\n` +
      `export { default as Svg1IconIcon } from './1Icon'`;

    const result = defaultIndexTemplate(filePaths);
    expect(result).toBe(expectedOutput);
  });

  it('should handle filenames starting with a digit', () => {
    const filePaths = [{ path: '/path/to/1Icon.svg' }];

    const expectedOutput = `export { default as Svg1IconIcon } from './1Icon'`;

    const result = defaultIndexTemplate(filePaths);
    expect(result).toBe(expectedOutput);
  });

  it('should handle various file extensions', () => {
    const filePaths = [
      { path: '/path/to/Icon1.svg' },
      { path: '/path/to/Icon2.png' },
      { path: '/path/to/Icon3.jpg' },
    ];

    const expectedOutput =
      `export { default as Icon1Icon } from './Icon1'\n` +
      `export { default as Icon2Icon } from './Icon2'\n` +
      `export { default as Icon3Icon } from './Icon3'`;

    const result = defaultIndexTemplate(filePaths);
    expect(result).toBe(expectedOutput);
  });

  it('should handle an empty array of file paths', () => {
    const filePaths: { path: string }[] = [];

    const expectedOutput = ``;

    const result = defaultIndexTemplate(filePaths);
    expect(result).toBe(expectedOutput);
  });
});
