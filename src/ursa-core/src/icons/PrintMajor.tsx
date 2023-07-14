import * as React from 'react';
import { SVGProps } from 'react';
const SvgPrintMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M4 2.5A1.5 1.5 0 0 1 5.5 1h9A1.5 1.5 0 0 1 16 2.5V5h1.5A1.5 1.5 0 0 1 19 6.5v6a1.5 1.5 0 0 1-1.5 1.5H16v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4H2.5A1.5 1.5 0 0 1 1 12.5v-6A1.5 1.5 0 0 1 2.5 5H4V2.5ZM14 17v-5H6v5h8Zm3-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3-6H6v2h8V3Z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgPrintMajor;
