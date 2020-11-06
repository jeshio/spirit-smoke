import * as React from "react";

function SvgCallIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={11} height={11} viewBox="0 0 11 11" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M6.796.004a.469.469 0 00-.521.418.473.473 0 00.416.523A3.802 3.802 0 0110.06 4.32a.471.471 0 10.937-.105A4.739 4.739 0 006.796.004zM6.83 1.92a.474.474 0 00-.18.93c.767.15 1.36.743 1.51 1.512v.001a.473.473 0 10.925-.182A2.846 2.846 0 006.83 1.92zM7.7 7.2c.248-.142.529-.304.883-.229.32.068 1.412.954 1.711 1.262.196.2.305.408.322.616.03.815-1.078 1.746-1.28 1.862-.267.193-.579.29-.929.29-.357 0-.756-.102-1.191-.305-2.36-.984-5.964-4.518-6.918-6.86-.395-.871-.398-1.59-.006-2.13C.448 1.45 1.338.392 2.135.425c.212.019.418.128.62.326.306.3 1.17 1.395 1.237 1.716.074.357-.088.642-.232.891-.031.054-.072.117-.118.187-.172.265-.401.617-.32.842.581 1.427 1.924 2.672 3.351 3.256.22.08.573-.15.837-.323a4.32 4.32 0 01.184-.117L7.7 7.2z"
      />
    </svg>
  );
}

export default SvgCallIcon;