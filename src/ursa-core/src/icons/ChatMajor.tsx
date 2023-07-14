import * as React from 'react';
import { SVGProps } from 'react';
const SvgChatMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10 0C4.486 0 0 4.486 0 10c0 1.728.45 3.42 1.304 4.924L.101 17.965c-.458 1.209.726 2.393 1.935 1.934l3.04-1.204A9.944 9.944 0 0 0 10 20c5.514 0 10-4.486 10-10S15.514 0 10 0zM5.293 9.293a.997.997 0 0 1 1.414 0 .997.997 0 0 1 0 1.414.997.997 0 0 1-1.414 0 .997.997 0 0 1 0-1.414zm4 0a.997.997 0 0 1 1.414 0 .997.997 0 0 1 0 1.414 1.003 1.003 0 0 1-1.414 0 1.003 1.003 0 0 1 0-1.414zM14 9a.997.997 0 0 0-1 1 .997.997 0 0 0 1 1 .997.997 0 0 0 1-1 .997.997 0 0 0-1-1z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgChatMajor;