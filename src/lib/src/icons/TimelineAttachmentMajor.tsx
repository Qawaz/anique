import * as React from 'react';
import { SVGProps } from 'react';
const SvgTimelineAttachmentMajor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fill="#5C5F62"
      d="M17 4a1 1 0 0 1 1 1v13.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 18.5v-17A1.5 1.5 0 0 1 3.5 0H8v2H4v16h12V5a1 1 0 0 1 1-1z"
    />
    <path
      fill="#5C5F62"
      d="M8 5v6c0 1.206.799 3 3 3s3-1.794 3-3V3c0-1.206-.799-3-3-3h-1v2h1c.805 0 .988.55 1 1v7.988c-.012.462-.195 1.012-1 1.012-.805 0-.988-.55-1-1V5a1 1 0 1 0-2 0z"
    />
  </svg>
);
export default SvgTimelineAttachmentMajor;