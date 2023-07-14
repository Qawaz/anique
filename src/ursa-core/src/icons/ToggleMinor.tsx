import * as React from 'react';
import { SVGProps } from 'react';
const SvgToggleMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    role="img"
    {...props}
  >
    <path
      fill="#5C5F62"
      d="M2 10a6 6 0 0 1 6-6h4a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6Zm6 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </svg>
);
export default SvgToggleMinor;
