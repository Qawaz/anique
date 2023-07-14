import * as React from 'react';
import { SVGProps } from 'react';
const SvgFilterMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M0 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1zm3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm5 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgFilterMajor;
