import React, { useEffect, useState } from 'react';
import { AppContextInterface, Note, NotesList } from '../interfaces/interfaces';

export const AppCtx = React.createContext<AppContextInterface | null>(null);

export const AppCtxProvider = ({ children }: { children: any }) => {

    const [currNote, setCurrNote] = useState<Note>();
    const [notes, setNotes] = useState<NotesList>({
        '1': {
            id: "1",
            lastEdited: new Date(),
            title: "Title 1",
            body: "Body 1",
        },
        '2': {
            id: "2",
            lastEdited: new Date(),
            title: "Title 2",
            body: "Body 2"
        },
        '3': {
            id: "3",
            lastEdited: new Date(),
            title: "Title 3",
            body: "Body 3"
        }
    });

    useEffect(() => {
        if (notes) {
            setCurrNote(notes['1']);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const UpdateCurrNote = (note: Note) => {
        setCurrNote(note);
        setNotes({ ...notes, [note?.id || '']: note });
    }

    const switchCurrNote = (id: string) => {
        setCurrNote(notes[id]);
    }

    const addNewNote = () => {
        const id = Date.now().toString();
        const newNote: Note = {
            id: id,
            lastEdited: new Date(),
            title: "",
            body: ""
        };
        setNotes({ ...notes, [id]: newNote });
        setCurrNote(newNote);
    }

    const value: AppContextInterface = {
        currNote: currNote,
        notes: notes,
        UpdateCurrNote: UpdateCurrNote,
        switchCurrNote: switchCurrNote,
        addNewNote: addNewNote
    };

    return (
        <AppCtx.Provider value={value}>
            {children}
        </AppCtx.Provider>
    );
}
