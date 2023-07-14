import * as React from 'react';
import { SVGProps } from 'react';
const SvgLockMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M15 8V7c0-2.757-2.243-5-5-5S5 4.243 5 7v1a1 1 0 0 0-1 1v7.5A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5V9a1 1 0 0 0-1-1zm-6 7h2v-4H9v4zm4-7H7V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgLockMinor;
