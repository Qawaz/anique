import * as React from 'react';
import { SVGProps } from 'react';
const SvgTextMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="m8.24 9 .816 2.33a1 1 0 0 0 1.888-.66L7.609 1.142a1.705 1.705 0 0 0-3.218 0L1.056 10.67a1 1 0 0 0 1.888.66L3.759 9h4.482zm-.7-2L6 2.599 4.46 7h3.08zm7.96-2c.608 0 1.18.155 1.68.428A.999.999 0 0 1 19 6v5a1 1 0 0 1-1.82.572A3.5 3.5 0 1 1 15.5 5zm0 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
      fill="#5C5F62"
    />
    <path
      d="M2 14a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H2zm0 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H2z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgTextMajor;
