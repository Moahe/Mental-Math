import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import logo from "./assets/logo.png";

export default function App() {
  let ranNumber = () => Math.floor(Math.random() * 10) + 1;

  const [score, setScore] = React.useState(0);

  const randomNumberOne = ranNumber();
  const randomNumberTwo = ranNumber();
  var answers = [
    randomNumberOne + randomNumberTwo,
    randomNumberOne + ranNumber(),
    randomNumberTwo + ranNumber(),
  ];

  let checkAnswer = (answer: Number) => {
    if (answer === randomNumberOne + randomNumberTwo) {
      setScore(score + 1);
    }
  };

  const listItems = answers.map((value) => (
    <TouchableOpacity onPress={() => checkAnswer(value)} style={styles.button}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Your score: {score}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.instructions}>
          What is {randomNumberOne}+{randomNumberTwo}?
        </Text>
      </View>
      <View style={styles.buttonRow}>{listItems}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 3,
    width: 180,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRow: {
    flex: 4,
    flexDirection: "row",
  },
  logo: {
    width: 80,
    height: 50,
    marginBottom: 10,
  },
  instructions: {
    color: "#888",
    fontSize: 28,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "pink",
    width: 40,
    height: 40,
    margin: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    paddingRight: 1,
  },
});
