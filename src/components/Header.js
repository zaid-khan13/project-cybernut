import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 h-[60px] bg-slate-100">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 32 32"
        >
          <rect width="26" height="4" x="3" y="5" fill="#706d67"></rect>
          <rect width="26" height="4" x="3" y="14" fill="#706d67"></rect>
          <rect width="26" height="4" x="3" y="23" fill="#706d67"></rect>
        </svg>
      </span>
      <div>
        <img
          src={"/squirrel.svg"}
          alt="BigCo Inc. logo"
          className="h-10 w-10"
        />
      </div>
    </div>
  );
};

export default Header;
