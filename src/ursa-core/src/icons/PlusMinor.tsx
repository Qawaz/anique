import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlusMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    role="img"
    {...props}
  >
    <path
      d="M10 4a1 1 0 0 0-1 1v4H5a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V5a1 1 0 0 0-1-1Z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgPlusMinor;
