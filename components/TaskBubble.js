import { StyleSheet, Text, View } from 'react-native';

export default function TaskBubble({ task }) {
  return (
    <View style={styles.taskBubble}>
      <Text style={styles.taskText}>{task}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskBubble: {
    backgroundColor: '#e9f1ff',
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
  },
  taskText: {
    fontSize: 18,
    color: '#1f2a44',
    fontWeight: '600',
  },
});
