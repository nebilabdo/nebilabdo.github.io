import { ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => onDelete(task.id)}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <Checkbox
        edge="start"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        tabIndex={-1}
        sx={{ ml: 1 }}
      />
      <ListItemText
        primary={task.title}
        sx={{
          textDecoration: task.completed ? "line-through" : "none",
          ml: 1,
        }}
      />
    </ListItem>
  );
};

export default TaskItem;
