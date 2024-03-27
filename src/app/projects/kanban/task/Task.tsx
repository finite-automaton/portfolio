import { Task } from "../types";

import styles from "./task.module.css";

type Props = {
  task: Task;
};

export default function Task({ task }: Props) {
  return (
    <div className={styles.card}>
      <p>{task.content}</p>
    </div>
  );
}
