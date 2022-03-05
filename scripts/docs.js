const path = require("path");
const fs = require("fs");

const DIR_PATH = path.join(__dirname, "../optimized");
const SPACER = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
const ICON_URL =
  "https://github.com/codecatchorg/codecatch-icons/blob/master/optimized";
const ICON_WIDTH = "36";
const BEFORE_ICON_DOCS = `<img src="./logo.png" width="120" alt="CodeCatch Icons">

# [CodeCatch Icons](https://github.com/codecatchorg/codecatch-icons)

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/codecatch-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/codecatch-icons

CodeCatch Icons is a React-based icon library intended for all CodeCatch React projects.

## Installation

\`\`\`bash
yarn add codecatch-icons
# or
npm install codecatch-icons
\`\`\`

example usage

\`\`\`jsx
import { SunIcon } from "codecatch-icons";
const Component = () => {
  return (
    <h1>
      Don't stare directly at the <SunIcon />
    </h1>
  );
};
\`\`\`

`;

const AFTER_ICON_DOCS = `

## Contributing

1. Run \`git clone https://github.com/codecatchorg/codecatch-icons.git\`

2. Run \`yarn\` to install the dependencies

3. Create a new branch off master

4. Add the desired svg file to the \`./optimized\` directory

5. Run \`yarn build\`

6. Run \`git add .\`

7. Commit your changes according to [semantic-release](https://github.com/semantic-release/semantic-release#how-does-it-work) requirements

8. Run \`git push\`
`;

fs.readdir(DIR_PATH, (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  let iconDocs = `## Icons

`;

  files.forEach((file, index) => {
    // e.g. copyCode
    const fileName = file.substring(0, file.lastIndexOf("."));
    // e.g. CopyCode
    const capsFileName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
    // e.g. Copy Code
    const altFileName = capsFileName.split(/(?=[A-Z])/);

    iconDocs += `<img src="${ICON_URL}/${file}" alt="${altFileName} Icon" title="<${capsFileName} />" width="${ICON_WIDTH}">${SPACER}`;
  });

  const content = BEFORE_ICON_DOCS + iconDocs + AFTER_ICON_DOCS;
  fs.writeFile("README.md", content, err => {
    if (err) {
      return console.log("Unable to write to README: " + err);
    }
  });
});
