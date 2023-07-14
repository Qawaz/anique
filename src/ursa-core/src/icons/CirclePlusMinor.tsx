import * as React from 'react';
import { SVGProps } from 'react';
const SvgCirclePlusMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M15 10a1 1 0 0 1-1 1h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1zm-5-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgCirclePlusMinor;
