import { StyleSheet, Text, View } from "react-native";
import VariantInput from "../../components/variant-input";

export default function SearchScreen() {
  return (
    <View style={styles.screenContainer}>
      <VariantInput
        label="Tìm mẫu nail"
        type="text"
        value={""}
        onChange={() => {}}
        placeholder="Lấp lánh, hồng nhạt,..."
      />
      <Text style={styles.heading}>Bộ lọc:</Text>
      <Text>- Màu sắc / Chủ đề / Người nổi tiếng</Text>
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
