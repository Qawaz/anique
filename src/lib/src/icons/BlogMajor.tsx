import * as React from 'react';
import { SVGProps } from 'react';
const SvgBlogMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M16 2a2 2 0 0 1 4 0v1h-4V2zM8.379 1a1.5 1.5 0 0 1 1.06.44l4.122 4.12A1.5 1.5 0 0 1 14 6.622V17.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1h5.879zM4 5h4v2H4V5zm7 4v2H4V9h7zm-7 6v-2h5v2H4zM16 5h4v11l-2 4-2-4V5z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgBlogMajor;