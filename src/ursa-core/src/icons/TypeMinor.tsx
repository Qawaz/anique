import * as React from 'react';
import { SVGProps } from 'react';
const SvgTypeMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="m10.824 3.58 3.93 11.006a1 1 0 0 0 .942.664h.429a.875.875 0 0 1 0 1.75H11.75a.875.875 0 0 1 0-1.75c.248 0 .42-.245.337-.479l-.766-2.146H6.929l-.766 2.146a.358.358 0 0 0 .337.479.875.875 0 0 1 0 1.75H3.875a.875.875 0 0 1 0-1.75.367.367 0 0 0 .345-.243L8.301 3.58A.875.875 0 0 1 9.125 3H10c.37 0 .7.232.824.58Zm-3.27 7.295 1.571-4.398 1.57 4.398h-3.14Z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgTypeMinor;
