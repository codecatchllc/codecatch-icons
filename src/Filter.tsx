import * as React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: string | number;
  color?: string;
}
function FilterIcon({
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
      'data-testid': 'codecatch-FilterIcon',
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
        <path d="M14 14v6l-4 2v-8L4 5V3h16v2zM6.404 5 12 13.394 17.596 5z" />
      </g>
    </svg>
  );
}
export default FilterIcon;
