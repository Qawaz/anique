import * as React from 'react';
import { SVGProps } from 'react';
const SvgGiftCardMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5 4.5C5 3.763 5.69 3 6.77 3 7.818 3 9 3.87 9 5.333V6h-.846c-.805 0-1.656-.011-2.306-.25-.302-.112-.498-.253-.621-.413C5.112 5.187 5 4.94 5 4.5zM11.846 6H11v-.667C11 3.87 12.181 3 13.23 3 14.31 3 15 3.763 15 4.5c0 .44-.112.686-.227.837-.123.16-.319.3-.621.412-.65.24-1.5.251-2.306.251zM17 4.5c0 .558-.103 1.06-.306 1.5H18.5A1.5 1.5 0 0 1 20 7.5V10H0V7.5A1.5 1.5 0 0 1 1.5 6h1.806A3.547 3.547 0 0 1 3 4.5C3 2.47 4.783 1 6.77 1c1.165 0 2.398.546 3.23 1.529C10.832 1.546 12.065 1 13.23 1 15.218 1 17 2.47 17 4.5zM9 20v-8H1v6.5c0 .83.67 1.5 1.5 1.5H9zm2 0v-8h8v6.5c0 .83-.67 1.5-1.5 1.5H11z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgGiftCardMajor;
