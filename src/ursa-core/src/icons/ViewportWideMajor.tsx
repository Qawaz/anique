import * as React from 'react';
import { SVGProps } from 'react';
const SvgViewportWideMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fill="#5C5F62"
      d="m16.707 6.293 3 3a.998.998 0 0 1 0 1.414l-3 3a.997.997 0 0 1-1.631-.324 1 1 0 0 1 .217-1.09L16.586 11H12a1 1 0 1 1 0-2h4.586l-1.293-1.293a1 1 0 1 1 1.414-1.414zm-13.414 0a1 1 0 1 1 1.414 1.414L3.414 9H8a1 1 0 0 1 0 2H3.414l1.293 1.293a1.003 1.003 0 0 1 0 1.414 1 1 0 0 1-1.414 0l-3-3a.998.998 0 0 1 0-1.414l3-3z"
    />
    <path
      fill="#5C5F62"
      d="M1 1.5A1.5 1.5 0 0 1 2.5 0h15A1.5 1.5 0 0 1 19 1.5V6l-2-2V2H3v2L1 6V1.5zM17 18v-2l2-2v4.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 18.5V14l2 2v2h14z"
    />
  </svg>
);
export default SvgViewportWideMajor;