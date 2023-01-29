import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="square  border-black border border-solid h-24 w-full flex justify-center items-center text-2xl "
    >
      {props.value}
    </div>
  );
};

export default Square;
