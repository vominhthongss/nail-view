import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.heading}>👤 Thông tin cá nhân</Text>
      <Text>Tên: naillover_01</Text>
      <Text>Số mẫu đã lưu: 8</Text>
      <Text>Cài đặt: ngôn ngữ, chủ đề giao diện</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
  },
});
