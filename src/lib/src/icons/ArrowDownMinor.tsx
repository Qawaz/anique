import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowDownMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="m10.707 17.707 5-5a.999.999 0 1 0-1.414-1.414L11 14.586V3a1 1 0 1 0-2 0v11.586l-3.293-3.293a.999.999 0 1 0-1.414 1.414l5 5a.999.999 0 0 0 1.414 0z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgArrowDownMinor;