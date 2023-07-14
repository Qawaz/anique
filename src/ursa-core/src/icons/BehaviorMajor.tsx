import * as React from 'react';
import { SVGProps } from 'react';
const SvgBehaviorMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fill="#5C5F62"
      d="m9.37 8.07 10 4a1 1 0 0 1 .08 1.82l-3.7 1.86-1.85 3.7a1 1 0 0 1-.9.55h-.04a1 1 0 0 1-.89-.63l-4-10a1 1 0 0 1 1.3-1.3zm.337-3.363A1 1 0 0 1 8 4V1a1 1 0 0 1 2 0v3a1 1 0 0 1-.293.707zm-5 3.586A1 1 0 0 1 4 10H1a1 1 0 0 1 0-2h3a1 1 0 0 1 .707.293zm-1-6a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414l-2-2zm12 0a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414zm-13.414 12 2-2a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414-1.414z"
    />
  </svg>
);
export default SvgBehaviorMajor;
