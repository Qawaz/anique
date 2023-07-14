import * as React from 'react';
import { SVGProps } from 'react';
const SvgClockMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm2.293-4.707a.997.997 0 0 1-.707-.293l-2.293-2.293A.997.997 0 0 1 9 10V6a1 1 0 1 1 2 0v3.586l2 2a.999.999 0 0 1-.707 1.707z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgClockMinor;