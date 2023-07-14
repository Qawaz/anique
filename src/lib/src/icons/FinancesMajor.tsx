import * as React from 'react';
import { SVGProps } from 'react';
const SvgFinancesMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5Zm7 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill="#5C5F62"
    />
    <path
      fillRule="evenodd"
      d="M16 15v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1v7a1 1 0 0 0 1 1h13Z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgFinancesMajor;