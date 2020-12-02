import * as React from "react";

function SvgCloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={8} height={8} viewBox="0 0 8 8" fill="none" {...props}>
      <path d="M4.216 3.456L6.969.703l.696.696-2.753 2.753 2.995 2.996-.752.752L4.16 4.904 1.463 7.602l-.696-.697 2.697-2.697L.568 1.312 1.32.56l2.896 2.896z" />
    </svg>
  );
}

export default SvgCloseIcon;
