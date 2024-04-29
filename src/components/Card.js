import React from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import Chip from "./Chip";

const Card = () => {
  return (
    <div className="card p-3 rounded-md bg-white flex flex-col gap-3">
      <div className="card_top flex gap-1">
        <div className="card_top_labels flex flex-1 gap-3">
          <Chip text="Frontend" color="red"></Chip>
        </div>
        <MoreHorizontal className="Card_svg  " />
      </div>
      <div className="card_title font-bold">Card title</div>
      <div className="card_footer flex justify-between items-center">
        <p className="flex gap-1 items-center">
          <Clock className="h-4 w-4" />
          19 Sept
        </p>
        <p className="flex gap-1 items-center">
          <CheckSquare className="h-4 w-4" /> 1/4
        </p>
      </div>
    </div>
  );
};

export default Card;
