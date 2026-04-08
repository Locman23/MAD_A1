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
  },
  {
    id: "2",
    title: "Finish MAD homework",
    description: "Complete all listed assignment requirements",
  },
  {
    id: "3",
    title: "Go to the Gym",
    description: "45-minute workout session",
  },
  {
    id: "4",
    title: "Study for everything",
    description: "Review lecture notes and practice questions",
  },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (newTodo) => {
    setTodos((current) => [
      {
        id: `${Date.now()}`,
        ...newTodo,
      },
      ...current,
    ]);
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
          {(props) => <HomeScreen {...props} todos={todos} />}
        </Stack.Screen>
        <Stack.Screen name="AddTodo" options={{ title: "Add New Todo" }}>
          {(props) => <AddTodoScreen {...props} onSave={handleAddTodo} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
