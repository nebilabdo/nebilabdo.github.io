import { List, Paper } from "@mui/material";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setTasks }) => {
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <Paper elevation={3}>
      <List>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </List>
    </Paper>
  );
};

export default TaskList;
