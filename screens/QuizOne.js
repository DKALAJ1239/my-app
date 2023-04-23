import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Questions from "../slices/Questions";

const QuizOne = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const data = Questions;
  const currentQuestion = data[currentQuestionIndex];

  const handleOptionPress = (optionId) => {
    console.log(optionId);
    setSelectedOption(optionId);
  };

  const handleNextPress = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null);
    if (selectedOption == currentQuestion.correctAnswerIndex) {
      console.log("meow");
      setScore(score + 1);
    }
  };

  return (
    <SafeAreaView>
      <Text>{currentQuestion.question}</Text>
      {currentQuestion.options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.option,
            selectedOption === option && styles.selectedOption,
          ]}
          onPress={() => {
            handleOptionPress(option.id);
          }}
        >
          <Text>{option.answer}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={handleNextPress}>
        <Text>Next</Text>
      </TouchableOpacity>
      <Text>answer: {currentQuestion.correctAnswerIndex}</Text>
      <Text>selected: {selectedOption}</Text>
      <Text>
        Score: Score: {score}/{currentQuestionIndex}
      </Text>
    </SafeAreaView>
  );
};

export default QuizOne;

const styles = StyleSheet.create({
  option: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginVertical: 10,
  },
  selectedOption: {
    backgroundColor: "grey",
  },
});
