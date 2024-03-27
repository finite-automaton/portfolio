import styles from "./styles.module.css";

import Column from "../column/Column";
import { BoardData, Column as ColumnT, Task } from "../types";

type Props = { boardData: BoardData };

const getTasksForColumn = (
  tasks: Task[],
  columns: ColumnT[],
  columnId: string
) => {
  return tasks.filter((task) =>
    columns.find((column) => columnId === column.id)?.taskIds.includes(task.id)
  );
};

export const Board = ({ boardData }: Props) => {
  return (
    <section className={styles.kanbanBoard}>
      {boardData.columns.map((column) => (
        <Column
          key={column.id}
          column={column}
          tasks={getTasksForColumn(
            boardData.tasks,
            boardData.columns,
            column.id
          )}
        />
      ))}
    </section>
  );
};
