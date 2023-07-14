import * as React from 'react';
import { SVGProps } from 'react';
const SvgMobileMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M3 1.5C3 .7 3.7 0 4.5 0h11c.8 0 1.5.7 1.5 1.5v17c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5v-17zM5 2h10v14H5V2zm4 15a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H9z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgMobileMajor;
