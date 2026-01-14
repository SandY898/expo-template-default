import { Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export default function MyButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#34C759",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});
