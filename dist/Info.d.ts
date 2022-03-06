import { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function InfoIcon({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps): void;
export default InfoIcon;
