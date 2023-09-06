import React from 'react'

import { saveNote } from '../services/noteStoreService'
import { NoteTakingInput } from '../components/NoteTakingInput'

export const EditNoteScreen: React.FC = () => {
    return (
        <NoteTakingInput saveNote={saveNote} />
    )
}

