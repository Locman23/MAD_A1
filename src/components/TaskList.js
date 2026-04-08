import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import TaskBubble from "./TaskBubble";
import colors from "../theme/colors";

export default function TaskList({ todos, onFinishTodo, onDeleteTodo }) {
  const [expandedById, setExpandedById] = useState({});

  const toggleTodo = (id) => {
    setExpandedById((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  return (
    <View style={styles.listCard}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskBubble
            todo={item}
            expanded={Boolean(expandedById[item.id])}
            onToggle={() => toggleTodo(item.id)}
            onFinish={() => onFinishTodo?.(item.id)}
            onDelete={() => onDeleteTodo?.(item.id)}
          />
        )}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 16,
    shadowColor: colors.shadow,
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  contentContainer: {
    paddingVertical: 6,
  },
});
