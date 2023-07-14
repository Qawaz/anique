import * as React from 'react';
import { SVGProps } from 'react';
const SvgPauseMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M6 0a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1zm8 0a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgPauseMajor;
