import * as React from 'react';
import { SVGProps } from 'react';
const SvgReportMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M4.5 3A1.5 1.5 0 0 0 3 4.5v11A1.5 1.5 0 0 0 4.5 17h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 15.5 3h-11zM15 15h-2V9h2v6zm-6 0h2V6H9v9zm-2 0H5v-3h2v3z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgReportMinor;