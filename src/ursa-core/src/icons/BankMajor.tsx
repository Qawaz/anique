import * as React from 'react';
import { SVGProps } from 'react';
const SvgBankMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M0 6h20c0-.604-.368-1.147-.928-1.371l-8.515-3.406a1.5 1.5 0 0 0-1.114 0L.928 4.629C.368 4.853 0 5.396 0 6zm0 2v1a1 1 0 0 0 1 1v7a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2v-7a1 1 0 0 0 1-1V8H0zm4 2h2v7H4v-7zm7 0H9v7h2v-7zm3 0h2v7h-2v-7z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgBankMajor;