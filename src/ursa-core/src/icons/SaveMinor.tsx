import * as React from 'react';
import { SVGProps } from 'react';
const SvgSaveMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M5 5v10h10V7h-2V5h2.5A1.5 1.5 0 0 1 17 6.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 15.5v-11A1.5 1.5 0 0 1 4.5 3h3.293a1.5 1.5 0 0 1 1.06.44l1.708 1.706A1.5 1.5 0 0 1 11 6.207v3.379l.793-.793a1 1 0 1 1 1.414 1.414l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1 1.414-1.414L9 9.586V6.414L7.586 5H5z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgSaveMinor;
