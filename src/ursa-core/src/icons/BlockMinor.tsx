import * as React from 'react';
import { SVGProps } from 'react';
const SvgBlockMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M2 3.6A1.6 1.6 0 0 1 3.6 2H7a1 1 0 0 1 0 2H4v3a1 1 0 0 1-2 0V3.6zM16.4 2A1.6 1.6 0 0 1 18 3.6V7a1 1 0 1 1-2 0V4h-3a1 1 0 1 1 0-2h3.4zm0 16H13a1 1 0 1 1 0-2h3v-3a1 1 0 1 1 2 0v3.4a1.6 1.6 0 0 1-1.6 1.6zM3.6 18A1.6 1.6 0 0 1 2 16.4V13a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2H3.6z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgBlockMinor;