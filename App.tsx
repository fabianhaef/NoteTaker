import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './screens/HomeScreen';
import { EditNoteScreen } from './screens/EditNoteScreen';

import { RootStackParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => {
            return {
              headerTitle: 'All notes',
              headerRight: () => (
                <Button onPress={() => navigation.navigate("EditNote")} title="New Note" />
              ),
            }
          }}
        />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
