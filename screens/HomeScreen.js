import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import IconActionButton from "../components/IconActionButton";
import TaskList from "../components/TaskList";
import colors from "../theme/colors";

export default function HomeScreen({ navigation, todos, onFinishTodo, onDeleteTodo }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My To-Do List</Text>
      <TaskList
        todos={todos}
        onFinishTodo={onFinishTodo}
        onDeleteTodo={onDeleteTodo}
      />

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
