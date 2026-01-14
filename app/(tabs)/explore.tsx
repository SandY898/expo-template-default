import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (!text.trim()) return;

    setTasks([...tasks, text]);
    setText("");
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Мои заметки</Text>

      <Text style={styles.counter}>Всего задач: {tasks.length}</Text>

      <TextInput
        style={styles.input}
        placeholder="Введите задачу..."
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity
        style={[styles.button, { opacity: text.trim() ? 1 : 0.5 }]}
        onPress={addTask}
        disabled={!text.trim()}
      >
        <Text style={styles.buttonText}>Добавить</Text>
      </TouchableOpacity>

      {tasks.length === 0 && (
        <Text style={styles.emptyText}>Задач пока нет 👀</Text>
      )}

      <FlatList
        data={tasks}
        keyExtractor={(_, index) => index.toString()}
        style={styles.list}
        renderItem={({ item, index }) => (
          <View style={styles.task}>
            <Text style={styles.taskText}>{item}</Text>

            <TouchableOpacity onPress={() => removeTask(index)}>
              <Text style={styles.delete}>✖</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  counter: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
    color: "#666",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  emptyText: {
    textAlign: "center",
    color: "#999",
    marginBottom: 10,
  },
  list: {
    marginTop: 10,
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#F2F2F7",
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
    flex: 1,
  },
  delete: {
    fontSize: 18,
    color: "red",
    marginLeft: 10,
  },
});
