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
];
