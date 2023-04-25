import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Axios from "axios";

const QuizQuestions = [
  {
    question: "Guess the Country in the Picture",
    lat: 48.8566,
    lng: 2.3522,
    options: [
      { id: "0", option: "A", answer: "France" },
      { id: "1", option: "B", answer: "Russia" },
      { id: "2", option: "C", answer: "Britain" },
      { id: "3", option: "D", answer: "Bosnia" },
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Guess the Country in the Picture",
    lat: 52.518589,
    lng: 13.376665,
    options: [
      {
        id: "0",
        option: "A",
        answer: "Ukraine",
      },
      {
        id: "1",
        option: "B",
        answer: "Germany",
      },
      {
        id: "2",
        option: "C",
        answer: "Iceland",
      },
      {
        id: "3",
        option: "D",
        answer: "Greenland",
      },
    ],
    correctAnswerIndex: 1,
  },
  // add more questions and answers here
];

const API_KEY = "AIzaSyBicqUIzS6qIzkk8vtr2bt5kZMlQpcMxW4";

const QuizFour = ({ navigation }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (
      answer ===
      QuizQuestions[currentQuestion].options[
        QuizQuestions[currentQuestion].correctAnswerIndex
      ].answer
    ) {
      setScore(score + 1);
    }
    if (currentQuestion === QuizQuestions.length - 1) {
      navigation.navigate("Results", { score });
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  useEffect(() => {
    const { lat, lng } = QuizQuestions[currentQuestion];
    const url = `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${lat},${lng}&key=${API_KEY}`;

    Axios.get(url)
      .then((response) => {
        setImageUrl(response.request.responseURL);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentQuestion]);

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {QuizQuestions[currentQuestion].question}
      </Text>
      {imageUrl ? (
        <Image style={styles.image} source={{ uri: imageUrl }} />
      ) : (
        <Text>No image available</Text>
      )}
      {QuizQuestions[currentQuestion].options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={styles.button}
          onPress={() => handleAnswer(option.answer)}
        >
          <Text style={styles.buttonText}>
            {option.option} - {option.answer}
          </Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.score}>Score: {score}</Text>
    </View>
  );
};

export default QuizFour;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  image: {
    width: 300,
    height: 150,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    minWidth: 200,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
});
