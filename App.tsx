import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './screens/HomeScreen';
import { EditNoteScreen } from './screens/EditNoteScreen';

import { NewNoteButton } from './components/NewNoteButton';

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
          options={() => {
            return {
              headerTitle: 'All notes',
              headerRight: () => (
                <NewNoteButton />
              ),
            }
          }}
        />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
