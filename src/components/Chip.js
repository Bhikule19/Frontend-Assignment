import React from "react";
import { X } from "react-feather";

const Chip = (props) => {
  return (
    <div
      className="chip flex gap-3 items-center py-1 px-2 rounded-[40px] text-sm w-fit"
      style={{ backgroundColor: props.color }}
    >
      {props.text}
      {props.close && (
        <X
          onClick={props.onClose ? props.onclose() : ""}
          className="w-4 h-4 cursor-pointer"
        />
      )}
    </div>
  );
};

export default Chip;
