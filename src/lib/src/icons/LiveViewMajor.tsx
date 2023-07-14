import * as React from 'react';
import { SVGProps } from 'react';
const SvgLiveViewMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M13.293 2.707A1 1 0 0 0 15 2V1a1 1 0 0 0-2 0v1a1 1 0 0 0 .293.707zM17 4a.999.999 0 0 1-.707-1.707l1-1a1 1 0 1 1 1.414 1.414l-1 1A.996.996 0 0 1 17 4zm2 3h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zm-4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM1 3a2 2 0 0 1 2-2h8v2H3v8.464C4.795 10.53 7.836 10 10 10c2.164 0 5.205.529 7 1.464V9h2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgLiveViewMajor;