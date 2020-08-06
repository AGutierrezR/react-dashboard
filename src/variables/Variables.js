// Para Axios
const axiosURL = {
  clients: 'http://localhost:3001/clients',
  products: 'http://localhost:3001/products',
}

// Para las tablas
const thClientArray = ["ID", "Nombre", "Apellidos", "Email", "Acciones"];
const thProductArray = ["ID", "Nombre", "Compania", "Precio", "Acciones"];

module.exports = {
  axiosURL,
  thClientArray,
  thProductArray
};