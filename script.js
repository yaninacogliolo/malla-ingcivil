document.addEventListener('DOMContentLoaded', () => {

    // --- Definición de Datos de la Malla Curricular ---
    const malla = [
        // Admisión y Primer Semestre
        { id: 'fe_ciencias', nombre: 'Fe y Ciencias', semestre: 0, prerequisitos: [], categoria: 'pastoral' },
        { id: 'historia_py', nombre: 'Historia del Paraguay', semestre: 0, prerequisitos: [], categoria: 'humanisticas' },
        { id: 'logica', nombre: 'Lógica Simbólica', semestre: 0, prerequisitos: [], categoria: 'basicas' },
        { id: 'comunicacion1', nombre: 'Comunicación Oral y Escrita 1', semestre: 0, prerequisitos: [], categoria: 'humanisticas' },
        { id: 'metodologia', nombre: 'Metodología del Aprendizaje', semestre: 0, prerequisitos: [], categoria: 'humanisticas' },
        { id: 'matematica_adm', nombre: 'Matemática (Admisión)', semestre: 0, prerequisitos: [], categoria: 'basicas' },
        { id: 'intro_dibujo', nombre: 'Introducción al Dibujo Técnico', semestre: 1, prerequisitos: [], categoria: 'ingenieria' },
        { id: 'trigonometria', nombre: 'Trigonometría', semestre: 1, prerequisitos: [], categoria: 'basicas' },
        { id: 'algebra_sem1', nombre: 'Álgebra', semestre: 1, prerequisitos: [], categoria: 'basicas' },
        { id: 'geometria_analitica', nombre: 'Geometría Analítica', semestre: 1, prerequisitos: [], categoria: 'basicas' },
        { id: 'intro_ingenieria', nombre: 'Introducción a la Ingeniería', semestre: 1, prerequisitos: [], categoria: 'ingenieria' },
        
        // Segundo Semestre
        { id: 'dibujo_tecnico', nombre: 'Dibujo Técnico', semestre: 2, prerequisitos: ['intro_dibujo'], categoria: 'ingenieria' },
        { id: 'calculo1', nombre: 'Cálculo 1', semestre: 2, prerequisitos: ['trigonometria', 'algebra_sem1', 'geometria_analitica'], categoria: 'basicas' },
        { id: 'intro_fisica', nombre: 'Introducción a la Física', semestre: 2, prerequisitos: ['trigonometria'], categoria: 'basicas' },
        { id: 'algebra_vectorial', nombre: 'Álgebra Vectorial', semestre: 2, prerequisitos: ['algebra_sem1', 'geometria_analitica'], categoria: 'basicas' },
        { id: 'quimica_general', nombre: 'Química General', semestre: 2, prerequisitos: [], categoria: 'basicas' },
        { id: 'misterio_cristiano1', nombre: 'Misterio Cristiano 1', semestre: 2, prerequisitos: ['fe_ciencias'], categoria: 'pastoral' },
        { id: 'comunicacion2', nombre: 'Comunicación Oral y Escrita 2', semestre: 2, prerequisitos: ['comunicacion1'], categoria: 'humanisticas' },
        { id: 'intro_sociologia', nombre: 'Introducción a la Sociología', semestre: 2, prerequisitos: [], categoria: 'humanisticas' },
        { id: 'historia_cultura', nombre: 'Historia de la Cultura', semestre: 2, prerequisitos: ['historia_py'], categoria: 'humanisticas' },
        { id: 'antropologia_filosofica', nombre: 'Antropología Filosófica', semestre: 2, prerequisitos: [], categoria: 'humanisticas' },

        // Tercer Semestre
        { id: 'representacion_grafica1', nombre: 'Representación Gráfica 1', semestre: 3, prerequisitos: ['dibujo_tecnico'], categoria: 'ingenieria' },
        { id: 'calculo2', nombre: 'Cálculo 2', semestre: 3, prerequisitos: ['calculo1'], categoria: 'basicas' },
        { id: 'algebra_lineal', nombre: 'Álgebra Lineal', semestre: 3, prerequisitos: ['algebra_vectorial'], categoria: 'basicas' },
        { id: 'informatica1', nombre: 'Informática 1', semestre: 3, prerequisitos: [], categoria: 'ingenieria' },
        { id: 'fisica1', nombre: 'Física 1', semestre: 3, prerequisitos: ['calculo1', 'intro_fisica', 'algebra_vectorial'], categoria: 'basicas' },
        { id: 'misterio_cristiano2', nombre: 'Misterio Cristiano 2', semestre: 3, prerequisitos: ['misterio_cristiano1'], categoria: 'pastoral' },

        // Cuarto Semestre
        { id: 'representacion_grafica2', nombre: 'Representación Gráfica 2', semestre: 4, prerequisitos: ['dibujo_tecnico', 'informatica1'], categoria: 'ingenieria' },
        { id: 'calculo3', nombre: 'Cálculo 3', semestre: 4, prerequisitos: ['calculo2'], categoria: 'basicas' },
        { id: 'ecuaciones_diferenciales', nombre: 'Ecuaciones Diferenciales', semestre: 4, prerequisitos: ['calculo2'], categoria: 'basicas' },
        { id: 'fisica2', nombre: 'Física 2', semestre: 4, prerequisitos: ['fisica1'], categoria: 'basicas' },
        { id: 'mecanica_racional1', nombre: 'Mecánica Racional 1', semestre: 4, prerequisitos: ['algebra_lineal', 'fisica1'], categoria: 'ingenieria' },
        { id: 'antropologia_cristiana', nombre: 'Antropología Cristiana', semestre: 4, prerequisitos: ['misterio_cristiano2'], categoria: 'pastoral' },
        
        // Quinto Semestre
        { id: 'topografia', nombre: 'Topografía', semestre: 5, prerequisitos: ['representacion_grafica1', 'representacion_grafica2'], categoria: 'aplicaciones' },
        { id: 'fisica3', nombre: 'Física 3', semestre: 5, prerequisitos: ['fisica1'], categoria: 'basicas' },
        { id: 'geologia', nombre: 'Geología', semestre: 5, prerequisitos: ['quimica_general'], categoria: 'ingenieria' },
        { id: 'estatica1', nombre: 'Estática 1', semestre: 5, prerequisitos: ['mecanica_racional1'], categoria: 'ingenieria' },
        { id: 'tecnologia_materiales1', nombre: 'Tecnología de Materiales 1', semestre: 5, prerequisitos: ['mecanica_racional1'], categoria: 'ingenieria' },
        { id: 'economia_politica', nombre: 'Economía Política', semestre: 5, prerequisitos: ['representacion_grafica2', 'calculo3', 'ecuaciones_diferenciales', 'fisica2', 'mecanica_racional1', 'antropologia_cristiana'], categoria: 'complementarias' },
        { id: 'etica_fundamental', nombre: 'Ética Fundamental', semestre: 5, prerequisitos: ['antropologia_cristiana'], categoria: 'pastoral' },
        
        // Sexto Semestre
        { id: 'estadistica', nombre: 'Estadística', semestre: 6, prerequisitos: ['calculo3'], categoria: 'basicas' },
        { id: 'matematica_aplicada', nombre: 'Matemática Aplicada', semestre: 6, prerequisitos: ['ecuaciones_diferenciales'], categoria: 'basicas' },
        { id: 'resistencia_materiales1', nombre: 'Resistencia de Materiales 1', semestre: 6, prerequisitos: ['ecuaciones_diferenciales', 'mecanica_racional1'], categoria: 'ingenieria' },
        { id: 'estatica2', nombre: 'Estática 2', semestre: 6, prerequisitos: ['estatica1'], categoria: 'ingenieria' },
        { id: 'tecnologia_materiales2', nombre: 'Tecnología de Materiales 2', semestre: 6, prerequisitos: ['tecnologia_materiales1'], categoria: 'ingenieria' },
        { id: 'etica_personal', nombre: 'Ética Personal', semestre: 6, prerequisitos: ['etica_fundamental'], categoria: 'pastoral' },
        
        // Séptimo Semestre
        { id: 'vias_comunicacion1', nombre: 'Vías de Comunicación 1', semestre: 7, prerequisitos: ['topografia'], categoria: 'aplicaciones' },
        { id: 'geotecnia1', nombre: 'Geotecnia 1', semestre: 7, prerequisitos: ['geologia', 'resistencia_materiales1'], categoria: 'aplicaciones' },
        { id: 'mecanica_fluidos', nombre: 'Mecánica de Fluidos', semestre: 7, prerequisitos: ['calculo3', 'fisica3'], categoria: 'ingenieria' },
        { id: 'resistencia_materiales2', nombre: 'Resistencia de Materiales 2', semestre: 7, prerequisitos: ['resistencia_materiales1'], categoria: 'ingenieria' },
        { id: 'estatica3', nombre: 'Estática 3', semestre: 7, prerequisitos: ['estatica2'], categoria: 'ingenieria' },
        { id: 'tecnologia_construccion1', nombre: 'Tecnología de la Construcción 1', semestre: 7, prerequisitos: ['estatica1', 'tecnologia_materiales1'], categoria: 'aplicaciones' },
        { id: 'etica_social1', nombre: 'Ética Social 1', semestre: 7, prerequisitos: ['etica_personal'], categoria: 'pastoral' },
        
        // Octavo Semestre
        { id: 'vias_comunicacion2', nombre: 'Vías de Comunicación 2', semestre: 8, prerequisitos: ['vias_comunicacion1'], categoria: 'aplicaciones' },
        { id: 'geotecnia2', nombre: 'Geotecnia 2', semestre: 8, prerequisitos: ['geotecnia1'], categoria: 'aplicaciones' },
        { id: 'hidraulica_aplicada', nombre: 'Hidráulica Aplicada', semestre: 8, prerequisitos: ['matematica_aplicada', 'mecanica_fluidos'], categoria: 'aplicaciones' },
        { id: 'estructuras1', nombre: 'Estructuras 1', semestre: 8, prerequisitos: ['resistencia_materiales2'], categoria: 'aplicaciones' },
        { id: 'estructuras_mad_metal', nombre: 'Estructuras de Mad. y Metálicas', semestre: 8, prerequisitos: ['estatica2', 'resistencia_materiales2'], categoria: 'aplicaciones' },
        { id: 'tecnologia_construccion2', nombre: 'Tecnología de la Construcción 2', semestre: 8, prerequisitos: ['tecnologia_materiales2'], categoria: 'aplicaciones' },
        { id: 'etica_social2', nombre: 'Ética Social 2', semestre: 8, prerequisitos: ['etica_social1'], categoria: 'pastoral' },
        
        // Noveno Semestre
        { id: 'geotecnia3', nombre: 'Geotecnia 3', semestre: 9, prerequisitos: ['geotecnia2'], categoria: 'aplicaciones' },
        { id: 'hidrologia_obras', nombre: 'Hidrología y Obras Hidráulicas', semestre: 9, prerequisitos: ['hidraulica_aplicada'], categoria: 'aplicaciones' },
        { id: 'estructuras2', nombre: 'Estructuras 2', semestre: 9, prerequisitos: ['estatica3', 'estructuras1'], categoria: 'aplicaciones' },
        { id: 'hormigon_prensado', nombre: 'Hormigón Prensado', semestre: 9, prerequisitos: ['estatica3', 'estructuras1'], categoria: 'aplicaciones' },
        { id: 'tecnologia_construccion3', nombre: 'Tecnología de la Construcción 3', semestre: 9, prerequisitos: ['estructuras1', 'tecnologia_construccion2'], categoria: 'aplicaciones' },
        { id: 'organizacion_obras', nombre: 'Organización de Obras', semestre: 9, prerequisitos: ['tecnologia_construccion2'], categoria: 'complementarias' },
        { id: 'etica_profesional', nombre: 'Ética Profesional', semestre: 9, prerequisitos: ['etica_social2'], categoria: 'pastoral' },
        
        // Décimo Semestre
        { id: 'estructuras3', nombre: 'Estructuras 3', semestre: 10, prerequisitos: ['geotecnia3', 'estructuras2'], categoria: 'aplicaciones' },
        { id: 'puentes', nombre: 'Puentes', semestre: 10, prerequisitos: ['estructuras2', 'hormigon_prensado'], categoria: 'aplicaciones' },
        { id: 'instalaciones_electricas', nombre: 'Instalaciones Eléctricas', semestre: 10, prerequisitos: ['fisica2', 'tecnologia_construccion2'], categoria: 'aplicaciones' },
        { id: 'instalaciones_sanitarias', nombre: 'Instalaciones Sanitarias', semestre: 10, prerequisitos: ['hidrologia_obras'], categoria: 'aplicaciones' },
        { id: 'ingenieria_economica', nombre: 'Ingeniería Económica', semestre: 10, prerequisitos: ['economia_politica', 'organizacion_obras'], categoria: 'complementarias' },
        { id: 'ingenieria_legal', nombre: 'Ingeniería Legal', semestre: 10, prerequisitos: ['organizacion_obras'], categoria: 'complementarias' },
    ];

    const mallaContainer = document.getElementById('malla-curricular');
    let materiasAprobadas = new Set();
    const numeroSemestres = 10;

    // --- Funciones ---

    // Inicializa y dibuja la malla en la página
    function inicializarMalla() {
        mallaContainer.innerHTML = '';
        
        // Crear columnas para cada semestre
        for (let i = 0; i <= numeroSemestres; i++) {
            const semestreCol = document.createElement('div');
            semestreCol.className = 'semestre-columna';
            semestreCol.id = `semestre-${i}`;
            
            const titulo = document.createElement('div');
            titulo.className = 'semestre-titulo';
            titulo.textContent = i === 0 ? 'Admisión' : `Semestre ${i}`;
            semestreCol.appendChild(titulo);
            
            mallaContainer.appendChild(semestreCol);
        }

        // Agregar cada materia a su columna correspondiente
        malla.forEach(materia => {
            const materiaDiv = document.createElement('div');
            materiaDiv.className = 'materia';
            materiaDiv.textContent = materia.nombre;
            materiaDiv.id = materia.id;
            materiaDiv.dataset.categoria = materia.categoria;
            document.getElementById(`semestre-${materia.semestre}`).appendChild(materiaDiv);
        });

        actualizarEstadoMaterias();
    }

    // Actualiza el estado visual (bloqueado, disponible, aprobado) de todas las materias
    function actualizarEstadoMaterias() {
        malla.forEach(materia => {
            const el = document.getElementById(materia.id);
            if (!el) return;

            el.classList.remove('aprobada', 'disponible', 'bloqueada');

            if (materiasAprobadas.has(materia.id)) {
                el.classList.add('aprobada');
            } else {
                const prerequisitosCumplidos = materia.prerequisitos.every(pr => materiasAprobadas.has(pr));
                if (prerequisitosCumplidos) {
                    el.classList.add('disponible');
                } else {
                    el.classList.add('bloqueada');
                }
            }
        });
    }

    // Maneja el evento de clic en una materia
    function manejarClickMateria(e) {
        const el = e.target;
        if (el.classList.contains('materia') && el.classList.contains('disponible')) {
            // Si la materia está disponible y se hace clic, se aprueba
            materiasAprobadas.add(el.id);
        } else if (el.classList.contains('materia') && el.classList.contains('aprobada')) {
            // Si la materia ya está aprobada y se hace clic, se "des-aprueba"
            materiasAprobadas.delete(el.id);
        } else {
            // No hacer nada si está bloqueada
            return;
        }
        actualizarEstadoMaterias();
    }

    // --- Ejecución Inicial ---
    inicializarMalla();
    mallaContainer.addEventListener('click', manejarClickMateria);
});
