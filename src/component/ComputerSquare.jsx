import React from "react";

const CompuerSquare = (props) => {
  return (
    <div
      className="box-border flex items-center justify-center w-full text-4xl border-2 border-white border-solid h-28"
      {...props}
    >
      {props.x ? "x" : props.o ? "o" : ""}
    </div>
  );
};

export default CompuerSquare;
