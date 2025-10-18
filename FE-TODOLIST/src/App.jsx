import Login from "@/login/login.jsx";
import Task from "@/task/task.jsx";
function App() {
  const sesion = false;

  if (sesion) {
    return <Task />;
  } else {
    return (
      <>
        <h1 className="prueba">Todo List</h1>
        <Login />
      </>
    );
  }
}

export default App;
