// https://reactnavigation.org/docs/hello-react-navigation

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenMain from "../screens/HomeScreenMain.js";
import AllQuizzes from "../screens/AllQuizzes.js";
import QuizOne from "../screens/QuizOne.js";
import QuizTwo from "../screens/QuizTwo.js";
import Results from "../screens/Results.js";

import React from "react";

const Navigate = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreenMain}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AllQuizzes"
          component={AllQuizzes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizOne"
          component={QuizOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizTwo"
          component={QuizTwo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Results"
          component={Results}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;

const styles = StyleSheet.create({});
