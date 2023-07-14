import * as React from 'react';
import { SVGProps } from 'react';
const SvgCardReaderMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M0 1.5A1.5 1.5 0 0 1 1.5 0h17A1.5 1.5 0 0 1 20 1.5V3H0V1.5zM0 5v7.5A1.5 1.5 0 0 0 1.5 14H4a6 6 0 0 1 12 0h2.5a1.5 1.5 0 0 0 1.5-1.5V5H0z"
      fill="#5C5F62"
    />
    <path
      d="M10 10a4 4 0 0 0-4 4v3h3v2a1 1 0 1 0 2 0v-2h3v-3a4 4 0 0 0-4-4z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgCardReaderMajor;
