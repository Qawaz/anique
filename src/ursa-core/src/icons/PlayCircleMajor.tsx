import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlayCircleMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zM8 6.862v6.276a.5.5 0 0 0 .748.434l5.492-3.138a.5.5 0 0 0 0-.868L8.748 6.427A.5.5 0 0 0 8 6.862z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgPlayCircleMajor;
