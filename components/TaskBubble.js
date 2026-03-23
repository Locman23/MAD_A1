import { StyleSheet, Text, View } from "react-native";
import colors from "../theme/colors";

export default function TaskBubble({ task }) {
  return (
    <View style={styles.taskBubble}>
      <Text style={styles.taskText}>{task}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskBubble: {
    backgroundColor: colors.bubble,
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
  },
  taskText: {
    fontSize: 18,
    color: colors.textSecondary,
    fontWeight: "600",
  },
});
