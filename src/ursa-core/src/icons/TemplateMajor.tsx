import * as React from 'react';
import { SVGProps } from 'react';
const SvgTemplateMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M17.5 1H12v6h7V2.5A1.5 1.5 0 0 0 17.5 1zM19 9h-5v10h3.5a1.5 1.5 0 0 0 1.5-1.5V9zM1 9h11v10H2.5A1.5 1.5 0 0 1 1 17.5V9zm1.5-8A1.5 1.5 0 0 0 1 2.5V7h11V1H2.5z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgTemplateMajor;
