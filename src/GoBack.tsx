import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function GoBackIcon({
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
      <path d="M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H8z" />
    </g>
  </svg>;
}

export default GoBackIcon;
