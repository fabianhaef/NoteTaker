import React, { useEffect } from "react";
import { useState } from 'react';

import { StyleSheet, TextInput, Button } from 'react-native';
import { getNote } from "../services/noteStoreService";

type Props = {
    saveNote: (text: string) => void;
    noteId: string | undefined;
}

export const NoteTakingInput: React.FC<Props> = ({ saveNote, noteId }) => {
    const [text, setText] = useState<string>('');

    useEffect(() => {
        if(noteId) {
            getNote(noteId).then(result => setText(result?.text ?? ''));
        }
    }, [])

    return (
        <>
            <TextInput autoFocus={true} multiline={true} style={styles.textInput} value={text} onChangeText={setText} />
            <Button title="Save note" onPress={() => saveNote(text)} />
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
