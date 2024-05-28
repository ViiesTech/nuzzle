import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from '../screens/AuthScreens/Signup';
import Welcome from '../screens/AuthScreens/Welcome';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
  );
}

export default AuthStack;