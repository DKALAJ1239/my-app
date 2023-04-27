// https://reactnavigation.org/docs/hello-react-navigation

// importing required modules and components
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenMain from "../screens/HomeScreenMain.js";
import AllQuizzes from "../screens/AllQuizzes.js";
import QuizOne from "../screens/QuizOne.js";
import QuizTwo from "../screens/QuizTwo.js";
import QuizThree from "../screens/QuizThree.js";
import QuizFour from "../screens/QuizFour.js";
import Results from "../screens/Results.js";

import React from "react";

// creating a function component called Navigate
const Navigate = () => {
  // creating a stack navigator using the createNativeStackNavigator function
  const Stack = createNativeStackNavigator();
  return (
    // wrapping the stack navigator with NavigationContainer component to provide navigation functionalities
    <NavigationContainer>
      {/* creating screens for different components */}
      <Stack.Navigator>
        {/* Home screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreenMain}
          options={{ headerShown: false }}
        />
        {/* All quizzes screen */}
        <Stack.Screen
          name="AllQuizzes"
          component={AllQuizzes}
          options={{ headerShown: false }}
        />
        {/* Quiz one screen */}
        <Stack.Screen
          name="QuizOne"
          component={QuizOne}
          options={{ headerShown: false }}
        />
        {/* Quiz two screen */}
        <Stack.Screen
          name="QuizTwo"
          component={QuizTwo}
          options={{ headerShown: false }}
        />
        {/* Quiz three screen */}
        <Stack.Screen
          name="QuizThree"
          component={QuizThree}
          options={{ headerShown: false }}
        />
        {/* Quiz four screen */}
        <Stack.Screen
          name="QuizFour"
          component={QuizFour}
          options={{ headerShown: false }}
        />
        {/* Quiz results screen */}
        <Stack.Screen
          name="Results"
          component={Results}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// exporting the Navigate function component as the default export
export default Navigate;

// creating an empty object for the styles
const styles = StyleSheet.create({});
