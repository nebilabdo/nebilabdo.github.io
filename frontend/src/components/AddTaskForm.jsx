import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const AddTaskForm = ({ setTasks }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  const handleAddTask = () => {
    if (title.trim() === "") {
      setError(true);
      return;
    }

    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: title.trim(), completed: false },
    ]);
    setTitle("");
    setError(false);
  };

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
      <TextField
        fullWidth
        label="New Task"
        variant="outlined"
        value={title}
        error={error}
        helperText={error ? "Task title cannot be empty" : ""}
        onChange={(e) => {
          setTitle(e.target.value);
          if (e.target.value.trim()) setError(false);
        }}
      />
      <Button variant="contained" onClick={handleAddTask}>
        Add
      </Button>
    </Box>
  );
};

export default AddTaskForm;
