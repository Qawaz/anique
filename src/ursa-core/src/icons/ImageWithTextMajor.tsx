import * as React from 'react';
import { SVGProps } from 'react';
const SvgImageWithTextMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M1.5 2A1.5 1.5 0 0 0 0 3.5v5A1.5 1.5 0 0 0 1.5 10h6A1.5 1.5 0 0 0 9 8.5v-5A1.5 1.5 0 0 0 7.5 2h-6zM18 6h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2zm-6 4h6a1 1 0 1 0 0-2h-6a1 1 0 1 0 0 2zm6 4H1a1 1 0 0 1 0-2h17a1 1 0 0 1 0 2zm-3.293 3.707A1 1 0 0 1 14 18H1a1 1 0 0 1 0-2h13a1 1 0 0 1 .707 1.707z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgImageWithTextMajor;
