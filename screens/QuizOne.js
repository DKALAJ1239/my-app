import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Questions from "../slices/Questions";

const QuizOne = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const data = Questions;
  const currentQuestion = data[currentQuestionIndex];

  const handleOptionPress = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleNextPress = () => {
    if (selectedOption == currentQuestion.correctAnswerIndex) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate("Results", {
        score:
          score +
          (selectedOption == currentQuestion.correctAnswerIndex ? 1 : 0),
      });
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  const renderProgressBar = () => {
    return (
      <View style={styles.progressBar}>
        {[...Array(data.length)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressBarItem,
              currentQuestionIndex >= index && styles.progressBarItemActive,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Quiz One</Text>
      </View>
      {renderProgressBar()}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
      </View>
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.option,
              selectedOption === option.id && styles.selectedOption,
            ]}
            onPress={() => handleOptionPress(option.id)}
            disabled={selectedOption !== null}
          >
            <Text style={styles.optionText}>{option.answer}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={selectedOption ? styles.button : styles.disabledButton}
        onPress={handleNextPress}
        disabled={!selectedOption}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.scoreText}>
        Score so far: {score}/{currentQuestionIndex}
      </Text>
    </SafeAreaView>
  );
};

export default QuizOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F1923",
  },
  header: {
    backgroundColor: "#1E2A38",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#36454F",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  questionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFFFFF",
  },
  optionsContainer: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "stretch",
    paddingHorizontal: 20,
  },
  option: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#1E2A38",
  },
  selectedOption: {
    backgroundColor: "#5B75A9",
  },
  optionText: {
    fontSize: 18,
    textAlign: "center",
    color: "#FFFFFF",
  },
  button: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#f7d08a",
    borderRadius: 5,
    marginLeft: 50,
    marginRight: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
  scoreText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
    color: "#f7d08a",
  },
  progressBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  progressBarItem: {
    flex: 1,
    height: 10,
    marginHorizontal: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  progressBarItemActive: {
    backgroundColor: "#f7d08a",
  },
});

