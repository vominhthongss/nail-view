import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const VariantButton = ({ title, onPress, disabled = false }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    minHeight: 44, // Minimum height for touch target
    backgroundColor: "#007AFF", // Apple blue
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 8,
  },
  disabled: {
    backgroundColor: "#A0A0A0",
  },
  text: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "System",
  },
});
export default VariantButton;
