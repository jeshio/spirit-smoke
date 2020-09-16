import * as React from "react";

function SvgSearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={11} height={11} viewBox="0 0 11 11" fill="none" {...props}>
      <path
        d="M7.943 4.322c0 1.823-1.522 3.323-3.426 3.323-1.905 0-3.427-1.5-3.427-3.323C1.09 2.5 2.612 1 4.517 1 6.42 1 7.943 2.5 7.943 4.322z"
        stroke="#CCCACA"
      />
      <path
        transform="scale(1.0133 .98652) rotate(45 -5.21 11.201)"
        stroke="#CCCACA"
        d="M0-.5h4.576"
      />
    </svg>
  );
}

export default SvgSearchIcon;
