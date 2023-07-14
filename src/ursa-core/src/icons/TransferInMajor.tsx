import * as React from 'react';
import { SVGProps } from 'react';
const SvgTransferInMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M8.586 13H2a1 1 0 0 1 0-2h6.586L7.293 9.707a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.997.997 0 0 1-1.631-.324 1 1 0 0 1 .217-1.09L8.586 13zM19 18.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 18.5V15h2v3h14V5.618l-7-3.5-7 3.5V9H1V5c0-.379.214-.725.553-.895l8-4c.281-.14.613-.14.894 0l8 4c.339.17.553.516.553.895v13.5z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgTransferInMajor;
