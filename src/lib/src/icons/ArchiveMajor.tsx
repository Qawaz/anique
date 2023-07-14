import * as React from 'react';
import { SVGProps } from 'react';
const SvgArchiveMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M2.5 1A1.5 1.5 0 0 0 1 2.5V4h18V2.5A1.5 1.5 0 0 0 17.5 1h-15zM2 17.5A1.5 1.5 0 0 0 3.5 19h13a1.5 1.5 0 0 0 1.5-1.5V6H2v11.5zM7 9h6v2H7V9z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgArchiveMajor;
