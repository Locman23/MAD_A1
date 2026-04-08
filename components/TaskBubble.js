import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../theme/colors";

export default function TaskBubble({ todo, expanded, onToggle }) {
  return (
    <View style={styles.taskBubble}>
      <View style={styles.headerRow}>
        <Text style={styles.taskText}>{todo.title}</Text>

        <Pressable
          onPress={onToggle}
          accessibilityRole="button"
          accessibilityLabel={expanded ? "Collapse todo" : "Expand todo"}
          style={styles.caretButton}
        >
          <Ionicons
            name={expanded ? "caret-up" : "caret-down"}
            size={18}
            color={colors.textSecondary}
          />
        </Pressable>
      </View>

      {expanded ? (
        <View style={styles.expandedContent}>
          <Text style={styles.descriptionText}>{todo.description}</Text>

          <View style={styles.controlPanel}>
            <Ionicons name="checkmark-circle" size={24} color="#4ade80" />
            <Ionicons name="trash" size={22} color="#f87171" />
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  taskBubble: {
    backgroundColor: colors.bubble,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  taskText: {
    fontSize: 18,
    color: colors.textSecondary,
    fontWeight: "600",
    flex: 1,
    marginRight: 12,
  },
  caretButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.overlayLight,
  },
  expandedContent: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.borderSubtle,
    paddingTop: 10,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 21,
    color: colors.textPrimary,
  },
  controlPanel: {
    marginTop: 12,
    flexDirection: "row",
    gap: 16,
  },
});
