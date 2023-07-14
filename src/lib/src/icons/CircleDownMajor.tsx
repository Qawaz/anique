import * as React from 'react';
import { SVGProps } from 'react';
const SvgCircleDownMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M10 20C4.486 20 0 15.514 0 10S4.486 0 10 0s10 4.486 10 10-4.486 10-10 10zm-1-8.414-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a.998.998 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L11 11.586V6a1 1 0 0 0-2 0v5.586z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgCircleDownMajor;