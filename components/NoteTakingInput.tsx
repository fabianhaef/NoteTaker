import React, { useEffect, useState, useLayoutEffect } from "react";

import { StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native"

import { getNote, saveNote } from "../services/noteStoreService";
import { ScreenNavigationProp } from "../types";

type Props = {
    noteId: string | undefined;
}

export const NoteTakingInput: React.FC<Props> = ({ noteId }) => {
    const [text, setText] = useState<string>('');
    const navigation = useNavigation<ScreenNavigationProp>();


    useEffect(() => {
        if (noteId) {
            getNote(noteId).then(result => setText(result?.text ?? ''));
        }
    }, [])

    const saveNoteHandler = async () => {
        await saveNote(text, noteId)

        if (navigation.canGoBack()) {
            navigation.goBack()
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (<Button title="back" onPress={saveNoteHandler} />)
        });
    }, [navigation, text, noteId])

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
        fontSize: 16,
        paddingHorizontal: 20,
        paddingTop: 30,
        flex: 1,
        paddingBottom: 20,
    }
});
