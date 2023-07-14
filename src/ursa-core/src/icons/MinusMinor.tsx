import * as React from 'react';
import { SVGProps } from 'react';
const SvgMinusMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M14.167 9H5.833C5.373 9 5 9.448 5 10s.372 1 .833 1h8.334c.46 0 .833-.448.833-1s-.373-1-.833-1"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgMinusMinor;
