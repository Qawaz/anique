import * as React from 'react';
import { SVGProps } from 'react';
const SvgCalendarMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M7 2a1 1 0 0 1 1 1v1h4V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1ZM5 8v7h10V8H5Z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgCalendarMinor;
