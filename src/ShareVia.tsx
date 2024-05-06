import * as React from "react";
import { SVGProps } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: string | number;
  color?: string;
}
function ShareViaIcon({
  title,
  titleId,
  size = 24,
  color = "#F8F9FA",
  className,
  ...rest
}: SVGProps<SVGSVGElement> & SVGRProps) {
  const classNames = ["codecatch-Icon", className];
  const props = {
    ...{
      "data-testid": "codecatch-ShareViaIcon",
      width: size,
      height: size,
      className: classNames.join(" ").trim(),
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
      <path
        d="m13.12 17.023-4.199-2.29a4 4 0 1 1 0-5.465l4.2-2.29a4 4 0 1 1 .958 1.755l-4.2 2.29a4.008 4.008 0 0 1 0 1.954l4.2 2.29a4 4 0 1 1-.959 1.755ZM6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        stroke="none"
      />
    </svg>
  );
}

export default ShareViaIcon;
