const URL =
  "https://gist.githubusercontent.com/SuecoMarcus/a77af69f0e84c3125a5c0cf43a3ac41b/raw/918cd058b7e2286a36e79643c63a5ebca097d7c8/users.json";

let usuariosCompleto = [];
const cargarTabla = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      usuariosCompleto = data;
      mostrarTodosUsuarios(usuariosCompleto);
    })
    .catch((err) => console.log(err));
};
window.onload = cargarTabla;

const tabla = document.getElementById("tabla");

const mostrarTodosUsuarios = (usuarios) => {
  if (usuarios.length > 0) {
    document.getElementById("spinner").style.display = "none";
    usuarios.forEach((usuario) => {
      mostrarUnUsuario(usuario);
    });
  } else {
    mostrarTablaVacia();
  }
};

const mostrarUnUsuario = (usuario) => {
  tabla.innerHTML += `<tr>
  <td>${usuario.id}</td>
  <td>${usuario.firstname}</td>
  <td>${usuario.lastname}</td>
  <td>${usuario.age}</td>
</tr>`;
};
const mostrarTablaVacia = () => {
  tabla.innerHTML = `<tr><td class="error" colspan="4">Error. No existe Persona</td></tr>`;
};
const input = document.getElementById("input");

const filtrarTabla = () => {
  //console.log(input.value);
  mostrarUsuariosFiltrados(input.value);
};

const mostrarUsuariosFiltrados = (filtro) => {
  //console.log(filtro);
  tabla.innerHTML = "";
  let usuariosFiltrados = [];
  usuariosFiltrados = usuariosCompleto.filter((usuario) => {
    //console.log(String(usuario.id), filtro);
    if (
      String(usuario.id).includes(filtro) ||
      usuario.firstname.includes(filtro) ||
      usuario.lastname.includes(filtro) ||
      String(usuario.age).includes(filtro)
    ) {
      return usuario;
    }
  });
  // console.log(usuariosFiltrados, filtro);
  mostrarTodosUsuarios(usuariosFiltrados);
};
