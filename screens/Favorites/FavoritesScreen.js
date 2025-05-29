import { StyleSheet, Text, View } from "react-native";

export default function FavoritesScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.heading}>❤️ Danh sách mẫu đã lưu</Text>
      <View style={styles.box}>
        <Text>Mẫu bạn thích 1</Text>
      </View>
      <View style={styles.box}>
        <Text>Mẫu bạn thích 2</Text>
      </View>
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
  box: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
});
