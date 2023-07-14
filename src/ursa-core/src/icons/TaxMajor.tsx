import * as React from 'react';
import { SVGProps } from 'react';
const SvgTaxMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M4.5 0h11c.828 0 1.5.677 1.5 1.512v18.21a.2.2 0 0 1-.334.149l-1.664-1.515a.497.497 0 0 0-.67 0l-1.664 1.514a.497.497 0 0 1-.67 0l-1.663-1.514a.497.497 0 0 0-.67 0L8.002 19.87a.497.497 0 0 1-.67 0l-1.664-1.514a.497.497 0 0 0-.67 0l-1.664 1.559a.2.2 0 0 1-.334-.15V1.512C3 .677 3.672 0 4.5 0zm3 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-.293-4.793a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 1 0 1.414 1.414l6-6z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgTaxMajor;
