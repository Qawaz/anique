import * as React from 'react';
import { SVGProps } from 'react';
const SvgSlideshowMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M1 2.5A1.5 1.5 0 0 1 2.5 1h15A1.5 1.5 0 0 1 19 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 14.5v-12zM9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm6.57 9H4.427c-.351 0-.548-.368-.343-.632l3.046-3.24a.448.448 0 0 1 .617-.009L9.143 11.6l2.623-3.825a.446.446 0 0 1 .72.016l3.462 5.609c.154.272-.052.6-.377.6z"
      fill="#5C5F62"
    />
    <path
      d="M6 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgSlideshowMajor;