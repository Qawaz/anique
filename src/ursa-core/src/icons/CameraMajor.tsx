import * as React from 'react';
import { SVGProps } from 'react';
const SvgCameraMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5.74 1.786A1.5 1.5 0 0 1 7.059 1h5.855a1.5 1.5 0 0 1 1.315.777l.55 1c.04.074.073.148.1.223H18.5A1.5 1.5 0 0 1 20 4.5v11a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 0 15.5v-11A1.5 1.5 0 0 1 1.5 3h3.603c.025-.072.057-.144.095-.214l.542-1zM2 5h3v2H2V5zm12 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgCameraMajor;
