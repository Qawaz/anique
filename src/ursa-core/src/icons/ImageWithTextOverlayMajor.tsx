import * as React from 'react';
import { SVGProps } from 'react';
const SvgImageWithTextOverlayMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M11 1a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1zM8.083 4A6.002 6.002 0 0 0 14 9h2v9.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 18.5v-13A1.5 1.5 0 0 1 1.5 4h6.583zM5 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-2.574 7h11.145c.325 0 .531-.328.377-.6l-3.462-5.609a.446.446 0 0 0-.72-.016L7.143 15.6l-1.397-1.48a.449.449 0 0 0-.617.007l-3.045 3.241c-.206.264-.01.632.342.632z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgImageWithTextOverlayMajor;
