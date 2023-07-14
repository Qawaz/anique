import * as React from 'react';
import { SVGProps } from 'react';
const SvgProductsMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M10.293 1.293A1 1 0 0 1 11 1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-.293.707l-9 9a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414l9-9zM15.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgProductsMajor;