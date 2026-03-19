import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, StyleSheet, Text, View } from 'react-native';
import TaskList from '../components/TaskList';

export default function HomeScreen({ navigate }) {
  const tasks = ['Buy groceries', 'Finish math homework', 'Walk the dog', 'Call Sam'];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My To-Do List</Text>

      {/*TO-DO LISTING*/}
      <TaskList tasks={tasks} />

      <View style={styles.addBar}>
        <Button title="Add to do item" onPress={() => {}} color="#5c7cfa" />
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1f2e',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 28,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#e2e8f8',
    marginBottom: 20,
    letterSpacing: 0.4,
  },
  addBar: {
    marginTop: 18,
    minHeight: 56,
    justifyContent: 'center',
  },
});
