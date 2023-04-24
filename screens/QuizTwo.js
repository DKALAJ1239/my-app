import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";

const QuizTwo = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const data = [
    {
      id: 1,
      question: "Where is this location?",
      imageUrl: `https://maps.googleapis.com/maps/api/staticmap?center=40.712776,-74.005974&zoom=14&size=400x400&key=YOUR_API_KEY`,
      options: ["New York City", "Los Angeles", "Chicago", "Miami"],
      correctAnswerIndex: 0,
    },
    {
      id: 2,
      question: "Where is this location?",
      imageUrl: `https://maps.googleapis.com/maps/api/staticmap?center=51.507351,-0.127758&zoom=14&size=400x400&key=YOUR_API_KEY`,
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswerIndex: 1,
    },
    // Add more questions as needed
  ];

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
      navigation.navigate("Results", { score });
    }
  };

  return (
    <SafeAreaView>
      <Image
        style={{ width: 400, height: 400 }}
        source={{ uri: currentQuestion.imageUrl }}
      />
      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedOption === index && styles.selectedOption,
          ]}
          onPress={() => {
            handleOptionPress(index);
          }}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={handleNextPress}>
        <Text>Next</Text>
      </TouchableOpacity>
      <Text>Answer: {currentQuestion.options[currentQuestion.correctAnswerIndex]}</Text>
      <Text>Selected: {currentQuestion.options[selectedOption]}</Text>
      <Text>Score: {score}/{currentQuestionIndex}</Text>
    </SafeAreaView>
  );
};

export default QuizTwo;

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
