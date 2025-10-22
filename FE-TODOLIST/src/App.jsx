import Login from "@/login/login.jsx";
import Task from "@/task/task.jsx";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

function App() {
  const [sesion, setSesion] = useState(false);

  useEffect(() => {
    const sesion = localStorage.getItem("sesion");
    if (sesion) {
      setSesion(true);
    }
  }, []);

  const logOut = () => {
    localStorage.clear();
    setSesion(false);
  };

  if (sesion) {
    const user = jwtDecode(localStorage.getItem("token")).data;
    console.log(user);
    return <Task user={user} logOut={logOut} />;
  } else {
    return (
      <>
        <Login />
      </>
    );
  }
}

export default App;
