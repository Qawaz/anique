import * as React from 'react';
import { SVGProps } from 'react';
const SvgMicrophoneMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M6 4a4 4 0 1 1 8 0v4a4 4 0 0 1-8 0V4zM11 15v4H9v-4h2z"
      fill="#5C5F62"
    />
    <path
      d="M4 8a6 6 0 0 0 12 0h2A8 8 0 1 1 2 8h2zM16 6h.5A1.5 1.5 0 0 1 18 7.5V8h-2V6zM2 7.5A1.5 1.5 0 0 1 3.5 6H4v2H2v-.5zm5 12A1.5 1.5 0 0 1 8.5 18h3a1.5 1.5 0 0 1 1.5 1.5v.5H7v-.5z"
      fill="#5C5F62"
    />
  </svg>
);
export default SvgMicrophoneMajor;
