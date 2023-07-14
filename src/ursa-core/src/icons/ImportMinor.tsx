import * as React from 'react';
import { SVGProps } from 'react';
const SvgImportMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M13.707 10.707a.999.999 0 1 0-1.414-1.414L11 10.586V3a1 1 0 1 0-2 0v7.586L7.707 9.293a.999.999 0 1 0-1.414 1.414l3 3a.999.999 0 0 0 1.414 0l3-3zM3 16a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H3z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgImportMinor;
