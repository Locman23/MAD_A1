import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import IconActionButton from "../components/IconActionButton";
import TaskList from "../components/TaskList";
import colors from "../theme/colors";

export default function HomeScreen({ navigation }) {
  const todos = [
    {
      id: "1",
      title: "Buy groceries",
      description: "Milk, eggs, bread, and fruit",
    },
    {
      id: "2",
      title: "Finish MAD homework",
      description: "Complete all listed assignment requirements",
    },
    {
      id: "3",
      title: "Go to the Gym",
      description: "45-minute workout session",
    },
    {
      id: "4",
      title: "Study for everything",
      description: "Review lecture notes and practice questions",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My To-Do List</Text>
      <TaskList todos={todos} />

      <View style={styles.addBar}>
        <IconActionButton
          label="Add New Todo"
          icon="add"
          onPress={() => navigation.navigate("AddTodo")}
          accessibilityLabel="Add New Todo"
        />
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 28,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    color: colors.textPrimary,
    marginBottom: 20,
    letterSpacing: 0.4,
  },
  addBar: {
    marginTop: 18,
    minHeight: 56,
    justifyContent: "center",
  },
});
