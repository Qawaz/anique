import * as React from 'react';
import { SVGProps } from 'react';
const SvgKeyMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M14.56.44A1.5 1.5 0 0 1 15.622 0H18.5A1.5 1.5 0 0 1 20 1.5v3.423a.5.5 0 0 1-.5.5h-1.082a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v2l-1.449 1.443a6.5 6.5 0 1 1-5.111-5.724L14.561.439zM8 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgKeyMajor;
