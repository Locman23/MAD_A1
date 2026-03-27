import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../theme/colors";

export default function IconActionButton({
  label,
  icon,
  onPress,
  variant = "primary",
  accessibilityLabel,
}) {
  const isSecondary = variant === "secondary";

  return (
    <Pressable
      style={({ pressed }) => [
        styles.base,
        isSecondary ? styles.secondary : styles.primary,
        pressed && (isSecondary ? styles.secondaryPressed : styles.primaryPressed),
      ]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || label}
    >
      <View style={styles.iconWrap}>
        <Ionicons name={icon} size={20} color={colors.textPrimary} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 54,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  primary: {
    backgroundColor: colors.buttonPrimary,
    shadowColor: colors.shadow,
    shadowOpacity: 0.24,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  primaryPressed: {
    backgroundColor: colors.buttonPrimaryPressed,
  },
  secondary: {
    backgroundColor: colors.bubble,
    borderWidth: 1,
    borderColor: colors.borderSubtle,
  },
  secondaryPressed: {
    opacity: 0.9,
  },
  iconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.overlayLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  label: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
});