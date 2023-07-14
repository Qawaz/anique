import * as React from 'react';
import { SVGProps } from 'react';
const SvgCircleDotsMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M0 10C0 4.486 4.486 0 10 0s10 4.486 10 10-4.486 10-10 10S0 15.514 0 10zm10 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgCircleDotsMajor;
