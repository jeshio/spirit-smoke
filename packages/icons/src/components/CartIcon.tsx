import * as React from "react";

function SvgCartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M6 6a4 4 0 014-4h4a4 4 0 014 4v2h5.133L21.82 18.496A4 4 0 0117.85 22H6.149a4 4 0 01-3.969-3.504L.867 8H6V6zm6 2a1 1 0 010 2H3.133l1.03 8.248A2 2 0 006.149 20h11.704a2 2 0 001.984-1.752L20.867 10H16V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v2h4z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgCartIcon;
