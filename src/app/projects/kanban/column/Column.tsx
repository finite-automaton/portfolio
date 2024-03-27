import Task from "../task/Task";
import { Column, Task as TaskT } from "../types";

import styles from "./styles.module.css";

type Props = {
  column: Column;
  tasks: TaskT[];
};

export default function Column({ column, tasks }: Props) {
  return (
    <div className={styles.column}>
      <h1 className={styles.title}>{column.title}</h1>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
