import * as React from 'react';
import { SVGProps } from 'react';
const SvgBarcodeMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M3 3h1V1H2.5A1.5 1.5 0 0 0 1 2.5V4h2V3zm14 0v1h2V2.5A1.5 1.5 0 0 0 17.5 1H16v2h1zm-1 14h1v-1h2v1.5a1.5 1.5 0 0 1-1.5 1.5H16v-2zM3 17v-1H1v1.5A1.5 1.5 0 0 0 2.5 19H4v-2H3zm-1-3h3V6H2v8zm12 0h-3V6h3v8zm-7 0h2V6H7v8zm9 0h2V6h-2v8z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgBarcodeMajor;
