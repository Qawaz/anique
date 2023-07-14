import * as React from 'react';
import { SVGProps } from 'react';
const SvgBehaviorMinor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    role="img"
    {...props}
  >
    <path
      fill="#5C5F62"
      d="M10.275 9.038a1 1 0 0 0-1.236 1.237l1.714 6a1 1 0 0 0 1.88.119l1.129-2.632 2.632-1.129a1 1 0 0 0-.12-1.88l-6-1.715ZM10 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1ZM5.05 5.05a1 1 0 0 1 1.414 0L7.88 6.464A1 1 0 0 1 6.464 7.88L5.05 6.464a1 1 0 0 1 0-1.414Zm9.9 0a1 1 0 0 1 0 1.414L13.536 7.88a1 1 0 1 1-1.415-1.415l1.415-1.414a1 1 0 0 1 1.414 0Zm-7.071 7.071a1 1 0 0 1 0 1.415L6.464 14.95a1 1 0 1 1-1.414-1.414l1.414-1.415a1 1 0 0 1 1.415 0ZM7 10a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Z"
    />
  </svg>
);
export default SvgBehaviorMinor;
