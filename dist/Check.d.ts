import { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function CheckIcon({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps): void;
export default CheckIcon;
