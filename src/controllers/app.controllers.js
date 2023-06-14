//mi controlador
peticion = {};

// peticion GET
peticion.get = (req, res) => {
  res.send("Peticion GET");
};

// peticion POST
peticion.post = (req, res) => {
  res.send("Peticion POST");
};

// peticion PUT
peticion.put = (req, res) => {
  res.send("Peticion PUT");
};

// peticion DELETE
peticion.delete = (req, res) => {
  res.send("Peticion DELETE");
};

//exportamos las funciones
module.exports = peticion;
