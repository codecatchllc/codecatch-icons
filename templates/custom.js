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
  const { componentName, imports, jsx } = variables;
  const customComponentName = componentName.replace("Svg", "") + "Icon";
  const dataTestId = `\'codecatch-${customComponentName}\'`;

  return tpl`
    ${imports};
    ${INTERFACE}
    function ${customComponentName}(${PROPS}) {
      const classNames = ['codecatch-Icon', className];
      const props = {
        ...{
          'data-testid': ${dataTestId},
          width: size,
          height: size,
          className: classNames.join(" ").trim()
        }, 
        ...rest
      }
       return ${jsx}
    };
    export default ${customComponentName};
  `;
}
module.exports = defaultCustomTemplate;
