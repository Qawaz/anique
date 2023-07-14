import * as React from 'react';
import { SVGProps } from 'react';
const SvgViewportNarrowMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M14.414 9H19a1 1 0 1 1 0 2h-4.586l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414L14.414 9zM5.707 6.293l3 3a.999.999 0 0 1 0 1.414l-3 3a.997.997 0 0 1-1.631-.324 1 1 0 0 1 .217-1.09L5.586 11H1a1 1 0 0 1 0-2h4.586L4.293 7.707a1 1 0 0 1 1.414-1.414zM8 2v4L6 4V1.5A1.5 1.5 0 0 1 7.5 0h5A1.5 1.5 0 0 1 14 1.5V4l-2 2V2H8zm6 14-2-2v4H8v-4l-2 2v2.5A1.5 1.5 0 0 0 7.5 20h5a1.5 1.5 0 0 0 1.5-1.5V16z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgViewportNarrowMajor;