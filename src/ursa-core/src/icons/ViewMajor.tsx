import * as React from 'react';
import { SVGProps } from 'react';
const SvgViewMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fill="#5C5F62"
      fillRule="evenodd"
      d="M19.928 9.629C17.791 4.286 13.681 1.85 9.573 2.064c-4.06.21-7.892 3.002-9.516 7.603L-.061 10l.118.333c1.624 4.601 5.455 7.393 9.516 7.603 4.108.213 8.218-2.222 10.355-7.565l.149-.371-.149-.371zM10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
    />
    <circle fill="#5C5F62" cx={10} cy={10} r={3} />
  </svg>
);
export default SvgViewMajor;
