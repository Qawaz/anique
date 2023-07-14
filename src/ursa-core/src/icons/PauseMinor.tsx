import * as React from 'react';
import { SVGProps } from 'react';
const SvgPauseMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M11 13a1 1 0 1 0 2 0V7a1 1 0 1 0-2 0v6zm-4 0a1 1 0 1 0 2 0V7a1 1 0 0 0-2 0v6zm3-11a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgPauseMinor;
