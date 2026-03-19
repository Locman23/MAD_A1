import { StyleSheet, View } from 'react-native';
import TaskBubble from './TaskBubble';
import colors from '../theme/colors';

export default function TaskList({ tasks }) {
  return (
    <View style={styles.listCard}>
      {tasks.map((task) => (
        <TaskBubble key={task} task={task} />
      ))}
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
    shadowOpacity: 0.30,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
    justifyContent: 'center',
  },
});
