import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import AddTodoScreen from "./screens/AddTodoScreen";
import HomeScreen from "./screens/HomeScreen";
import colors from "./theme/colors";

const Stack = createNativeStackNavigator();

const initialTodos = [
  {
    id: "1",
    title: "Buy groceries",
    description: "Milk, eggs, bread, and fruit",
    finished: false,
  },
  {
    id: "2",
    title: "Finish MAD homework",
    description: "Complete all listed assignment requirements",
    finished: false,
  },
  {
    id: "3",
    title: "Go to the Gym",
    description: "45-minute workout session",
    finished: false,
  },
  {
    id: "4",
    title: "Study for everything",
    description: "Review lecture notes and practice questions",
    finished: false,
  },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (newTodo) => {
    setTodos((current) => [
      {
        id: `${Date.now()}`,
        finished: false,
        ...newTodo,
      },
      ...current,
    ]);
  };

  const handleFinishTodo = (id) => {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              finished: true,
            }
          : todo,
      ),
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.textPrimary,
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => (
            <HomeScreen
              {...props}
              todos={todos}
              onFinishTodo={handleFinishTodo}
              onDeleteTodo={handleDeleteTodo}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddTodo" options={{ title: "Add New Todo" }}>
          {(props) => <AddTodoScreen {...props} onSave={handleAddTodo} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
