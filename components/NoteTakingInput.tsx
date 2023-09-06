import React, { useEffect, useState, useLayoutEffect } from "react";

import { StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native"

import { getNote } from "../services/noteStoreService";
import { SaveNote } from "./SaveNote";
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

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <SaveNote text={text} id={noteId ?? ''} />
        });
    }, [navigation, text, noteId])

    return (
        <>
            <TextInput autoFocus={true} multiline={true} style={styles.textInput} value={text} onChangeText={setText} />

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
