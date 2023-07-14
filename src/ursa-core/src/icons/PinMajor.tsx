import * as React from 'react';
import { SVGProps } from 'react';
const SvgPinMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="m13.707.295 6 6a1.003 1.003 0 0 1-.066 1.475l-5.65 4.706c-.154 4.105-2.292 5.294-2.544 5.42a1 1 0 0 1-1.154-.187L7 14.416l-5.293 5.293a1 1 0 0 1-1.414-1.414l5.293-5.293-3.293-3.293a1.001 1.001 0 0 1-.188-1.155c.126-.252 1.316-2.389 5.419-2.544L12.231.361a.998.998 0 0 1 .724-.358.966.966 0 0 1 .752.292z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgPinMajor;