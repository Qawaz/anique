import * as React from 'react';
import { SVGProps } from 'react';
const SvgProfileMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10 0c5.514 0 10 4.486 10 10s-4.486 10-10 10S0 15.514 0 10 4.486 0 10 0zm6.24 15a7.99 7.99 0 0 1-12.48 0 7.99 7.99 0 0 1 12.48 0zM10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgProfileMajor;