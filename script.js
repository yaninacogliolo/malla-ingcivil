const contenedor = document.getElementById("contenedorMalla");
const filtroTipo = document.getElementById("filtroTipo");

let materias = [];

fetch("malla.json")
  .then(res => res.json())
  .then(data => {
    materias = data.semestres;
    renderMalla();
  });

filtroTipo.addEventListener("change", renderMalla);

function renderMalla() {
  const tipoSeleccionado = filtroTipo.value;
  contenedor.innerHTML = "";

  materias.forEach(semestre => {
    const bloque = document.createElement("div");
    bloque.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = `${semestre.numero}° Semestre`;
    bloque.appendChild(titulo);

    semestre.materias.forEach(materia => {
      if (tipoSeleccionado === "todos" || materia.color === tipoSeleccionado) {
        const card = document.createElement("div");
        card.className = `materia ${materia.color}`;
        card.innerHTML = `
          ${materia.nombre}
          <div class="correlativas">
            ${materia.correlativas?.length ? `Requiere: ${materia.correlativas.join(", ")}` : ""}
          </div>
        `;
        bloque.appendChild(card);
      }
    });

    contenedor.appendChild(bloque);
  });
}

// Buscador por nombre
const inputBuscar = document.createElement("input");
inputBuscar.placeholder = "Buscar materia...";
inputBuscar.style.margin = "1rem";
inputBuscar.oninput = () => {
  const texto = inputBuscar.value.toLowerCase();
  document.querySelectorAll(".materia").forEach(m => {
    m.style.display = m.textContent.toLowerCase().includes(texto) ? "block" : "none";
  });
};

filtroTipo.parentElement.appendChild(inputBuscar);

