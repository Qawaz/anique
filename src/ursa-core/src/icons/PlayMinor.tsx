import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlayMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M16 10a.997.997 0 0 1-.485.857l-10 6a1.004 1.004 0 0 1-1.008.013A1.001 1.001 0 0 1 4 16V4a1.001 1.001 0 0 1 1.515-.857l10 6c.301.18.485.505.485.857z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgPlayMinor;
