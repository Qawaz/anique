import * as React from 'react';
import { SVGProps } from 'react';
const SvgCircleRightMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M20 10c0 5.514-4.486 10-10 10S0 15.514 0 10 4.486 0 10 0s10 4.486 10 10zm-8.414 1-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a.997.997 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L11.586 9H6a1 1 0 0 0 0 2h5.586z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgCircleRightMajor;