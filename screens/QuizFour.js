import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Axios from "axios";

// QuizQuestions contains all the questions, options, correct answers, and location information
const QuizQuestions = [
  {
    question: "Guess the Country in the Picture",
    lat: 48.87 + Math.random() * 0.02,
    lng: 2.31 + Math.random() * 1.07,
    // lat between 48.87 and 48.89 and lng 2.31 and 3.38
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
    lat: Math.random() * (41.345 - 41.3244) + 41.3244,
    lng: Math.random() * (19.839 - 19.801) + 19.801,
    // lat between 41.345 and 41.3244 and lng 19.839 and 19.801
    options: [
      {
        id: "0",
        option: "A",
        answer: "Albania",
      },
      {
        id: "1",
        option: "B",
        answer: "Portugal",
      },
      {
        id: "2",
        option: "C",
        answer: "Italy",
      },
      {
        id: "3",
        option: "D",
        answer: "Greece",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Guess the Country in the Picture",
    lat: (Math.random() * (59.9459 - 59.91484) + 59.91484).toFixed(5),
    lng: (Math.random() * (10.85133 - 10.77408) + 10.77408).toFixed(5),
    // lat between 59.9459 and 59.91484 and lng 10.77408 and 10.85133
    options: [
      {
        id: "0",
        option: "A",
        answer: "Greece",
      },
      {
        id: "1",
        option: "B",
        answer: "Serbia",
      },
      {
        id: "2",
        option: "C",
        answer: "Italy",
      },
      {
        id: "3",
        option: "D",
        answer: "Norway",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    question: "Guess the Country in the Picture",
    lat: (Math.random() * (41.9263 - 41.86674) + 41.86674).toFixed(5),
    lng: (Math.random() * (12.60773 - 12.50542) + 12.50542).toFixed(5),
    // lat between 41.92630 and 41.86674 and lng 12.60773 and 12.50542
    options: [
      {
        id: "0",
        option: "A",
        answer: "Norway",
      },
      {
        id: "1",
        option: "B",
        answer: "Italy",
      },
      {
        id: "2",
        option: "C",
        answer: "Poland",
      },
      {
        id: "3",
        option: "D",
        answer: "Greece",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Guess the Country in the Picture",
    lat: (Math.random() * (52.50685 - 52.46971) + 52.46971).toFixed(5),
    lng: (Math.random() * (-1.87544 - -1.91359) + -1.91359).toFixed(5),
    // lat between 52.50685 and 52.46971 lng between -1.91359 and -1.87544
    options: [
      { id: "0", option: "A", answer: "Estonia" },
      { id: "1", option: "B", answer: "Belarus" },
      { id: "2", option: "C", answer: "Denmark" },
      { id: "3", option: "D", answer: "Britain" },
    ],
    correctAnswerIndex: 3,
  },
];

//sets a constant named API_KEY to a string that represents an API key for Google Maps Street View API.
const API_KEY = "AIzaSyBicqUIzS6qIzkk8vtr2bt5kZMlQpcMxW4";

const QuizFour = ({ navigation }) => {
  // state variables
  // Setting state variables for image URL, current question, selected option, score, refresh flag and message
  const [imageUrl, setImageUrl] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [refresh, setRefresh] = useState(false); // new state variable
  const [message, setMessage] = useState(null);

  // Function to handle when any option is selected as answer
  const handleAnswerA = (answer) => {
    // Checking if the selected answer is correct and incrementing score
    if (
      answer ===
      QuizQuestions[currentQuestion].options[
        QuizQuestions[currentQuestion].correctAnswerIndex
      ].answer
    ) {
      setScore(score + 1);
    }
    // Checking if the selected answer is correct and incrementing score
    if (
      currentQuestion === QuizQuestions.length - 1 &&
      answer ===
        QuizQuestions[currentQuestion].options[
          QuizQuestions[currentQuestion].correctAnswerIndex
        ].answer
    ) {
      navigation.navigate("Results", { score: score + 1 });
    } else if (currentQuestion === QuizQuestions.length - 1) {
      navigation.navigate("Results", { score: score });
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  // Part B of the function to handle when any option is selected as answer
  const handleAnswerB = (answer) => {
    if (
      answer ===
      QuizQuestions[currentQuestion].options[
        QuizQuestions[currentQuestion].correctAnswerIndex
      ].answer
    ) {
      setMessage("You got it right!");
      setScore(score + 1);
    } else {
      setMessage("You got it wrong!");
    }
  };

  // Function that combines both function A and B into one so it both can be called when button is pressed (without ruinning code :) )
  const handleAnswerAAndB = (answer) => {
    handleAnswerA(answer);
    handleAnswerB(answer);
  };

  // Function to handle refresh button click
  const handleRefresh = () => {
    setSelectedOption(null);
    setImageUrl("");
    setCurrentQuestion(currentQuestion);
    // Generate random latitude and longitude within a certain range around current question's coordinates
    const { lat, lng } = {
      lat: (
        Math.random() *
          (QuizQuestions[currentQuestion].lat -
            (QuizQuestions[currentQuestion].lat - 0.025)) +
        (QuizQuestions[currentQuestion].lat - 0.025)
      ).toFixed(5),
      lng: (
        Math.random() *
          (QuizQuestions[currentQuestion].lng -
            (QuizQuestions[currentQuestion].lng - 0.025)) +
        (QuizQuestions[currentQuestion].lng - 0.025)
      ).toFixed(5),
    };
    const url = `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${lat},${lng}&key=${API_KEY}`;

    //Axios library that was called earlier is being used here to get url of API
    Axios.get(url)
      .then((response) => {
        setImageUrl(response.request.responseURL);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //A use effect to help generate image based on url from API
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
  }, [currentQuestion, refresh]); // useEffect hook depends on refresh state

  //Code that is a useEffect to generate the message at the bottom with a timing aspect as well
  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage(null);
      }, 2000); // adjust the timeout duration as needed
      return () => clearTimeout(timeout);
    }
  }, [message]);

  //Rendering with return
  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {QuizQuestions[currentQuestion].question}
      </Text>
      {imageUrl ? (
        <Image style={styles.image} source={{ uri: imageUrl }} />
      ) : (
        <Text
          style={{
            color: "#f7d08a",
            fontWeight: "600",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          *No image available*
        </Text>
      )}
      {QuizQuestions[currentQuestion].options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={styles.button}
          onPress={() => handleAnswerAAndB(option.answer)}
        >
          <Text style={styles.buttonText}>
            {option.option} : {option.answer}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleRefresh}>
        <Text style={styles.buttonText}>Refresh</Text>
      </TouchableOpacity>
      <Text style={styles.score}>
        Score: {score}/{currentQuestion}
      </Text>
      {message && (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      )}
    </View>
  );
};

export default QuizFour;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0F1923",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#f7d08a",
  },
  image: {
    width: 900,
    height: 450,
    marginBottom: 20,
    borderRadius: 25,
    borderColor: "#f7d08a",
    borderWidth: 10,
  },
  button: {
    backgroundColor: "#f7d08a",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    minWidth: 200,
  },
  buttonText: {
    color: "#202c39",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    color: "#f7d08a",
  },
  refreshButton: {
    backgroundColor: "#2196F3",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    minWidth: 200,
  },
  messageContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#f7d08a", // red color for wrong message
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  messageText: {
    color: "#202c39",
    fontSize: 22,
    fontWeight: "bold",
  },
});
