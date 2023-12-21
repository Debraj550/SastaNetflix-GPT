import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="my-2">
      <div className="px-4 py-2">
        <h1 className="text-red-600 font-bold text-4xl w-fit transition-all hover:scale-95 cursor-pointer">
          SASTA-NETFLIX
        </h1>
      </div>
    </div>
  );
};

export default Header;
