import React, { useEffect } from "react";
import { useState } from 'react';

import { StyleSheet, TextInput, Button } from 'react-native';
import { getNote, saveNote } from "../services/noteStoreService";

type Props = {
    noteId: string | undefined;
}

export const NoteTakingInput: React.FC<Props> = ({ noteId }) => {
    const [text, setText] = useState<string>('');

    useEffect(() => {
        if (noteId) {
            getNote(noteId).then(result => setText(result?.text ?? ''));
        }
    }, [])

    const saveNoteHandler = () => {
        saveNote(text, noteId)
    }

    return (
        <>
            <TextInput autoFocus={true} multiline={true} style={styles.textInput} value={text} onChangeText={setText} />
            <Button title="Save note" onPress={saveNoteHandler} />
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#FFEACD',
        width: '100%',
        height: 200,
        fontSize: 16,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20,
    }
});
