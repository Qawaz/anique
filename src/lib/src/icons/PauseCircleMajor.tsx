import * as React from 'react';
import { SVGProps } from 'react';
const SvgPauseCircleMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M0 10c0 5.514 4.486 10 10 10s10-4.486 10-10S15.514 0 10 0 0 4.486 0 10zm7-3a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0V7zm5-1a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgPauseCircleMajor;
