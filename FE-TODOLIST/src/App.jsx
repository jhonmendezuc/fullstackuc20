import Login from "./login/Login.jsx";
import Task from "./task/Task.jsx";
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
