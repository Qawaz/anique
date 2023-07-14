import * as React from 'react';
import { SVGProps } from 'react';
const SvgHeartMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M6 1a5 5 0 0 0-5 5v.448c0 5.335 2.955 9.647 8.598 12.457a.902.902 0 0 0 .804 0C16.046 16.095 19 11.783 19 6.448V6a5 5 0 0 0-9-3 4.992 4.992 0 0 0-4-2z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgHeartMajor;