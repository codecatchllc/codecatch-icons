<img src="https://github.com/codecatchorg/codecatch-icons/blob/main/img/logo.png" width="120" alt="CodeCatch Icons">

# [CodeCatch Icons](https://github.com/codecatchorg/codecatch-icons)

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/codecatch-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/codecatch-icons

CodeCatch Icons is a React-based icon library intended for all CodeCatch React projects.

## Installation

```bash
npm install codecatch-icons
# or
yarn add codecatch-icons
```

example usage

```jsx
import { SunIcon } from 'codecatch-icons';
const Component = () => {
  return (
    <h4>
      Don't stare directly at the <SunIcon size={24} color="orange" />
    </h4>
  );
};
```

output

<img src="https://github.com/codecatchorg/codecatch-icons/blob/main/img/output.png" width="212px" alt="Don't stare directly at the <SunIcon />">

## Icon Props

| Name    | Default | Type                 | Description                                             |
| :------ | :------ | :------------------- | :------------------------------------------------------ |
| size    | 24px    | number &#124; string | Width and height of icon, can be any CSS unit           |
| color   | #F8F9FA | string               | Color of icon, can be any CSS legal color value         |
| title   |         | string               | Tooltip that specifies extra information about the icon |
| titleId |         | string               | Id of the title prop                                    |

All CodeCatch Icons include and extend the attributes defined in the [MDN SVG Attribute reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute#svg_attributes_a_to_z).

## Icons

Visit the CodeCatch Icons [GitHub repository](https://github.com/codecatchorg/codecatch-icons#icons) to see examples of all available icons.

## Contributing

1. Run `git clone https://github.com/codecatchorg/codecatch-icons.git`

2. Run `npm install` to install the dependencies

3. Create a new branch off main

4. Add the desired svg file to the `icons` directory

5. Run `npm run build`

6. Run `git add .`

7. Commit your changes according to [semantic-release](https://github.com/semantic-release/semantic-release#how-does-it-work) requirements

8. Run `git push`

9. Create a PR!
