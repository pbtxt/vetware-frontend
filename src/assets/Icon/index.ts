import LogoName from "./icons/LogoName.svg";

const icons: {
  [k: string]: React.FC<{
    className?: string;
    onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  }>;
} = {
  LogoName,
};

export default icons;
