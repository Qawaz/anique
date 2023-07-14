import * as React from 'react';
import { SVGProps } from 'react';
const SvgButtonMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M2 5.5A1.5 1.5 0 0 1 3.5 4h13A1.5 1.5 0 0 1 18 5.5v4.95l-4.014-2.59c-1.71-1.104-3.953.19-3.853 2.224L10.278 13H3.5A1.5 1.5 0 0 1 2 11.5v-6z"
      fill="#5C5F62"
    />
    <path
      d="M12.131 9.999a.5.5 0 0 1 .77-.445l4.869 3.142a.5.5 0 0 1-.021.853l-1.425.823 1.229 2.128a1 1 0 1 1-1.732 1l-1.23-2.128-1.424.822a.5.5 0 0 1-.75-.408L12.131 10z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgButtonMinor;
