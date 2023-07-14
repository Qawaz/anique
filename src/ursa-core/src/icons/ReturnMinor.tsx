import * as React from 'react';
import { SVGProps } from 'react';
const SvgReturnMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M13.5 13H5.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a.999.999 0 0 1 0-1.414l3-3a.997.997 0 0 1 1.414 0 .999.999 0 0 1 0 1.414L5.414 11H13.5c1.379 0 2.5-1.121 2.5-2.5S14.879 6 13.5 6H3a1 1 0 1 1 0-2h10.5C15.981 4 18 6.019 18 8.5S15.981 13 13.5 13z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgReturnMinor;
