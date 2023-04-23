import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Questions from "../slices/Questions";
import { CheckBox } from "react-native-elements";

const QuizOne = () => {
  const data = Questions;
  const [answer, setAnswer] = useState();
  // const currentQuestion = data[0];

  return (
    <View>
      <Text style={styles.question}>{question}</Text>
      <View>
        {answers.map((answer) => (
          <CheckBox
            center
            key={answer.id}
            title={answer.choice}
            // if these are not empty strings, the default checkbox appears
            checkedIcon=""
            uncheckedIcon=""
            checked={this.state[answer.id] || false}
            // ternary conditionally renders the color of choice container
            containerStyle={
              this.state[answer.id]
                ? { backgroundColor: answer.isCorrect ? "lightgreen" : "pink" }
                : null
            }
            onPress={() => this.handleSelection(answer)}
          />
        ))}
      </View>
    </View>
  );
};

export default QuizOne;

const styles = StyleSheet.create({});
