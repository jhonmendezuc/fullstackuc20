import TaskService from "@/services/task.js";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  CardContent,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";

const token = localStorage.getItem("token");

const MenuSesion = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button id="demo-positioned-button" onClick={handleClick}>
        Bienvenido {props.user.name}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <MenuItem onClick={() => props.logOut()}>Cerrar sesión</MenuItem>
      </Menu>
    </div>
  );
};

const TaskCard = (props) => {
  const { id, title, description, status } = props.task;
  const deleteTask = async (id) => {
    await TaskService.deleteTask(id, token);
    alert("tarea eliminada");
  };

  const updateTask = async (id, data) => {
    await TaskService.updateTask(id, data, token);
    alert("tarea actualizada");
  };
  return (
    <Grid size={3}>
      <Card variant="outlined">
        <CardContent sx={{ m: 1 }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5">{title}</Typography>
            <Switch
              checked={status}
              onChange={(e) => updateTask(id, { status: e.target.checked })}
            />
            <Typography variant="caption" color="text.secondary">
              {description}
            </Typography>

            <br />
            <Typography variant="caption" color="text.secondary">
              <Button
                onClick={() => deleteTask(id)}
                sx={{
                  fontSize: "10px",
                }}
                variant="outlined"
                color="error"
              >
                Eliminar tarea
              </Button>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

const Task = (props) => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: false,
    userId: props.user.id,
  });
  const [open, setOpen] = useState(false);

  const createTask = async () => {
    const request = await TaskService.createTask(form, token);
    if (request) {
      setOpen(false);
      setTasks([...tasks, request]);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    async function getTask() {
      const request = await TaskService.getTask(token);
      setTasks(request);
    }
    getTask();
  }, [tasks]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Card variant="outlined" sx={{ m: 2 }}>
        <Paper>
          <Typography variant="h3">App TodoList</Typography>
          <MenuSesion logOut={props.logOut} user={props.user} />
        </Paper>
      </Card>
      <Fab
        sx={{
          top: 2,
          left: 20,
          backgroundColor: "#fde24f",
          color: "#000000",
          "&:hover": {
            backgroundColor: "#00214d",
            color: "#fde24f",
          },
        }}
      >
        <AddIcon onClick={handleOpen}>Crear tarea</AddIcon>
      </Fab>
      <Grid container spacing={2} sx={{ pt: 5, pl: 5, pr: 5 }}>
        {tasks.map((task) => {
          return <TaskCard task={task} key={task._id} />;
        })}
      </Grid>
      <Dialog open={open}>
        <DialogTitle>Crear tarea</DialogTitle>
        <DialogContent>
          <TextField
            label="titulo"
            name="title"
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2, mt: 2 }}
          />
          <TextField
            fullWidth
            label="descripcion"
            name="description"
            rows={4}
            multiline
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            variant="outlined"
            color="error"
          >
            Cancelar
          </Button>
          <Button onClick={createTask} variant="outlined" color="success">
            Crear
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Task;
