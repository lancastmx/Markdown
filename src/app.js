// SISTEMA DE NOTAS EN MARKDOWN

function generalId() {
    const timestamp = Date.now();
    return timestamp;
}

// FUNCIONES CRUD

function createNote(content, title) {
    //limpia los espacios en blanco al inicio y al final del contenido y el titulo
    const trimmedContent = content.trim();
    //valida que el contenido y el titulo no esten vacios
    if (trimmedContent === "") {
        return 'Error: El contenido no pueden estar vacios';
    }
    //constantes para crear la nota
    const id = generalId();
    const currentTime = Date.now();
    const noteTitle = title || 'Nota sin titulo';
    const noteExcerpt = content.length > 100 ? content.slice(0, 100) + '...' : content;
    //crea la nota
    const noteInfo = `
    <div class="note" id="note-${id}">
        <h2 class="note-title">${noteTitle}</h2>
        <p class="note-excerpt">${noteExcerpt}</p>
        <p class="note-date">${new Date(currentTime).toLocaleString()}</p>
    </div>
    `;
    return noteInfo;
}



// FUNCIONES PARA EDITAR Y ACTUALIZAR NOTAS

function updateNote(id, content, title) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = notes.map(note => {
        if (note.id === id) {
            return {
                ...note,
                content,
                title
            };
        }
        return note;
    });
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
}

function editNote(id, content, title) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = notes.map(note => {
        if (note.id === id) {
            return {
                ...note,
                content,
                title
            };
        }
        return note;
    });
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
}
// FUNCIONES PARA GUARDAR Y RECUPERAR NOTAS

function saveNote(note) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}

function getNotes() {
    return JSON.parse(localStorage.getItem('notes')) || [];
}

function deleteNote(id) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = notes.filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
}