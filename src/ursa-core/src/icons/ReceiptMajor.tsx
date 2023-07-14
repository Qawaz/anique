import * as React from 'react';
import { SVGProps } from 'react';
const SvgReceiptMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M15.5 0h-11C3.672 0 3 .677 3 1.513V19.72a.2.2 0 0 0 .334.15l1.664-1.515a.497.497 0 0 1 .67 0l1.664 1.514c.19.173.48.173.67 0l1.663-1.514a.497.497 0 0 1 .67 0l1.663 1.514c.19.173.48.173.67 0l1.664-1.514a.497.497 0 0 1 .67 0l1.664 1.515a.2.2 0 0 0 .334-.15V1.513C17 .677 16.328 0 15.5 0zM15 5V4H5v2h10V5zm0 3v2H5V8h10zm-4 5v-1H5v2h6v-1z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgReceiptMajor;
