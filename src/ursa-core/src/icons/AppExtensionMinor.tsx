import * as React from 'react';
import { SVGProps } from 'react';
const SvgAppExtensionMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M9 17H4.5A1.5 1.5 0 0 1 3 15.5V11h6v6zm8-6v4.5a1.5 1.5 0 0 1-1.5 1.5H11v-6h6zM9 9H3V4.5A1.5 1.5 0 0 1 4.5 3H9v6zm10-7v5c0 .55-.45 1-1 1s-1-.45-1-1V4.42l-4.29 4.29c-.2.19-.45.29-.71.29-.26 0-.51-.1-.71-.29-.39-.39-.39-1.03 0-1.42L15.58 3H13c-.55 0-1-.45-1-1s.45-1 1-1h5c.08 0 .17.01.25.04.05 0 .09.02.14.04.12.05.23.12.32.21s.16.2.21.32c.02.05.04.09.04.14.03.08.04.17.04.25z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgAppExtensionMinor;
