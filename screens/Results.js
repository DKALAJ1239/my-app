import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const Results = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const score = route.params.score;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quiz Results</Text>
      <Text style={styles.score}>Your score: {score}</Text>
      <Text style={styles.message}>
        {score >= 5
          ? "Great job! You really know your stuff."
          : score >= 4
          ? "Not bad, but you could do better."
          : "You need to brush up on your trivia."}
      </Text>
      <Pressable
        onPress={() => {
          console.log("Home button pressed");
          navigation.navigate("Home");
        }}
        style={{
          backgroundColor: "#f7d08a",
          padding: 15,
          width: 150,
          borderRadius: 15,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: "#202c39",
            fontWeight: "600",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Return Home
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          console.log("Home button pressed");
          navigation.navigate("AllQuizzes");
        }}
        style={{
          backgroundColor: "#f7d08a",
          padding: 15,
          width: 150,
          borderRadius: 15,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: "#202c39",
            fontWeight: "600",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Return to Quizzes
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#202c39",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#f7d08a",
  },
  score: {
    fontSize: 24,
    marginBottom: 10,
    color: "#f7d08a",
  },
  message: {
    fontSize: 20,
    textAlign: "center",
    color: "#f7d08a",
  },
});

export default Results;
