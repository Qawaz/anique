import * as React from 'react';
import { SVGProps } from 'react';
const SvgExitMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M7.703 13.707a.997.997 0 0 0 0-1.414L6.409 11h6.589a1 1 0 1 0 0-2H6.409l1.294-1.293a1 1 0 1 0-1.415-1.414l-3.001 3a.994.994 0 0 0-.198.298c-.013.027-.021.054-.03.082a.944.944 0 0 0-.054.269l-.001.027a.937.937 0 0 0 .062.398l.003.012v.004c.048.112.117.208.197.294l.01.015.01.015 3.002 3a1 1 0 0 0 1.415 0z"
      fill="#5C5F62"
    />
    <path
      d="M2 16.5A1.5 1.5 0 0 0 3.5 18h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 16.5 2h-13A1.5 1.5 0 0 0 2 3.5V5a1 1 0 1 0 2 0V4h12v12H4v-1a1 1 0 1 0-2 0v1.5z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgExitMajor;
