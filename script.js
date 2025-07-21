// Datos completos de la malla (estructurados según tu PDF)
const mallaData = {
    colores: {
        azul: "Ciencias Básicas",
        rosa: "Ciencias de la Ingeniería",
        gris: "Pastoral",
        violeta: "Humanísticas Comunes",
        magenta: "Aplicaciones de la Ingeniería",
        verde: "Complementarias",
        amarillo: "Optativas"
    },
    semestres: [
        // --- PRIMER AÑO ---
        {
            nombre: "Admisión (16 créditos)",
            materias: [
                { nombre: "Fe y Ciencias", creditos: 3, color: "gris", correlativas: [] },
                { nombre: "Historia del Paraguay", creditos: 2, color: "violeta", correlativas: [] },
                { nombre: "Lógica Simbólica", creditos: 3, color: "violeta", correlativas: [] },
                { nombre: "Comunicación Oral y Escrita 1", creditos: 3, color: "violeta", correlativas: ["Comunicación Oral y Escrita 2"] },
                { nombre: "Metodología del Aprendizaje", creditos: 2, color: "violeta", correlativas: [] },
                { nombre: "Matemática 1", creditos: 3, color: "azul", correlativas: ["Cálculo 1"] }
            ]
        },
        {
            nombre: "Primer Semestre (16 créditos)",
            materias: [
                { nombre: "Introducción al Dibujo Técnico", creditos: 3, color: "rosa", correlativas: ["Dibujo Técnico"] },
                { nombre: "Trigonometría", creditos: 3, color: "azul", correlativas: [] },
                { nombre: "Álgebra", creditos: 4, color: "azul", correlativas: ["Álgebra Vectorial"] },
                { nombre: "Geometría Analítica", creditos: 3, color: "azul", correlativas: [] },
                { nombre: "Introducción a la Ingeniería", creditos: 3, color: "rosa", correlativas: [] }
            ]
        },
        // --- SEGUNDO AÑO ---
        {
            nombre: "Tercer Semestre (27 créditos)",
            materias: [
                { nombre: "Representación Gráfica 1", creditos: 4, color: "rosa", correlativas: ["Topografía"] },
                { nombre: "Cálculo 2", creditos: 5, color: "azul", correlativas: ["Cálculo 3", "Ecuaciones Diferenciales"] },
                { nombre: "Álgebra Lineal", creditos: 4, color: "azul", correlativas: ["Mecánica Racional 1"] },
                // ... Agregar todas las materias restantes según el PDF
            ]
        },
        // ... Agregar TODOS los semestres restantes (hasta 5to año)
    ]
};

// Generar la malla automáticamente
document.addEventListener('DOMContentLoaded', () => {
    const mallaContainer = document.getElementById('malla-container');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');

    // Crear semestres
    mallaData.semestres.forEach(semestre => {
        const semestreDiv = document.createElement('div');
        semestreDiv.className = 'semestre';
        semestreDiv.innerHTML = `<h2>${semestre.nombre}</h2><div class="materias-container"></div>`;

        const materiasContainer = semestreDiv.querySelector('.materias-container');

        // Añadir materias
        semestre.materias.forEach(materia => {
            const materiaDiv = document.createElement('div');
            materiaDiv.className = `materia ${materia.color}`;
            materiaDiv.textContent = materia.nombre;
            
            materiaDiv.addEventListener('click', () => {
                document.getElementById('modal-title').textContent = materia.nombre;
                document.getElementById('creditos-info').textContent = materia.creditos;
                document.getElementById('categoria-info').textContent = mallaData.colores[materia.color];
                
                const correlativasList = document.getElementById('correlativas-list');
                correlativasList.innerHTML = materia.correlativas.length > 0 
                    ? materia.correlativas.map(c => `<li>${c}</li>`).join('')
                    : '<li>No tiene correlativas</li>';
                
                modal.style.display = 'block';
            });

            materiasContainer.appendChild(materiaDiv);
        });

        mallaContainer.appendChild(semestreDiv);
    });

    // Cerrar modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
