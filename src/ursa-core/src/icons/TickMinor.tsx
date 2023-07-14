import * as React from 'react';
import { SVGProps } from 'react';
const SvgTickMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="m7.293 14.707-3-3a.999.999 0 1 1 1.414-1.414l2.236 2.236 6.298-7.18a.999.999 0 1 1 1.518 1.3l-7 8a1 1 0 0 1-.72.35 1.017 1.017 0 0 1-.746-.292z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgTickMinor;
