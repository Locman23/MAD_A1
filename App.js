import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const tasks = ['Buy groceries', 'Finish math homework', 'Walk the dog', 'Call Sam'];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My To-Do List</Text>

      {/*TO-DO LISTING*/}
      <View style={styles.listCard}>
        {tasks.map((task) => (
          <View key={task} style={styles.taskBubble}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 28,
  },
    title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#162447',
    marginBottom: 20,
    letterSpacing: 0.4,
  },
  listCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 16,
    shadowColor: '#0b1324',
    shadowOpacity: 0.10,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    justifyContent: 'center',
  },
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
