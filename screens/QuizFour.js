import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Axios from "axios";

const QuizQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
    lat: 48.8584,
    lng: 2.2945,
  },
  {
    question: "What is the tallest mountain in the world?",
    answer: "Mount Everest",
    lat: 128.9881,
    lng: 86.9253,
  },
  // add more questions and answers here
];

const API_KEY = "AIzaSyBicqUIzS6qIzkk8vtr2bt5kZMlQpcMxW4";

const QuizFour = ({ navigation }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const { lat, lng } = QuizQuestions[0];
    const url = `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${lat},${lng}&key=${API_KEY}`;

    Axios.get(url)
      .then((response) => {
        setImageUrl(response.request.responseURL);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {imageUrl ? (
        <Image style={styles.image} source={{ uri: imageUrl }} />
      ) : (
        <Text>No image available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 600,
    height: 300,
  },
});

export default QuizFour;
