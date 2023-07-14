import * as React from 'react';
import { SVGProps } from 'react';
const SvgAddMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M3 3h1V1H2.5A1.5 1.5 0 0 0 1 2.5V4h2V3zm3 0h3V1H6v2zm5 0h3V1h-3v2zM9 19H6v-2h3v2zm2 0h3v-2h-3v2zm6-15V3h-1V1h1.5A1.5 1.5 0 0 1 19 2.5V4h-2zM3 17v-1H1v1.5A1.5 1.5 0 0 0 2.5 19H4v-2H3zm13 0h1v-1h2v1.5a1.5 1.5 0 0 1-1.5 1.5H16v-2zM10 6a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H7a1 1 0 1 1 0-2h2V7a1 1 0 0 1 1-1zM1 9V6h2v3H1zm0 2v3h2v-3H1zm16-2V6h2v3h-2zm0 2v3h2v-3h-2z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgAddMajor;