import * as React from 'react';
import { SVGProps } from 'react';
const SvgHintMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M10 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zm2 17v1.5a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 8 18.5V17h4zm6-8a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1zM0 10a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1zm4.343-7.071A1 1 0 0 0 2.93 4.343l.707.707A1 1 0 1 0 5.05 3.636l-.707-.707zM14.95 5.05a1 1 0 0 1 0-1.414l.707-.707a1 1 0 1 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414 0zm-1.682 6.257C12.65 12.181 12 13.124 12 14.195V15H8v-.805c0-1.07-.65-2.014-1.268-2.888a4 4 0 1 1 6.536 0z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgHintMajor;
