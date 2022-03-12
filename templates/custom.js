const INTERFACE = `
interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: string | number;
  color?: string;
}
`;
const PROPS = `
{
  title,
  titleId,
  size = 24,
  color = '#F8F9FA',
  className,
  ...rest
}: SVGProps<SVGSVGElement> & SVGRProps
`;

function defaultCustomTemplate(variables, { tpl }) {
  const { componentName, imports, interfaces, props, jsx } = variables;
  const customComponentName = componentName.replace("Svg", "") + "Icon";
  return tpl`
    ${imports};
    ${INTERFACE}
    function ${customComponentName}(${PROPS}) {
      const classNames = ['codecatch-Icon', className];
      const props = {...{width: size, height: size, className: classNames.join(" ")}, ...rest}
       return ${jsx}
    };
    export default ${customComponentName};
  `;
}
module.exports = defaultCustomTemplate;
