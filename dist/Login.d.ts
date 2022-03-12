import { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
    size?: string | number;
    color?: string;
}
declare function LoginIcon({ title, titleId, size, color, className, ...rest }: SVGProps<SVGSVGElement> & SVGRProps): JSX.Element;
export default LoginIcon;
