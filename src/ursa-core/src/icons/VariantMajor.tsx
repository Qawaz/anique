import * as React from 'react';
import { SVGProps } from 'react';
const SvgVariantMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M17.5 1A1.5 1.5 0 0 1 19 2.5v12a1.5 1.5 0 0 1-1.5 1.5H14v2.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 18.5v-11A1.5 1.5 0 0 1 1.5 6H4V2.5A1.5 1.5 0 0 1 5.5 1h12zM11 14h6V8l-6 6zm-9 4h10v-2.027l-6.495.022A1.5 1.5 0 0 1 4 14.495V8H2v10zM12 3H6v6l6-6z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgVariantMajor;
