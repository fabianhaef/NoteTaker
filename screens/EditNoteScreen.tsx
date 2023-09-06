import React from 'react'

import { useRoute } from "@react-navigation/native";
import { NoteTakingInput } from '../components/NoteTakingInput';
import { EditScreenRouteProp } from '../types'

export const EditNoteScreen: React.FC = () => {
    const route = useRoute<EditScreenRouteProp>();
    const noteId = route.params.noteId;

    return (
        <NoteTakingInput noteId={noteId} />
    )
}

