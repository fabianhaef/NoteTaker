import React, { useLayoutEffect } from 'react'
import { useRoute, useNavigation } from "@react-navigation/native";
import { NoteTakingInput } from '../components/NoteTakingInput';
import { EditScreenRouteProp, ScreenNavigationProp } from '../types'
import { DeleteNote } from '../components/DeleteNote';

export const EditNoteScreen: React.FC = () => {
    const navigation = useNavigation<ScreenNavigationProp>();
    const route = useRoute<EditScreenRouteProp>();
    const noteId = route.params.noteId;


    /* 
        hook that runs synchronously after a render but before the screen is updated. When we change to screen
        When we change to screen, we want to make sure the title changed is synchronous with the user. 
        Not changed after few ms
    */
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: noteId ? 'Edit Note' : 'New Note',
            headerRight: () => noteId ? (
                <DeleteNote noteId={noteId} />
            ) : <></>
        })
    }, [navigation])

    return (
        <NoteTakingInput noteId={noteId} />
    )
}

