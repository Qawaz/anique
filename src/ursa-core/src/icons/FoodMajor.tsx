import * as React from 'react';
import { SVGProps } from 'react';
const SvgFoodMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M17 4h-.22L15.97.758A.999.999 0 0 0 15 0H5a.998.998 0 0 0-.97.758L3.22 4H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.095l.91 9.1A1 1 0 0 0 5 20h10c.514 0 .945-.39.996-.9l.91-9.1H17a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM5.782 2h8.437l.5 2H5.282l.5-2zM4 8h12V6H4v2zm6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgFoodMajor;
