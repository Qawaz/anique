import * as React from 'react';
import { SVGProps } from 'react';
const SvgSectionMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M2 1a1 1 0 0 0-1 1v2h2V3h1V1H2zm16 0a1 1 0 0 1 1 1v2h-2V3h-1V1h2zM1 6v8h18V6H1zm1 13a1 1 0 0 1-1-1v-2h2v1h1v2H2zm17-1a1 1 0 0 1-1 1h-2v-2h1v-1h2v2zM6 17h3v2H6v-2zm8 0h-3v2h3v-2zm0-16v2h-3V1h3zM9 3V1H6v2h3z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgSectionMajor;
