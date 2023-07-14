import * as React from 'react';
import { SVGProps } from 'react';
const SvgExportMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M10.707 2.293a.999.999 0 0 0-1.414 0l-3 3a.999.999 0 1 0 1.414 1.414L9 5.414V13a1 1 0 1 0 2 0V5.414l1.293 1.293a.999.999 0 1 0 1.414-1.414l-3-3zM3 16a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H3z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgExportMinor;
