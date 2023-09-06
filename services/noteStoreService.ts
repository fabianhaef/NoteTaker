import AsyncStorage from '@react-native-async-storage/async-storage';

export type Note = {
    text: string;
    id: string;
};

export type NoteStore = {
    notes: Array<Note>;
};

const STORE_KEY = 'TAKE_NOTES_STORE';

export const getAllNotes = async () => {
    const storeItem = await AsyncStorage.getItem(STORE_KEY)

    if (storeItem) {
        return JSON.parse(storeItem) as NoteStore;
    }

    return { notes: [] }
}

export const getNote = async (id: string) => {
    const noteStore = await getAllNotes();
    const note = noteStore.notes.find(note => note.id === id)
    return note;
};

export const deleteNote = async (noteId: string) => {
    // get the store
    const noteStore = await getAllNotes();

    // get noteIndes by using the noteId
    const noteIndex = noteStore.notes.findIndex(note => note.id === noteId);

    // remove with the splice function
    noteStore.notes.splice(noteIndex, 1);

    // create new store 
    const newStore = JSON.stringify(noteStore)

    // set newItem onto async storage
    await AsyncStorage.setItem(STORE_KEY, newStore)
}

export const saveNote = async (text: string, noteId: string | undefined) => {
    const noteStore = await getAllNotes();
    if (noteId) {
        const noteIndex = noteStore.notes.findIndex(note => note.id === noteId)
        // replace old note with the new note
        noteStore.notes.splice(noteIndex, 1, { id: noteId, text: text })
    } else {
        // add new note to the whole array
        noteStore.notes.push({ id: Date.now().toString(), text: text })
    }

    await AsyncStorage.setItem(STORE_KEY, JSON.stringify(noteStore));
};


