import React from "react";
import { MoreHorizontal } from "react-feather";
import Card from "./Card";
import Editable from "./Editable";

const Board = () => {
  return (
    <div className="board min-w-[24rem] flex flex-col gap-8 max-h-full h-full">
      <div className="board_top flex ">
        <p className="board_top_title flex flex-1 items-center">
          To Do <span className="text-gray-500">2</span>
        </p>
        <MoreHorizontal />
      </div>
      <div className="board_cards bg-gray-100 flex flex-col gap-3 p-2 h-full flex-1 overflow-y-auto custom-scroll">
        <Card> </Card>
        <Card> </Card>
        <Editable
          displayClass="board_card_add"
          text="Add Card"
          placeholder="Enter the Card Title"
        />
      </div>
    </div>
  );
};

export default Board;
