import { useState } from "react";
import {
  Container,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Stack,
  Box,
} from "@mui/material";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import { useThemeMode } from "./ThemeContext";
import { Switch, FormControlLabel } from "@mui/material";
import { IconButton, Tooltip } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Read a book", completed: true },
  ]);
  const [filter, setFilter] = useState("all");
  const { mode, toggleTheme } = useThemeMode();

  const handleFilterChange = (_, newFilter) => {
    if (newFilter !== null) setFilter(newFilter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" gutterBottom>
          Task Manager
        </Typography>
        <Tooltip title="Toggle light/dark mode">
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Tooltip>
      </Box>
      <AddTaskForm setTasks={setTasks} />

      <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={handleFilterChange}
          aria-label="task filter"
          color="primary"
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="completed">Completed</ToggleButton>
          <ToggleButton value="incomplete">Incomplete</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </Container>
  );
}

export default App;
