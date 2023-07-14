import * as React from 'react';
import { SVGProps } from 'react';
const SvgCircleUpMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M10 0c5.514 0 10 4.486 10 10s-4.486 10-10 10S0 15.514 0 10 4.486 0 10 0zm1 8.414 1.293 1.293a1 1 0 1 0 1.414-1.414l-3-3a.998.998 0 0 0-1.414 0l-3 3a1 1 0 0 0 1.414 1.414L9 8.414V14a1 1 0 1 0 2 0V8.414z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgCircleUpMajor;
