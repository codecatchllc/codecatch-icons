import * as React from "react";
import { SVGProps } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: string | number;
  color?: string;
}
function DeleteIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  role = "img",
  ...rest
}: SVGProps<SVGSVGElement> & SVGRProps) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      role,
      "data-testid": "codecatch-DeleteIcon",
      width: size,
      height: size,
      className: classNames.join(" "),
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
        <path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" />
      </g>
    </svg>
  );
}

export default DeleteIcon;
