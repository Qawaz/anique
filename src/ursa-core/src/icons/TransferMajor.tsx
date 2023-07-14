import * as React from 'react';
import { SVGProps } from 'react';
const SvgTransferMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M9 14h8V3H6v8H4V2.5A1.5 1.5 0 0 1 5.5 1h12A1.5 1.5 0 0 1 19 2.5v12a1.5 1.5 0 0 1-1.5 1.5H9v-2z"
      fill="#5C5F62"
    />
    <path
      d="M9 5a1 1 0 0 0 0 2h2.586l-3.293 3.293a1 1 0 1 0 1.414 1.414L13 8.414V11a1 1 0 1 0 2 0V6c0-.025 0-.05-.003-.075A1 1 0 0 0 14 5H9zm-9 9.5A1.5 1.5 0 0 1 1.5 13h4A1.5 1.5 0 0 1 7 14.5v4A1.5 1.5 0 0 1 5.5 20h-4A1.5 1.5 0 0 1 0 18.5v-4z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgTransferMajor;
