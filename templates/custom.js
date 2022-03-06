function defaultCustomTemplate(variables, context) {
  const customComponentName =
    variables.componentName.replace("Svg", "") + "Icon";
  return context.tpl`
    ${variables.imports};
    ${variables.interfaces};
    function ${customComponentName}(${variables.props}) {
      ${variables.jsx}
    };
    export default ${customComponentName};
  `;
}
module.exports = defaultCustomTemplate;
