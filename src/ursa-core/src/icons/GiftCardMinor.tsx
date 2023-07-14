import * as React from 'react';
import { SVGProps } from 'react';
const SvgGiftCardMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5 5c0 .35.06.687.17 1H4.5A1.5 1.5 0 0 0 3 7.5V9h14V7.5a1.5 1.5 0 0 0-1.34-1.492 3.5 3.5 0 0 0-6.022-3.523A3 3 0 0 0 5 5zm7.5 1A1.5 1.5 0 1 0 11 4.5V6h1.5zM9 5v1H8a1 1 0 1 1 1-1z"
      fill="#5C5F62"
    />
    <path
      d="M4 11h5v6H5.5A1.5 1.5 0 0 1 4 15.5V11zm12 0h-5v6h3.5a1.5 1.5 0 0 0 1.5-1.5V11z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgGiftCardMinor;
