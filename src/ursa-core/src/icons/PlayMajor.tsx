import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlayMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M4.333 1C3.64 1 3 1.555 3 2.332v15.335a1.328 1.328 0 0 0 2.014 1.143l12.787-7.665a1.33 1.33 0 0 0 0-2.283L5.015 1.192A1.326 1.326 0 0 0 4.333 1zM5 3.515l10.815 6.488L5 16.485V3.515z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgPlayMajor;
