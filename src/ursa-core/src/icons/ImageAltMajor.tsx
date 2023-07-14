import * as React from 'react';
import { SVGProps } from 'react';
const SvgImageAltMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M4.895 6.553c-.34-.678-1.45-.678-1.79 0l-3 6a1 1 0 1 0 1.79.894L2.619 12h2.764l.723 1.447a1 1 0 0 0 1.789-.894l-3-6zM13 12h-2V7a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2zm6-6h-4a1 1 0 1 0 0 2h1v5a1 1 0 1 0 2 0V8h1a1 1 0 1 0 0-2zM3.619 10 4 9.236l.382.764h-.763z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgImageAltMajor;
