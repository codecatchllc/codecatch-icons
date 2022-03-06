import * as React from "react";
import { SVGProps } from "react";

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
  color = "#F8F9FA",
  ...rest
}: SVGProps<SVGSVGElement> & SVGRProps) {
  const props = {
    ...{
      width: size,
      height: size,
      fill: color,
    },
    ...rest,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g stroke="none">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M11 4h10v2H11V4zm0 4h6v2h-6V8zm0 6h10v2H11v-2zm0 4h6v2h-6v-2zM3 4h6v6H3V4zm2 2v2h2V6H5zm-2 8h6v6H3v-6zm2 2v2h2v-2H5z" />
      </g>
    </svg>
  );
}

export default ChecklistIcon;