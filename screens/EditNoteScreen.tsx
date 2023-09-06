import React from 'react'

import { useRoute } from "@react-navigation/native";
import { saveNote } from '../services/noteStoreService';
import { NoteTakingInput } from '../components/NoteTakingInput';


export const EditNoteScreen: React.FC = () => {
    const route = useRoute<EditScreenRouteProp>();
    const noteId = route.params.noteId;

    return (
        <NoteTakingInput saveNote={saveNote} noteId={noteId} />
    )
}

