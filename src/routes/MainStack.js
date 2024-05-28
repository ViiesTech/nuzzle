import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/MainScreens/Home';
import WelcomeUser from '../screens/MainScreens/WelcomeUser';
import UserAboutQuiz from '../screens/MainScreens/UserAboutQuiz';
import PetQuiz from '../screens/MainScreens/PetQuiz';
import AllQuestions from '../screens/MainScreens/AllQuestions';
import Congrats from '../screens/MainScreens/Congrats';
// Owner Screens
import OwnerHome from '../screens/PetOwnerScreens/OwnerHome';
import DogWalking from '../screens/PetOwnerScreens/DogWalking';
import HouseSitting from '../screens/PetOwnerScreens/HouseSitting';

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="OwnerHome" component={OwnerHome} />
            <Stack.Screen name="WelcomeUser" component={WelcomeUser} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="UserAboutQuiz" component={UserAboutQuiz} />
            <Stack.Screen name="PetQuiz" component={PetQuiz} />
            <Stack.Screen name="AllQuestions" component={AllQuestions} />
            <Stack.Screen name="Congrats" component={Congrats} />
            <Stack.Screen name="DogWalking" component={DogWalking} />
            <Stack.Screen name="HouseSitting" component={HouseSitting} />
        </Stack.Navigator>
  );
}

export default MainStack;