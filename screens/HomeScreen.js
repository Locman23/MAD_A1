import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import TaskList from "../components/TaskList";
import colors from "../theme/colors";

export default function HomeScreen({ navigation }) {
  const tasks = [
    "Buy groceries",
    "Finish MAD homework",
    "Go to the Gym",
    "Study for everything",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My To-Do List</Text>

      {/*TO-DO LISTING*/}
      <TaskList tasks={tasks} />

      <View style={styles.addBar}>
        <Pressable
          style={styles.addButton}
          onPress={() => navigation.navigate("AddTodo")}
        >
          <View style={styles.iconWrap}>
            <Ionicons name="add" size={20} color={colors.textPrimary} />
          </View>
          <Text style={styles.addButtonText}>Add New Todo</Text>
        </Pressable>
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
  addButton: {
    minHeight: 58,
    borderRadius: 18,
    backgroundColor: colors.buttonPrimary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    shadowColor: colors.shadow,
    shadowOpacity: 0.24,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  iconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "rgba(255, 255, 255, 0.16)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  addButtonText: {
    color: colors.textPrimary,
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
});
