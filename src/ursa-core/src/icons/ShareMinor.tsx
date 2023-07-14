import * as React from 'react';
import { SVGProps } from 'react';
const SvgShareMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M15 12c-.807 0-1.537.324-2.077.844l-4.96-2.481c.015-.12.037-.238.037-.363s-.022-.243-.037-.363l4.96-2.481c.54.52 1.27.844 2.077.844 1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .125.022.243.037.363l-4.96 2.481A2.986 2.986 0 0 0 5 7c-1.654 0-3 1.346-3 3s1.346 3 3 3c.807 0 1.537-.324 2.077-.844l4.96 2.481c-.015.12-.037.238-.037.363 0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgShareMinor;
