import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import VariantButton from "./components/variant-button";
import VariantInput from "./components/variant-input";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [password, setPassword] = useState("");

  const handlePress = () => {
    alert("Đã nhấn nút Apple!");
  };

  return (
    <View style={styles.container}>
      <Text>Đây là app xem nail tuyệt vời</Text>
      <VariantButton title="Tiếp tục" onPress={handlePress} />
      <VariantInput
        label="Họ và tên"
        type="text"
        value={name}
        onChange={setName}
        placeholder="Nhập họ và tên"
      />

      <VariantInput
        label="Mật khẩu"
        type="password"
        value={password}
        onChange={setPassword}
        placeholder="••••••"
      />

      <VariantInput
        label="Ngày sinh"
        type="date"
        value={birthDate}
        onChange={setBirthDate}
        placeholder="Chọn ngày sinh"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
