import { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
    size?: string | number;
    color?: string;
}
declare function InfoIcon({ title, titleId, size, color, ...rest }: SVGProps<SVGSVGElement> & SVGRProps): JSX.Element;
export default InfoIcon;