import React from "react";

import { Button  } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ScreenNavigationProp } from "../types";
import { SavedNotesList } from "../components/SavedNotesList";

type Props = {
    toggleNewNote: (toggle: boolean) => void;
}

export const HomeScreen: React.FC<Props> = () => {
    const navigation = useNavigation<ScreenNavigationProp>();

    return (
        <>
            <SavedNotesList />
            <Button onPress={() => navigation.navigate("EditNote")} title="New Note" />
        </>
    )
}


