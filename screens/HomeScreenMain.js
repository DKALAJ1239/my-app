import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const HomeScreenMain = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://github.com/DKALAJ1239/my-app/blob/master/assets/brand_pic.PNG?raw=true",
          }}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>How to Play</Text>
        <View style={styles.bulletPoint}>
          <Text style={styles.bulletPointSymbol}>•</Text>
          <Text style={styles.bulletPointText}>
            Each question is worth 1 point.
          </Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bulletPointSymbol}>•</Text>
          <Text style={styles.bulletPointText}>
            There is 5 questions per quiz.
          </Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bulletPointSymbol}>•</Text>
          <Text style={styles.bulletPointText}>
            Once you select a answer, you cannot change it!
          </Text>
        </View>
      </View>

      <Pressable
        onPress={() => navigation.navigate("AllQuizzes")}
        style={styles.startButton}
      >
        <Text style={styles.startButtonText}>Start Quiz</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreenMain;

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
