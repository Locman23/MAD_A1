import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import IconActionButton from "../components/IconActionButton";
import colors from "../theme/colors";

export default function AddTodoScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Text style={styles.title}>Add New Todo</Text>

        <View style={styles.formCard}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter task title"
            placeholderTextColor={colors.textSecondary}
            returnKeyType="next"
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="Enter task description"
            placeholderTextColor={colors.textSecondary}
            multiline
            textAlignVertical="top"
            returnKeyType="done"
          />
        </View>

        <View style={styles.actionsRow}>
          <View style={styles.actionItem}>
            <IconActionButton
              label="Cancel"
              icon="close-circle-outline"
              variant="secondary"
              accessibilityLabel="Cancel and go back"
              onPress={() => navigation.goBack()}
            />
          </View>

          <View style={styles.actionItem}>
            <IconActionButton
              label="Save"
              icon="save-outline"
              accessibilityLabel="Save todo"
              onPress={() => {}}
            />
          </View>
        </View>
      </KeyboardAvoidingView>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 28,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    color: colors.textPrimary,
    marginBottom: 20,
    letterSpacing: 0.4,
  },
  formCard: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.borderSubtle,
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 10,
  },
  input: {
    backgroundColor: colors.bubble,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    color: colors.textPrimary,
    fontSize: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 16,
  },
  descriptionInput: {
    minHeight: 140,
  },
  actionsRow: {
    marginTop: "auto",
    flexDirection: "row",
    gap: 12,
  },
  actionItem: {
    flex: 1,
  },
});