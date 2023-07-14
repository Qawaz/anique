import * as React from 'react';
import { SVGProps } from 'react';
const SvgTypeMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M9 0c-.6 0-1.1.4-1.4 1L2 17.3a1 1 0 0 1-.9.7 1 1 0 1 0 0 2h4a1 1 0 1 0 0-2 1 1 0 0 1-.9-1.2L5 14h7l.9 2.8A1 1 0 0 1 12 18a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2 1 1 0 0 1-1-.7L12.5 1c-.3-.6-.8-1-1.5-1H9zm-.5 4.3L5.8 12h5.4L8.5 4.3z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgTypeMajor;