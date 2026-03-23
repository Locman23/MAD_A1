import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
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
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="Enter task description"
            placeholderTextColor={colors.textSecondary}
            multiline
            textAlignVertical="top"
          />
        </View>

        <View style={styles.actionsRow}>
          <Pressable
            style={[styles.actionButton, styles.cancelButton]}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="close-circle-outline" size={20} color={colors.textPrimary} />
            <Text style={styles.actionText}>Cancel</Text>
          </Pressable>

          <Pressable style={[styles.actionButton, styles.saveButton]} onPress={() => {}}>
            <Ionicons name="save-outline" size={20} color={colors.textPrimary} />
            <Text style={styles.actionText}>Save</Text>
          </Pressable>
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
    borderColor: "rgba(255, 255, 255, 0.08)",
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
    borderColor: "rgba(255, 255, 255, 0.1)",
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
  actionButton: {
    flex: 1,
    minHeight: 54,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  cancelButton: {
    backgroundColor: colors.bubble,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
  },
  saveButton: {
    backgroundColor: colors.buttonPrimary,
  },
  actionText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
});