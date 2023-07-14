import * as React from 'react';
import { SVGProps } from 'react';
const SvgSoftPackMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fill="#5C5F62"
      d="M2 1.5v17c0 .8.7 1.5 1.5 1.5h13.1c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5H3.5C2.7 0 2 .7 2 1.5zM16 18H4V2h12v16z"
    />
    <path
      fill="#5C5F62"
      d="M6 4H3v2h3V4zm11 0h-3v2h3V4zm-5 0H8v2h4V4zm-2 6H6v2h4v-2zm2 4H6v2h6v-2z"
    />
  </svg>
);
export default SvgSoftPackMajor;