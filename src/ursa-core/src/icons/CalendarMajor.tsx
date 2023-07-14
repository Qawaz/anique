import * as React from 'react';
import { SVGProps } from 'react';
const SvgCalendarMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M17.5 2H15V1a1 1 0 1 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2.5C1.7 2 1 2.7 1 3.5v15c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5v-15c0-.8-.7-1.5-1.5-1.5zM3 18h14V8H3v10z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgCalendarMajor;
