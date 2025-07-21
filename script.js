document.addEventListener('DOMContentLoaded', () => {
    const mallaContainer = document.getElementById('malla-container');
    
    // Generar la malla
    mallaData.semestres.forEach(semestre => {
        const semestreDiv = document.createElement('div');
        semestreDiv.className = 'semestre';
        semestreDiv.innerHTML = `<h2>${semestre.nombre} (${semestre.creditos} créditos)</h2>`;
        
        semestre.materias.forEach(materia => {
            const materiaDiv = document.createElement('div');
            materiaDiv.className = `materia ${materia.color}`;
            materiaDiv.textContent = materia.nombre;
            materiaDiv.onclick = () => mostrarCorrelativas(materia.correlativas);
            semestreDiv.appendChild(materiaDiv);
        });
        
        mallaContainer.appendChild(semestreDiv);
    });
});

function mostrarCorrelativas(correlativas) {
    const lista = document.getElementById('lista-correlativas');
    const infoDiv = document.getElementById('info-correlativas');
    
    lista.innerHTML = '';
    if (correlativas.length === 0) {
        lista.innerHTML = '<li>No tiene correlativas.</li>';
    } else {
        correlativas.forEach(corr => {
            const item = document.createElement('li');
            item.textContent = corr;
            lista.appendChild(item);
        });
    }
    
    infoDiv.classList.remove('hidden');
}
