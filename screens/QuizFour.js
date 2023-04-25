import axios from "axios";
import React, { useEffect, useState } from "react";

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
    lat: 48.8566,
    lng: 2.3522,
  },
  {
    question: "What is the tallest mountain in the world?",
    answer: "Mount Everest",
    lat: 27.9881,
    lng: 86.9253,
  },
  // add more questions and answers here
];

const API_KEY = "AIzaSyBicqUIzS6qIzkk8vtr2bt5kZMlQpcMxW4";

const QuizFour = ({ navigation }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const { lat, lng } = quizQuestions[0];
    const url = `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${lat},${lng}&key=${API_KEY}`;

    axios
      .get(url)
      .then((response) => {
        setImageUrl(response.request.responseURL);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <img src={imageUrl} alt="Street view" />
    </div>
  );
};

export default QuizFour;
