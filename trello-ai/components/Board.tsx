"use client";
import { useBearStore, useBoardStore } from "@/store/BoardStore";
import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Board() {
  const getBoard = useBoardStore((state) => state.getBoard);

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <h2>hello</h2>
    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => <div>{/* ALL COLUMNS */}</div>}
    //   </Droppable>
    // </DragDropContext>
  );
}

export default Board;
