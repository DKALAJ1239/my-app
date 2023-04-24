import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const AllQuizzes = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("QuizOne")}
        style={styles.startButton}
      >
        <Text style={styles.startButtonText}>Practice Quiz</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("QuizTwo")}
        style={styles.startButton}
      >
        <Text style={styles.startButtonText}>GeoQuiz One: The Americas</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("QuizThree")}
        style={styles.startButton}
      >
        <Text style={styles.startButtonText}>GeoQuiz Two: Asia</Text>
      </Pressable>
    </View>
  );
};

export default AllQuizzes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202c39",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: "#f7d08a",
    marginTop: 20,
  },
  image: {
    height: 200,
    width: 300,
    resizeMode: "cover",
  },
  textContainer: {
    padding: 10,
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#f7d08a",
  },
  bulletPoint: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  bulletPointSymbol: {
    color: "#f7d08a",
    fontSize: 20,
    fontWeight: "bold",
  },
  bulletPointText: {
    marginLeft: 10,
    color: "#f7d08a",
    fontSize: 18,
    fontWeight: "500",
  },
  startButton: {
    backgroundColor: "#f7d08a",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 50,
  },
  startButtonText: {
    color: "#202c39",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
