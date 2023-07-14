import * as React from 'react';
import { SVGProps } from 'react';
const SvgLandingPageMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M11 7c0-.552-.449-1-1-1H1a1 1 0 0 1 0-2h9c1.654 0 3 1.346 3 3v5.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a.998.998 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L11 12.586V7zm8.56-2.853a1.5 1.5 0 0 1 .44 1.06V18.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5V8h2v10h12V5.414L14.586 2H4v-.5A1.5 1.5 0 0 1 5.5 0h9.293a1.5 1.5 0 0 1 1.06.44l3.708 3.707z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgLandingPageMajor;