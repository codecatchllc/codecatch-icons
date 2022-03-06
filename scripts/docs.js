const fs = require("fs");
const C = require("./constants");

fs.readdir(C.ICONS_DIR_PATH, (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  let gitHubIconDocs = ``;
  const npmIconDocs = `Visit the CodeCatch Icons [GitHub repository](https://github.com/codecatchorg/codecatch-icons#icons) to see examples of all available icons.`;

  // generate markdown for the "Icons" README section
  files.forEach(file => {
    // e.g. copyCode
    const fileName = file.substring(0, file.lastIndexOf("."));
    // e.g. CopyCode
    const capsFileName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
    // e.g. Copy Code
    const altFileName = capsFileName.split(/(?=[A-Z])/).join(" ");

    gitHubIconDocs += `<img src="${C.ICON_URL}/${file}" alt="${altFileName} Icon" title="<${capsFileName}Icon />" width="${C.ICON_WIDTH}">${C.SPACER}`;
  });

  // update the GitHub README
  const GITHUB_README = C.BEFORE_ICON_DOCS + gitHubIconDocs + C.AFTER_ICON_DOCS;
  fs.writeFile(".github/README.md", GITHUB_README, err => {
    if (err) {
      return console.log("Unable to write to ./github/README.md: " + err);
    }
  });

  // update the NPM README
  const NPM_README = C.BEFORE_ICON_DOCS + npmIconDocs + C.AFTER_ICON_DOCS;
  fs.writeFile("README.md", NPM_README, err => {
    if (err) {
      return console.log("Unable to write to README.md: " + err);
    }
  });
});
