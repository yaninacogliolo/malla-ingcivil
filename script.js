document.addEventListener('DOMContentLoaded', () => {
    const malla = [
        // Primer Año
        {
            nombre: "Admisión",
            creditos: 16,
            materias: [
                { nombre: "Fe y Ciencias", color: "gris", correlativas: [] },
                { nombre: "Historia del Paraguay", color: "violeta", correlativas: [] },
                { nombre: "Lógica Simbólica", color: "violeta", correlativas: [] },
                { nombre: "Comunicación Oral y Escrita 1", color: "violeta", correlativas: ["Comunicación Oral y Escrita 2"] },
                { nombre: "Metodología del Aprendizaje", color: "violeta", correlativas: [] },
                { nombre: "Matemática 1", color: "azul", correlativas: ["Cálculo 1"] }
            ]
        },
        {
            nombre: "Primer Semestre",
            creditos: 16,
            materias: [
                { nombre: "Introducción al Dibujo Técnico", color: "rosa", correlativas: ["Dibujo Técnico"] },
                { nombre: "Trigonometría", color: "azul", correlativas: [] },
                { nombre: "Álgebra", color: "azul", correlativas: ["Álgebra Vectorial"] },
                { nombre: "Geometría Analítica", color: "azul", correlativas: [] },
                { nombre: "Introducción a la Ingeniería", color: "rosa", correlativas: [] }
            ]
        },
        // ... Agrega aquí TODOS los semestres del PDF siguiendo el mismo formato
    ];

    const mallaContainer = document.getElementById('malla');
    
    malla.forEach(semestre => {
        const semestreDiv = document.createElement('div');
        semestreDiv.className = 'semestre';
        semestreDiv.innerHTML = `<h2>${semestre.nombre} (${semestre.creditos} créditos)</h2>`;
        
        semestre.materias.forEach(materia => {
            const materiaDiv = document.createElement('div');
            materiaDiv.className = `materia ${materia.color}`;
            materiaDiv.textContent = materia.nombre;
            materiaDiv.onclick = () => showCorrelativas(materia.correlativas);
            semestreDiv.appendChild(materiaDiv);
        });
        
        mallaContainer.appendChild(semestreDiv);
    });
});

function showCorrelativas(correlativas) {
    const list = document.getElementById('correlativas-list');
    const infoDiv = document.getElementById('correlativas-info');
    
    list.innerHTML = '';
    if (correlativas.length === 0) {
        list.innerHTML = '<li>No tiene correlativas.</li>';
    } else {
        correlativas.forEach(corr => {
            const item = document.createElement('li');
            item.textContent = corr;
            list.appendChild(item);
        });
    }
    
    infoDiv.classList.remove('hidden');
}
