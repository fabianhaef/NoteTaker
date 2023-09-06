import React from 'react'
import { useState } from 'react'

import { NoteTakingInput } from '../components/NoteTakingInput'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const EditNoteScreen: React.FC = () => {
    const [text, setText] = useState<string>('');

    const saveNote = async () => {
        await AsyncStorage.setItem('note', text);
    }

    return (
        <NoteTakingInput saveNote={saveNote} />
    )
}

