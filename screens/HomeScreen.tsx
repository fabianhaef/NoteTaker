import React from "react";
import { Text, Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

type Props = {
    toggleNewNote: (toggle: boolean) => void;
}

export const HomeScreen: React.FC<Props> = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate("NewNote")} title="New Note" />
        </View>
    )
}