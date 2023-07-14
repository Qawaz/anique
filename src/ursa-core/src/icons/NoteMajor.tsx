import * as React from 'react';
import { SVGProps } from 'react';
const SvgNoteMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M11.379 0a1.5 1.5 0 0 1 1.06.44l4.122 4.12A1.5 1.5 0 0 1 17 5.622V18.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 18.5v-17A1.5 1.5 0 0 1 4.5 0h6.879zM6 5h4v2H6V5zm8 4v2H6V9h8zm-8 6v-2h7v2H6z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgNoteMajor;
