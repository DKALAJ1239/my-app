import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
        {score >= 7
          ? "Great job! You really know your stuff."
          : score >= 4
          ? "Not bad, but you could do better."
          : "You need to brush up on your trivia."}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  score: {
    fontSize: 24,
    marginBottom: 10,
  },
  message: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default Results;
