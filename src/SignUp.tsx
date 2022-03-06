import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SignUpIcon({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#F8F9FA"
    viewBox="0 0 24 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.5}
      d="M16.389 16.912c.4.156.79.335 1.17.535a.961.961 0 1 1-.9 1.701 9.464 9.464 0 0 0-4.43-1.092c-4.568 0-8.465 3.245-9.32 7.666a.963.963 0 0 1-1.891-.365c.755-3.907 3.483-7.05 7.054-8.444a8.491 8.491 0 0 1-4.357-7.416C3.715 4.804 7.527 1 12.23 1c4.702 0 8.514 3.804 8.514 8.497a8.491 8.491 0 0 1-4.355 7.415Zm2.429-7.415c0-3.63-2.95-6.573-6.588-6.573-3.639 0-6.588 2.943-6.588 6.573 0 3.63 2.95 6.572 6.588 6.572s6.588-2.943 6.588-6.572Zm.43 11.764v-2.884a.958.958 0 0 1 .478-.831.96.96 0 0 1 .973 0 .968.968 0 0 1 .478.83v2.885h2.86a.962.962 0 1 1 0 1.924h-2.86v2.853a.958.958 0 0 1-.478.83.961.961 0 0 1-.973 0 .966.966 0 0 1-.477-.83v-2.853h-2.892a.963.963 0 1 1 0-1.924h2.892Z"
    />
  </svg>;
}

export default SignUpIcon;
