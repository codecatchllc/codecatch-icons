import * as React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: string | number;
  color?: string;
}
function MoonIcon({
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
      'data-testid': 'codecatch-MoonIcon',
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
        <path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.98 6.98 0 0 0 10 7m-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 8 8 0 0 0 4 12" />
      </g>
    </svg>
  );
}
export default MoonIcon;
