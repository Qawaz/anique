import * as React from 'react';
import { SVGProps } from 'react';
const SvgCircleDisableMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M4 10c0-1.294.416-2.49 1.115-3.471l8.356 8.356A5.961 5.961 0 0 1 10 16c-3.309 0-6-2.691-6-6zm12 0c0 1.294-.416 2.49-1.115 3.471L6.529 5.115A5.961 5.961 0 0 1 10 4c3.309 0 6 2.691 6 6zM2 10c0 4.411 3.589 8 8 8s8-3.589 8-8-3.589-8-8-8-8 3.589-8 8z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgCircleDisableMinor;
