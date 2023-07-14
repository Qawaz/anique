import * as React from 'react';
import { SVGProps } from 'react';
const SvgPackageMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M19 5h-8V2h5.227c.382-.001.736.162.928.429L19 5zM3.773 2H9v3H1l1.845-2.571c.192-.267.546-.43.928-.429zM1 7v10.5A1.5 1.5 0 0 0 2.5 19h15a1.5 1.5 0 0 0 1.5-1.5V7H1zm2 2h6v4H3V9z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgPackageMajor;
