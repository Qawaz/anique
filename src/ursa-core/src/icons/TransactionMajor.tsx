import * as React from 'react';
import { SVGProps } from 'react';
const SvgTransactionMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M11.293 8.293 12.586 7H3v11a1 1 0 1 1-2 0V2a1 1 0 0 1 2 0v3h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l2.999 2.999a1 1 0 0 1 0 1.416l-2.999 2.999A.998.998 0 0 1 11 9a1 1 0 0 1 .293-.707zM18 1a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0v-3H7.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-2.999-2.999a1 1 0 0 1 0-1.416l2.999-2.999a1 1 0 0 1 1.414 1.414L7.414 13H17V2a1 1 0 0 1 1-1z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgTransactionMajor;
