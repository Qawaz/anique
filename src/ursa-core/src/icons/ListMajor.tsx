import * as React from 'react';
import { SVGProps } from 'react';
const SvgListMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M1 2.5A1.5 1.5 0 0 1 2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15zM8 5h8v2H8V5zm8 4H8v2h8V9zm-8 4h8v2H8v-2zM5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgListMajor;
