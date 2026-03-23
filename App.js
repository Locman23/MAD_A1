import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTodoScreen from "./screens/AddTodoScreen";
import HomeScreen from "./screens/HomeScreen";
import colors from "./theme/colors";

const Stack = createNativeStackNavigator();

export default function App() {
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
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddTodo"
          component={AddTodoScreen}
          options={{ title: "Add New Todo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
