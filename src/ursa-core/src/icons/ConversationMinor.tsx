import * as React from 'react';
import { SVGProps } from 'react';
const SvgConversationMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M13 10a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm-4 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm-4 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm5-8c-4.411 0-8 3.589-8 8 0 1.504.425 2.908 1.15 4.111l-1.069 2.495a1 1 0 0 0 1.314 1.313l2.494-1.069A7.939 7.939 0 0 0 10 18c4.411 0 8-3.589 8-8s-3.589-8-8-8z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgConversationMinor;
