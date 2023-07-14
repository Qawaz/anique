import * as React from 'react';
import { SVGProps } from 'react';
const SvgCircleTickMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    role="img"
    {...props}
  >
    <path
      fill="#5C5F62"
      fillRule="evenodd"
      d="M2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0Zm12.16-1.44a.8.8 0 0 0-1.12-1.12L9.2 11.28 7.36 9.44a.8.8 0 0 0-1.12 1.12l2.4 2.4c.32.32.8.32 1.12 0l4.4-4.4Z"
    />
  </svg>
);
export default SvgCircleTickMinor;
