"use client";

import { useState } from "react";
import { BoardData } from "./types";
import { Board } from "./board/Board";

const sampleData: BoardData = {
  tasks: [
    { id: "task1", content: "first task" },
    { id: "task2", content: "second task" },
    { id: "task3", content: "third task" },
    { id: "task4", content: "fourth task" },
    { id: "task5", content: "fifth task" },
    { id: "task6", content: "sixth task" },
    { id: "task7", content: "seventh task" },
  ],
  columns: [
    {
      id: "column1",
      title: "todo",
      taskIds: ["task1", "task3", "task5", "task7"],
    },
    { id: "column2", title: "done", taskIds: ["task2", "task4", "task6"] },
  ],
  columnOrder: ["column1", "column2"],
};

export default function GridPlayground() {
  const [currentBoard, setCurrentBoard] = useState<BoardData>(sampleData);

  return <Board boardData={currentBoard} />;
}
