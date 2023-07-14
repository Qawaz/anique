import * as React from 'react';
import { SVGProps } from 'react';
const SvgIncomingMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M17.5 6A1.5 1.5 0 0 1 19 7.5v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-10A1.5 1.5 0 0 1 2.5 6H7v2H3v9h14V8h-4V6h4.5z"
      fill="#5C5F62"
    />
    <path
      d="M1 2a1 1 0 0 1 0-2h5c2.757 0 5 2.243 5 5v6.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a.998.998 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L9 11.586V5c0-1.654-1.346-3-3-3H1z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgIncomingMajor;
