import * as React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: string | number;
  color?: string;
}
function ChecklistIcon({
  title,
  titleId,
  size = 24,
  color = '#F8F9FA',
  className,
  ...rest
}: SVGProps<SVGSVGElement> & SVGRProps) {
  const classNames = ['codecatch-Icon', className];
  const props = {
    ...{
      'data-testid': 'codecatch-ChecklistIcon',
      width: size,
      height: size,
      className: classNames.join(' ').trim(),
    },
    ...rest,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      stroke="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g stroke="none">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M11 4h10v2H11zm0 4h6v2h-6zm0 6h10v2H11zm0 4h6v2h-6zM3 4h6v6H3zm2 2v2h2V6zm-2 8h6v6H3zm2 2v2h2v-2z" />
      </g>
    </svg>
  );
}
export default ChecklistIcon;
