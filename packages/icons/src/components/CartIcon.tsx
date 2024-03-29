import * as React from "react";

function SvgCartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M7.832 7.043h1.789a.489.489 0 00.484-.495.485.485 0 00-.484-.494H7.832a.485.485 0 00-.484.494c0 .27.213.495.484.495zm3.913-3.428c.394 0 .652.138.91.441.259.304.304.739.246 1.134l-.614 4.326a1.66 1.66 0 01-1.633 1.444H3.61c-.859 0-1.57-.672-1.64-1.543L1.376 2.23.4 2.058a.496.496 0 01.168-.975l1.54.236c.22.04.38.224.4.449l.123 1.477c.019.211.187.37.393.37h8.72zm-8.239 8.387a.992.992 0 00-.981 1.002.99.99 0 00.981.996.989.989 0 00.975-.996c0-.554-.439-1.002-.975-1.002zm7.264 0a.992.992 0 00-.982 1.002.99.99 0 00.982.996.989.989 0 00.975-.996c0-.554-.44-1.002-.975-1.002z"
      />
    </svg>
  );
}

export default SvgCartIcon;
