import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ImageBackground,
} from "react-native";
import splash from "./assets/background.png";

export default function App() {
  let ranNumber = () => Math.floor(Math.random() * 10) + 1;

  const [score, setScore] = React.useState(0);
  const [pressed, setPressed] = React.useState("pink");

  const randomNumberOne = ranNumber();
  const randomNumberTwo = ranNumber();
  const answers = [
    randomNumberOne + randomNumberTwo,
    randomNumberOne + ranNumber(),
    randomNumberTwo + ranNumber(),
  ];

  answers.sort(() => 0.5 - Math.random());

  let checkAnswer = (answer: Number) => {
    if (answer === randomNumberOne + randomNumberTwo) {
      setPressed("pink");
      setScore(score + 1);
    }
  };

  const listItems = answers.map((value, index) => (
    <TouchableHighlight
      onPress={() => checkAnswer(value)}
      underlayColor={
        value === randomNumberOne + randomNumberTwo ? "green" : "red"
      }
      style={styles.button}
      key={"" + value + "" + index}
    >
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableHighlight>
  ));

  return (
    <View style={styles.container}>
      <ImageBackground source={splash} style={styles.image}>
        <View style={styles.scoreboard}>
          <Text>Your score: {score}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.instructions}>
            What is {randomNumberOne}+{randomNumberTwo}?
          </Text>
        </View>
        <View style={styles.buttonRow}>{listItems}</View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scoreboard: {
    flex: 3,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 3,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRow: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 50,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  instructions: {
    color: "#FFF",
    fontSize: 28,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "pink",
    width: 85,
    height: 85,
    margin: 5,
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
