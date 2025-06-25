// ruth.js

document.getElementById("header").textContent = "Piedra, Papel o Tijeras";

const opciones = ["Piedra", "Papel", "Tijeras"];

// Crear botones dinámicamente
opciones.forEach(opcion => {
  const boton = document.createElement("button");
  boton.textContent = opcion;
  boton.onclick = () => jugar(opcion);
  document.body.appendChild(boton);
});

const resultado = document.createElement("div");
resultado.id = "result";
document.body.appendChild(resultado);

function jugar(eleccionUsuario) {
  const eleccionMaquina = opciones[Math.floor(Math.random() * 3)];
  let mensaje = "";

  if (eleccionUsuario === eleccionMaquina) {
    mensaje = `Empate. Ambos eligieron ${eleccionUsuario}`;
  } else if (
    (eleccionUsuario === "Piedra" && eleccionMaquina === "Tijeras") ||
    (eleccionUsuario === "Papel" && eleccionMaquina === "Piedra") ||
    (eleccionUsuario === "Tijeras" && eleccionMaquina === "Papel")
  ) {
    mensaje = `¡Ganaste! ${eleccionUsuario} vence a ${eleccionMaquina}`;
  } else {
    mensaje = `Perdiste. ${eleccionMaquina} vence a ${eleccionUsuario}`;
  }

  resultado.textContent = mensaje;
}


