import * as React from 'react';
import { SVGProps } from 'react';
const SvgLockMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M4 6v2H2.5A1.5 1.5 0 0 0 1 9.5v9A1.5 1.5 0 0 0 2.5 20h15a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 17.5 8H16V6A6 6 0 0 0 4 6zm6-4a4 4 0 0 0-4 4v2h8V6a4 4 0 0 0-4-4zm1 14v-4H9v4h2z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgLockMajor;
