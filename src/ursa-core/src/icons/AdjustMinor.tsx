import * as React from 'react';
import { SVGProps } from 'react';
const SvgAdjustMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M2 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1Zm6 0a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm0 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm-6 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm12-5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM2 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
      fill="#5C5F62"
    />
    <path
      fillRule="evenodd"
      d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="#5C5F62"
    />
    <path
      fillRule="evenodd"
      d="M13 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-6 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgAdjustMinor;
