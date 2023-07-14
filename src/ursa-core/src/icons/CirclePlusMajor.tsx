import * as React from 'react';
import { SVGProps } from 'react';
const SvgCirclePlusMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M0 10c0 5.514 4.486 10 10 10s10-4.486 10-10S15.514 0 10 0 0 4.486 0 10zm5 0a1 1 0 0 1 1-1h3V6a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 0 1-1-1z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgCirclePlusMajor;
