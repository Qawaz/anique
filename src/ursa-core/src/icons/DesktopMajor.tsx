import * as React from 'react';
import { SVGProps } from 'react';
const SvgDesktopMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15H7c0 .525-.015.793-.144 1.053-.12.239-.416.61-1.303 1.053A1 1 0 0 0 6.022 19h7.956a1.004 1.004 0 0 0 .995-.77 1.001 1.001 0 0 0-.544-1.134c-.873-.439-1.166-.806-1.285-1.043-.13-.26-.144-.528-.144-1.053h4.5a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 17.5 1h-15zm8.883 16a2.621 2.621 0 0 1-.027-.053c-.357-.714-.357-1.42-.356-1.895V15H9v.052c0 .475.001 1.181-.356 1.895a2.913 2.913 0 0 1-.027.053h2.766zM17 11H3v2h14v-2z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgDesktopMajor;
