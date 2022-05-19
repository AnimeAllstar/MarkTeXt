export interface Note {
    id?: string,
    lastEdited?: Date,
    title?: string,
    body?: string,
}

export interface NotesList {
    [key: string]: Note
}

export interface AppContextInterface {
    currNote: Note | undefined,
    notes: NotesList,
    UpdateCurrNote: (note: Note) => void,
    switchCurrNote: (id: string) => void,
    addNewNote: () => void,
}