import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";

import { Note, getAllNotes } from "../services/noteStoreService";
import { ScreenNavigationProp } from "../types";


export const SavedNotesList: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const navigation = useNavigation<ScreenNavigationProp>();

    useFocusEffect(() => {
        getAllNotes().then(result => setNotes(result.notes))
    })

    return (
        <View style={styles.container}>
            <ScrollView>
                {notes.map(note => (
                    <Pressable key={note.id} onPress={() => navigation.navigate('EditNote', { noteId: note.id })}>
                        <View style={styles.row}>
                            <Text style={styles.noteText} key={note.id}>{note.text.length === 0 ? '(Blank note)' : note.text}</Text>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    row: {
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: "#e6e6e6",
        alignSelf: 'center',
        height: 90,
        justifyContent: 'center',
    },
    noteText: {
        paddingVertical: 20,
        width: '100%',
        fontSize: 16
    }
})