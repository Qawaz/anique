import * as React from 'react';
import { SVGProps } from 'react';
const SvgThemeEditMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fill="#5C5F62"
      fillRule="evenodd"
      d="M0 1.5A1.5 1.5 0 0 1 1.5 0h5A1.5 1.5 0 0 1 8 1.5V2h5a1 1 0 1 1 0 2H8v1.5A1.5 1.5 0 0 1 6.5 7H5v2H3V7H1.5A1.5 1.5 0 0 1 0 5.5v-4zM2 5V2h4v3H2z"
    />
    <path
      fill="#5C5F62"
      d="M5 17v1h1v2H4.5A1.5 1.5 0 0 1 3 18.5V17h2zm-2-3v-3h2v3H3zm9 6H8v-2h4v2zm2-2h1v-1h2v1.5a1.5 1.5 0 0 1-1.5 1.5H14v-2zm2.907-13.159 2.252 2.252.375-.376a1.592 1.592 0 0 0-2.252-2.25l-.375.374zm1.218 3.283-2.251-2.251-7.143 7.143L8 16l2.982-.731 7.143-7.144z"
    />
  </svg>
);
export default SvgThemeEditMajor;
