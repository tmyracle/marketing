import React from "react";
import { IconProps } from ".";

export default function BPLogoIcon({
  className = "text-gray-100",
  size = 16,
}: IconProps): JSX.Element {
  return (
    <div className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.3134 7.99252C14.9136 8.3667 15.4834 8.83068 16 9.37699C15.3238 9.71375 14.6249 9.96071 13.9335 10.1253C14.3666 10.6791 14.7388 11.3078 15.0351 11.9963C14.283 12.0861 13.5385 12.0861 12.8395 11.9963C13.0522 12.6623 13.1814 13.3732 13.227 14.1216C12.49 13.9495 11.7911 13.7025 11.1605 13.3807C11.1225 14.0842 11.0009 14.8026 10.7806 15.5136C10.1424 15.1094 9.57265 14.638 9.09402 14.1216C8.82051 14.7652 8.45584 15.4013 8 16C7.54416 15.4013 7.17189 14.7652 6.89839 14.1216C6.41975 14.638 5.84995 15.102 5.21937 15.5136C4.99905 14.7951 4.86989 14.0767 4.83951 13.3807C4.21652 13.7025 3.51757 13.9495 2.78063 14.1216C2.8185 13.3828 2.94703 12.6664 3.15867 12.002C3.79966 11.9192 4.41792 11.7626 4.97623 11.5322C4.84707 12.1159 4.79389 12.7446 4.82428 13.3882C5.40928 13.0888 5.9335 12.7371 6.38174 12.333C6.46531 12.9317 6.63245 13.5378 6.88316 14.129C7.32381 13.6501 7.69608 13.1412 7.97718 12.6099C8.25828 13.1412 8.63055 13.6576 9.07879 14.129C9.32951 13.5378 9.49665 12.9317 9.58022 12.333C10.0285 12.7371 10.5603 13.0963 11.1453 13.3882C11.1757 12.7446 11.1225 12.1159 10.9933 11.5322C11.5555 11.7642 12.1785 11.9139 12.8243 11.9962C12.6268 11.3825 12.3608 10.8138 12.0342 10.3049C12.6571 10.3199 13.2953 10.26 13.9335 10.1178C13.5384 9.60892 13.0902 9.1599 12.604 8.79321C13.189 8.6136 13.7588 8.33671 14.3134 7.99246C13.7588 7.64821 13.189 7.3788 12.604 7.19919C13.0897 6.83284 13.53 6.38432 13.9324 5.86856C14.6216 6.01837 15.3183 6.26484 15.9924 6.60056C15.4758 7.14687 14.906 7.61833 14.3134 7.99252ZM13.9271 5.86568C14.352 5.31224 14.7239 4.67666 15.0275 3.99626C14.2754 3.90645 13.5385 3.91394 12.8319 4.00374C13.0446 3.3377 13.1738 2.61927 13.2118 1.87091C12.4748 2.04303 11.7759 2.28999 11.1529 2.61179C11.1149 1.91581 10.9934 1.19738 10.773 0.478952C10.1425 0.890552 9.57265 1.36202 9.09402 1.87091C8.82051 1.22732 8.44824 0.59869 7.9924 0C7.53656 0.59869 7.17189 1.2348 6.89839 1.87839C6.41975 1.36202 5.84995 0.890552 5.21937 0.486436C4.99905 1.19738 4.87749 1.91581 4.83951 2.61179C4.20893 2.28999 3.51757 2.04303 2.78063 1.87091C2.82621 2.61927 2.95537 3.3377 3.16809 4.00374C2.46154 3.91394 1.7246 3.91394 0.964862 4.00374C1.26116 4.69224 1.63343 5.32086 2.06648 5.87465C1.37512 6.0318 0.676163 6.27876 0 6.61553C0.516156 7.16134 1.0854 7.62499 1.685 7.99899C2.23531 7.65866 2.80058 7.38482 3.38079 7.20668C2.89456 6.83998 2.44632 6.39096 2.05125 5.88208C2.69703 5.73989 3.3352 5.68002 3.94299 5.70247C3.61631 5.19358 3.3504 4.62483 3.15287 4.01117C3.80624 4.09349 4.42162 4.24316 4.98383 4.47515C4.85467 3.88395 4.80149 3.25532 4.83188 2.61173C5.41688 2.90359 5.94869 3.2628 6.39693 3.66692C6.47291 3.07571 6.64005 2.46954 6.89076 1.87833C7.339 2.3498 7.71127 2.86617 7.99237 3.39751C8.27348 2.85869 8.63815 2.3498 9.08639 1.87085C9.3447 2.46206 9.51184 3.06823 9.59541 3.66692C10.0437 3.25532 10.5679 2.90359 11.1453 2.60424C11.1833 3.25532 11.1301 3.87646 11.0009 4.46767C11.5707 4.23568 12.1861 4.07852 12.8319 3.9962C12.6419 4.61734 12.376 5.1861 12.0494 5.69498C12.6627 5.66515 13.2911 5.72452 13.9271 5.86568ZM1.67315 8.00852C1.08539 8.38133 0.520304 8.84979 0.00759734 9.39195C0.679019 9.72636 1.37291 9.97221 2.05953 10.1222C2.45995 9.61027 2.89789 9.16488 3.38079 8.80069C2.79641 8.62127 2.2272 8.35224 1.67315 8.00852ZM2.06589 10.136C1.64385 10.6873 1.2744 11.3196 0.97246 11.9963C1.71978 12.0855 2.4521 12.0787 3.14707 11.9978C3.33688 11.379 3.60214 10.8122 3.9278 10.3049C3.32466 10.3346 2.69907 10.2759 2.06589 10.136Z"
          className="fill-current"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.6116 7.19915C12.1557 7.54339 11.6619 7.8128 11.1529 7.99989C11.6619 8.1795 12.1481 8.44891 12.6116 8.80064C12.0646 8.97276 11.51 9.06257 10.9629 9.06257C11.3808 9.4143 11.7455 9.8259 12.057 10.3049C11.4796 10.2824 10.9326 10.1776 10.4159 9.99802C10.6894 10.462 10.887 10.9784 11.0085 11.5322C10.4767 11.3151 9.99049 11.0308 9.57263 10.6865C9.6638 11.2104 9.6714 11.7642 9.59543 12.3254C9.16997 11.9438 8.8129 11.5172 8.53939 11.0532C8.44063 11.5846 8.25829 12.1009 7.99239 12.6023C7.72648 12.1009 7.54414 11.5846 7.44538 11.0532C7.17187 11.5172 6.8148 11.9438 6.38935 12.3254C6.31337 11.7642 6.32097 11.2179 6.41214 10.6865C5.99429 11.0308 5.51565 11.3151 4.98384 11.5322C5.1054 10.9859 5.30293 10.462 5.57643 9.99802C5.06741 10.1776 4.51281 10.2824 3.943 10.3049C4.2545 9.8259 4.61917 9.40682 5.03702 9.06257C4.49761 9.05508 3.943 8.96528 3.396 8.80064C3.85184 8.45639 4.34566 8.18698 4.85469 7.99989C4.33807 7.82029 3.85184 7.55088 3.396 7.20663C3.943 7.0345 4.49761 6.9447 5.04462 6.9447C4.63436 6.59297 4.26969 6.18137 3.9582 5.70242C4.528 5.72487 5.08261 5.82964 5.59163 6.00925C5.31812 5.54526 5.12059 5.02889 4.99904 4.4751C5.52897 4.6839 6.01364 4.96701 6.4305 5.30962C6.52257 5.81918 6.69628 6.30656 6.95896 6.75012C6.5487 6.41336 6.08526 6.15891 5.59143 5.97931C5.85734 6.43581 6.19162 6.83244 6.60188 7.17669C6.10046 6.99708 5.57624 6.91476 5.05202 6.91476C5.45468 7.25152 5.91052 7.51345 6.41195 7.70054C5.88013 7.70054 5.35592 7.79783 4.85449 7.97743C5.35592 8.15704 5.87254 8.25433 6.40435 8.25433C5.90293 8.43394 5.44708 8.70335 5.03683 9.04011C5.56864 9.04011 6.09286 8.95779 6.59428 8.77818C6.18403 9.11495 5.84974 9.51906 5.58384 9.97556C6.08526 9.79596 6.5487 9.54151 6.95136 9.20475C6.68545 9.66125 6.51071 10.1552 6.41954 10.6715C6.8298 10.3348 7.17168 9.93815 7.43759 9.48913C7.34642 10.0055 7.35402 10.5294 7.44519 11.0382C7.71109 10.5892 7.90103 10.0953 7.99219 9.58641C8.08336 10.1028 8.2733 10.5892 8.5392 11.0457C8.63037 10.5294 8.63797 10.013 8.5468 9.49661C8.81271 9.95311 9.16218 10.3497 9.56484 10.679C9.47368 10.1627 9.29894 9.67622 9.03303 9.21972C9.44329 9.55648 9.90672 9.81092 10.4081 9.99053C10.1422 9.53403 9.80796 9.1374 9.3977 8.79315C9.89913 8.97276 10.4233 9.05508 10.9552 9.05508C10.5525 8.71831 10.0967 8.45639 9.59523 8.2693C10.127 8.2693 10.6513 8.17201 11.1451 7.9924C10.6437 7.81279 10.127 7.71551 9.59523 7.71551C10.0967 7.5359 10.5525 7.26649 10.9552 6.92973C10.4233 6.92973 9.89913 7.01205 9.3977 7.19165C9.80796 6.85489 10.1422 6.45077 10.4081 5.99427C9.90672 6.17388 9.45088 6.42832 9.04063 6.76509C9.30653 6.30858 9.48127 5.81467 9.57244 5.30578C9.16218 5.64254 8.8203 6.03917 8.5468 6.49568C8.63797 5.9793 8.63037 5.45545 8.5392 4.93908C8.2733 5.3881 8.09096 5.87453 7.99979 6.38342C7.90862 5.86705 7.71869 5.37313 7.45278 4.92411C7.36161 5.44048 7.35402 5.96434 7.44519 6.48071C7.1803 6.02596 6.83248 5.63062 6.43178 5.2947C6.3436 4.76903 6.33705 4.22161 6.41214 3.66687C6.83759 4.04854 7.19467 4.4751 7.46817 4.93909C7.55934 4.41523 7.74927 3.89886 8.00758 3.39746C8.27349 3.89886 8.45582 4.42272 8.55459 4.95406C8.82809 4.49007 9.18517 4.05602 9.61062 3.67436C9.68659 4.23563 9.679 4.78942 9.58783 5.32075C10.0057 4.97651 10.4843 4.69213 11.0161 4.4751C10.8946 5.02889 10.697 5.54526 10.4235 6.00925C10.9326 5.82216 11.4872 5.71739 12.057 5.69494C11.7531 6.17389 11.3884 6.59297 10.9705 6.93722C11.51 6.9447 12.0646 7.02702 12.6116 7.19915Z"
          className="fill-current"
        />
      </svg>
    </div>
  );
}
