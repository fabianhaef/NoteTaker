import React from "react";
import { Text, Button, View } from "react-native";

type Props = {
    toggleNewNote: (toggle: boolean) => void;
}

export const HomeScreen: React.FC<Props> = ({ toggleNewNote }) => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button onPress={() => toggleNewNote(true)} title="New Note" />
        </View>
    )
}