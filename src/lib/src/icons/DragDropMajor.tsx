import * as React from 'react';
import { SVGProps } from 'react';
const SvgDragDropMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M2 2h1V0H1.5A1.5 1.5 0 0 0 0 1.5V3h2V2zm3 0h3V0H5v2zm8 0h-3V0h3v2zM0 5v3h2V5H0zm0 5v3h2v-3H0zm18-5h-2v3h2V5zM5 18h3v-2H5v2zm-5-1a1 1 0 0 0 1 1h2v-2H2v-1H0v2zM16 3V2h-1V0h1.5A1.5 1.5 0 0 1 18 1.5V3h-2z"
      fill="#5C5F62"
    />
    <path
      d="M10.814 14H5.5A1.5 1.5 0 0 1 4 12.5v-7A1.5 1.5 0 0 1 5.5 4h7A1.5 1.5 0 0 1 14 5.5v5.314l5.512 2.506a.832.832 0 0 1 .028 1.501l-2.898 1.45a.832.832 0 0 0-.372.371l-1.449 2.898a.832.832 0 0 1-1.501-.028L10.814 14zm-.909-2-.828-1.821c-.318-.7.402-1.42 1.102-1.102L12 9.905V6H6v6h3.905z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgDragDropMajor;