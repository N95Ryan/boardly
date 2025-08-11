import { BoardData, Task, UserAvatar } from "@/lib/types";
import axios from "axios";

/**
 * Fetches todos from DummyJSON and maps them into the local BoardData shape.
 * We split tasks into three columns based on completion and a small portion
 * of pending tasks are marked as "in-progress" to make the board feel alive.
 */
export async function fetchBoardDataFromDummyJSON(offset = 0, limit = 30): Promise<BoardData> {
  const { data: json } = await axios.get<{
    todos: Array<{ id: number; todo: string; completed: boolean }>;
  }>("https://dummyjson.com/todos", { params: { limit, skip: offset } });

  // Map raw todos to our Task type. We also attach simple mock metrics.
  const allTasks: Task[] = json.todos.map((t) => ({
    id: `d-${t.id}`,
    title: t.todo,
    // Lightweight randomization to make the UI varied yet deterministic
    comments: (t.id % 7) + ((t.completed ? 2 : 0) as number),
    files: t.id % 5,
  }));

  // Partition into columns. Completed -> done. Others -> todo, with a
  // portion promoted to in-progress for a realistic distribution.
  const doneTasks = json.todos
    .filter((t) => t.completed)
    .map((t) => allTasks.find((x) => x.id === `d-${t.id}`)!)
    .filter(Boolean);

  const pendingTasks = json.todos
    .filter((t) => !t.completed)
    .map((t) => allTasks.find((x) => x.id === `d-${t.id}`)!)
    .filter(Boolean);

  // Promote roughly 30% of pending tasks to in-progress (spread out by id)
  const inProgressTasks: Task[] = [];
  const todoTasks: Task[] = [];
  for (const task of pendingTasks) {
    const numericId = Number(task.id.replace("d-", ""));
    if (numericId % 10 < 3) {
      inProgressTasks.push(task);
    } else {
      todoTasks.push(task);
    }
  }

  const board: BoardData = {
    columns: [
      { id: "todo", title: "To Do", tasks: todoTasks },
      { id: "in-progress", title: "In Progress", tasks: inProgressTasks },
      { id: "done", title: "Done", tasks: doneTasks },
    ],
  };

  return board;
}

/**
 * Fetches a small list of users from DummyJSON to be used as project participants.
 * The offset parameter lets us vary users per project.
 */
export async function fetchAvatarsFromDummyJSON(offset = 0, limit = 6): Promise<UserAvatar[]> {
  const { data } = await axios.get<{ users: Array<{ id: number; firstName: string; lastName: string; image?: string }> }>(
    "https://dummyjson.com/users",
    { params: { limit, skip: offset } }
  );

  return data.users.map((u) => ({
    id: `u-${u.id}`,
    name: `${u.firstName} ${u.lastName}`,
    image: u.image,
  }));
}


