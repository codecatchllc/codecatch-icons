import * as React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: string | number;
  color?: string;
}
function AddIcon({
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
      'data-testid': 'codecatch-AddIcon',
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
      <path stroke="none" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
    </svg>
  );
}
export default AddIcon;
