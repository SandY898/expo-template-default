import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import favicon from "../../assets/images/favicon.png";
import MyButton from "../components/MyButton";

const fruits = ["🍎 Яблоко", "🍌 Банан", "🍊 Апельсин"];

export default function Nun() {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>

      <Image source={favicon} style={styles.image} />

      <MyButton title="Плюс 1" onPress={() => setCount(count + 1)} />
      <MyButton title="Минус 1" onPress={() => setCount(count - 1)} />

      <Text style={styles.counter}>{count} </Text>
      <Text style={styles.counter}>
        {count === 0 ? "Счётчик пуст" : ` ${count}`}{" "}
      </Text>

      {fruits.map((item, index) => (
        <Text key={index} style={{ fontSize: 20 }}>
          {item}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 40,
    color: "red",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
  },
  counter: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: "bold",
  },
});
