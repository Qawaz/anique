import * as React from 'react';
import { SVGProps } from 'react';
const SvgLegalMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M7 5h5v2H7V5zm5 4H7v2h5V9z" fill="#5C5F62" />
    <path
      fillRule="evenodd"
      d="M16 17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.5A1.5 1.5 0 0 1 1.5 14H3V4a3 3 0 0 1 3-3h11a3 3 0 1 1 0 6h-1v10zM5 4a1 1 0 0 1 1-1h8.17c-.11.313-.17.65-.17 1v13a1 1 0 1 1-2 0v-3H5V4zm12-1a1 1 0 0 0-1 1v1h1a1 1 0 1 0 0-2zm-7 14c0 .35.06.687.17 1H3a1 1 0 0 1-1-1v-1h8v1z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgLegalMajor;