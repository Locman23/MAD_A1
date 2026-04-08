import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useRef, useState } from "react";
import AddTodoScreen from "./screens/AddTodoScreen";
import HomeScreen from "./screens/HomeScreen";
import colors from "./theme/colors";

const Stack = createNativeStackNavigator();
const TODOS_STORAGE_KEY = "todos_storage";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isStorageAvailable, setIsStorageAvailable] = useState(true);
  const hasShownStorageWarning = useRef(false);

  const handleStorageError = (action, error) => {
    const message = String(error?.message || error || "");

    if (message.includes("Native module is null")) {
      if (!hasShownStorageWarning.current) {
        console.warn(
          "AsyncStorage native module is unavailable. Running without local persistence.",
        );
        hasShownStorageWarning.current = true;
      }
      setIsStorageAvailable(false);
      return;
    }

    console.warn(`Failed to ${action} todos from storage`, error);
  };

  useEffect(() => {
    if (!isStorageAvailable) {
      setIsLoaded(true);
      return;
    }

    const loadTodos = async () => {
      try {
        const stored = await AsyncStorage.getItem(TODOS_STORAGE_KEY);

        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setTodos(parsed);
          }
        }
      } catch (error) {
        handleStorageError("load", error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadTodos();
  }, [isStorageAvailable]);

  useEffect(() => {
    if (!isLoaded || !isStorageAvailable) {
      return;
    }

    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
      } catch (error) {
        handleStorageError("save", error);
      }
    };

    saveTodos();
  }, [todos, isLoaded]);

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
