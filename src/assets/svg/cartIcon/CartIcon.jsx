import React from "react";

import "./CartIcon.css";

const CartIcon = ({ className }) => {
  return (
    <svg
      className={`svg-icon ${className}`}
      width="50px"
      height="50px"
      version="1.1"
      viewBox="0 0 700 700"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m115.16 61.613c-13.707-0.43359-16.027 19.426-2.5938 22.172l41.879 9.1992 10.762 51.219c0.003906 0.0625 0.015625 0.0625 0.023437 0.10547l53.371 241.71c1.1328 5.1289 5.6836 8.7812 10.938 8.7812h302.27c15.156 0.22266 15.156-22.625 0-22.398h-293.27l-10.301-46.668h318.83c5.2539 0 9.8008-3.6523 10.938-8.7812l38.125-172.65c1.543-6.9922-3.7773-13.617-10.938-13.617-133.32 0.003906-266.64 0-399.95-0.0625l-10.367-49.34c-0.90625-4.3125-4.2578-7.6953-8.5625-8.6406l-48.934-10.742c-0.72656-0.16797-1.4727-0.27344-2.2188-0.29688zm186.04 356.84c-21.914 0-39.887 18.047-39.887 39.977 0 21.926 17.973 39.977 39.887 39.977 21.914 0 39.887-18.047 39.887-39.977 0-21.93-17.973-39.977-39.887-39.977zm160.64 0c-21.914 0-39.887 18.047-39.887 39.977 0 21.926 17.973 39.977 39.887 39.977 21.914 0 39.887-18.047 39.887-39.977 0-21.93-17.973-39.977-39.887-39.977z" />
    </svg>
  );
};

export default CartIcon;