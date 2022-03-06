import { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function PaletteIcon({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps): void;
export default PaletteIcon;
