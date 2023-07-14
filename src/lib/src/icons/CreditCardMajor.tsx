import * as React from 'react';
import { SVGProps } from 'react';
const SvgCreditCardMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M0 4.5A1.5 1.5 0 0 1 1.5 3h17A1.5 1.5 0 0 1 20 4.5V6H0V4.5zM0 8v7.5A1.5 1.5 0 0 0 1.5 17h17a1.5 1.5 0 0 0 1.5-1.5V8H0zm7 4H2v-2h5v2z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgCreditCardMajor;