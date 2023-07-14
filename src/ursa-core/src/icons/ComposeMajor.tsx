import * as React from 'react';
import { SVGProps } from 'react';
const SvgComposeMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fill="#5C5F62"
      d="M18 9a1 1 0 0 0-1 1v7H3V3h7a1 1 0 1 0 0-2H2.5A1.5 1.5 0 0 0 1 2.5v15A1.5 1.5 0 0 0 2.5 19h15a1.5 1.5 0 0 0 1.5-1.5V10a1 1 0 0 0-1-1z"
    />
    <path
      fill="#5C5F62"
      d="m15.53 2.029 2.439 2.44-7.739 7.738-3.23.792.792-3.231 7.738-7.74zm3.558 1.321L16.65.913l.406-.407a1.725 1.725 0 0 1 2.44 2.439l-.408.407z"
    />
  </svg>
);
export default SvgComposeMajor;
