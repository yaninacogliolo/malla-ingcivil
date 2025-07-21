[0:26, 21/7/2025] Sebas Laguardia: document.addEventListener('DOMContentLoaded', () => {

    // --- Definición de Datos de la Malla Curricular ---
    const malla = [
        // Admisión y Primer Semestre
        { id: 'fe_ciencias', nombre: 'Fe y Ciencias', semestre: 0, prerequisitos: [], categoria: 'pastoral' },
        { id: 'historia_py', nombre: 'Historia del Paraguay', semestre: 0, prerequisitos: [], categoria: 'humanisticas' },
        { id: 'logica', nombre: 'Lógica Simbólica', semestre: 0, prerequisitos: [], categoria: 'basicas' },
        { id: 'comunicacion1', nombre: 'Comunicación Oral y Escrita 1', semestre: 0, prerequisitos: [], categoria: 'humanisticas' },
        { id: 'metodologia', nombre: 'Metodología del Aprendizaje', semestre: 0, prerequisitos: [], categoria: 'humanistic…
[0:26, 21/7/2025] Sebas Laguardia: style
[0:26, 21/7/2025] Sebas Laguardia: :root {
    --main-pink: #ffb6c1;
    --approved-green: #98fb98;
    --locked-gray: #e0e0e0;
    --text-color: #333;
    --border-color: #e0e0e0;
    --hover-pink: #ff9aa2;
    --background-color: #fef5f7;
    --header-color: #d8bfd8;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
}

.main-container {
    width: 100%;
    max-width: 1800px;
}

h1 {
    text-align: center;
    color: #8b5f8b;
    margin-bottom: 25px;
}

.malla-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 15px;
    padding: 10px;
}

.semestre-columna {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.semestre-titulo {
    font-weight: bold;
    text-align: center;
    padding: 10px;
    background-color: var(--header-color);
    color: white;
    border-radius: 8px;
    margin-bottom: 10px;
}

.materia {
    border: 1px solid var(--border-color);
    border-left: 5px solid var(--main-pink);
    border-radius: 8px;
    padding: 12px;
    text-align: center;
    font-size: 0.85em;
    transition: all 0.3s ease;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* --- Estados de la Materia --- */

.materia.disponible {
    cursor: pointer;
}

.materia.disponible:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    background-color: var(--hover-pink);
    color: white;
}

.materia.bloqueada {
    background-color: var(--locked-gray);
    color: #888;
    cursor: not-allowed;
    border-left-color: #b0b0b0;
}

.materia.aprobada {
    background-color: var(--approved-green);
    border-left-color: #5f9e5f;
    color: #333;
    font-weight: bold;
}

.materia.aprobada::after {
    content: ' ✔';
    color: green;
}

/* --- Colores por Categoría --- */
.materia[data-categoria="basicas"] { border-left-color: #6a9fca; }
.materia[data-categoria="ingenieria"] { border-left-color: #ffb6c1; }
.materia[data-categoria="aplicaciones"] { border-left-color: #d8bfd8; }
.materia[data-categoria="pastoral"] { border-left-color: #c0c0c0; }
.materia[data-categoria="humanisticas"] { border-left-color: #dda0dd; }
.materia[data-categoria="complementarias"] { border-left-color: #98fb98; }


/* Leyenda */
.legend {
    margin-top: 30px;
    padding: 15px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
}
.legend h3 {
    margin: 0;
    margin-right: 15px;
    color: #8b5f8b;
}
.legend-item {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    display: inline-block;
}
.legend span {
    margin-right: 10px;
}
