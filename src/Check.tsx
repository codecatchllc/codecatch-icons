import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function CheckIcon({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#F8F9FA"
    stroke="currentColor"
    strokeWidth={0}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g stroke="none">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m10 15.172 9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
    </g>
  </svg>;
}

export default CheckIcon;
