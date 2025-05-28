import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const VariantInput = ({
  label,
  type = "text", // text, password, date, datetime
  value,
  onChange,
  placeholder,
  secureTextEntry,
  style,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleChange = (val) => {
    if (type === "date" || type === "datetime") {
      onChange(val);
      setShowDatePicker(false);
    } else {
      onChange(val);
    }
  };

  const renderInput = () => {
    if (type === "date" || type === "datetime") {
      return (
        <>
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={styles.dateInput}
          >
            <Text style={{ color: value ? "#000" : "#A0A0A0" }}>
              {value ? value.toLocaleString() : placeholder || "Chọn ngày"}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={value || new Date()}
              mode={type === "date" ? "date" : "datetime"}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={(e, selectedDate) => {
                if (Platform.OS !== "ios") setShowDatePicker(false);
                if (selectedDate) handleChange(selectedDate);
              }}
            />
          )}
        </>
      );
    }

    return (
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        value={value}
        onChangeText={handleChange}
        secureTextEntry={type === "password" || secureTextEntry}
        placeholderTextColor="#A0A0A0"
      />
    );
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      {renderInput()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: "500",
    color: "#000",
  },
  input: {
    width: "100%",
    backgroundColor: "#F2F2F7",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#000",
  },
  dateInput: {
    justifyContent: "center",
  },
});

export default VariantInput;
