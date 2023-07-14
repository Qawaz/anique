import * as React from 'react';
import { SVGProps } from 'react';
const SvgConnectMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M14 8c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm-6 6c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm6-12c-1.858 0-3.411 1.28-3.857 3H10c-2.757 0-5 2.243-5 5v.142c-1.721.447-3 2-3 3.858 0 2.206 1.794 4 4 4s4-1.794 4-4c0-1.858-1.279-3.411-3-3.858V10c0-1.654 1.346-3 3-3h.143c.446 1.72 1.999 3 3.857 3 2.206 0 4-1.794 4-4s-1.794-4-4-4z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgConnectMinor;