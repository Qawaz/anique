import * as React from 'react';
import { SVGProps } from 'react';
const SvgTextBlockMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2.5 1A1.5 1.5 0 0 0 1 2.5v15A1.5 1.5 0 0 0 2.5 19h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 17.5 1h-15zM16 5H4v2h12V5zM4 9h12v2H4V9zm6 4H4v2h6v-2z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgTextBlockMajor;