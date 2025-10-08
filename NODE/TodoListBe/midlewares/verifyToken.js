const validacion = (req, res, next) => {
  console.log("validando vt...");
  let usuarioSesion = true;

  if (usuarioSesion) {
    console.log("Usuario ya se ha logueado");
    return next();
  } else {
    res.status(401).send({
      message: "Usuario no logueado",
    });
  }
};

export default validacion;
