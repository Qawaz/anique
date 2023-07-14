import * as React from 'react';
import { SVGProps } from 'react';
const SvgImageAltMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M12 11a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v3h1zm5-4a1 1 0 1 1 0 2h-1v3a1 1 0 1 1-2 0V9h-1a1 1 0 1 1 0-2h4zm-11.105.553 2 4a1 1 0 0 1-1.79.895L5.883 12H4.119l-.224.448a1 1 0 0 1-1.79-.895l2-4c.34-.678 1.45-.678 1.79 0z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgImageAltMinor;