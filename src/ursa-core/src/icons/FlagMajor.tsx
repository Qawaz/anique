import * as React from 'react';
import { SVGProps } from 'react';
const SvgFlagMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M3.249 2.001h13.868a.5.5 0 0 1 .428.758L15 7l3.35 4.188a.5.5 0 0 1-.39.812l-12.49.001 1.507 6.782a1 1 0 1 1-1.953.434l-4-18A1 1 0 0 1 2.977.783l.272 1.218z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgFlagMajor;
