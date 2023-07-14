import * as React from 'react';
import { SVGProps } from 'react';
const SvgCustomersMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-3.5 8a2.5 2.5 0 0 1-1.768-4.268C5.322 12.155 7.2 11 10 11s4.678 1.155 5.268 1.732A2.5 2.5 0 0 1 13.5 17h-7Z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgCustomersMinor;
