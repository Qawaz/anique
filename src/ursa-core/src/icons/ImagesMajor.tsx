import * as React from 'react';
import { SVGProps } from 'react';
const SvgImagesMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M19 16a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14zM6.426 14C6.173 14 6 13.809 6 13.604c0-.08.026-.162.083-.236l3.046-3.24a.448.448 0 0 1 .617-.009l1.397 1.481 2.623-3.825a.446.446 0 0 1 .72.016l3.462 5.609c.154.272-.052.6-.377.6H6.426zM11 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM0 4.5A1.5 1.5 0 0 1 1.5 3H2v15h15v.5a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 0 18.5v-14z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgImagesMajor;