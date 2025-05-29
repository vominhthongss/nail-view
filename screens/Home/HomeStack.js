import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const Stack = createNativeStackNavigator();

const HomeMainScreen = ({ navigation }) => {
  return (
    <View>
      <View
        style={{
          padding: 10,
          marginTop: 30,
          position: "absolute",
          zIndex: 1,
          backgroundColor: "#f2f2f2",
        }}
      >
        <Text style={styles.heading}>Chọn loại mẫu:</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("XuHướng")}
          >
            <Text style={styles.navButtonText}>🔥 Xu hướng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("Chủ đề")}
          >
            <Text style={styles.navButtonText}>🎨 Chủ đề</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("Người nổi")}
          >
            <Text style={styles.navButtonText}>🌟 Người nổi tiếng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ padding: 10, marginTop: 120 }}>
        <FlatList
          data={gridData("Trang chủ")}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.gridBox}>
              <Image
                style={{
                  flex: 1,
                  width: 200,
                  height: 200,
                  resizeMode: "cover",
                }}
                source={{
                  uri: "https://www.shutterstock.com/image-photo/glamorous-nail-art-closeup-red-600nw-2559156227.jpg",
                }}
              />
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

const gridData = (prefix) =>
  Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `${prefix} ${i + 1}`,
  }));

const GridScreen = ({ route }) => {
  const { title, prefix } = route.params;
  return (
    <View style={{ padding: 10, marginTop: 20 }}>
      <Text style={styles.heading}>{title}</Text>
      <FlatList
        data={gridData(prefix)}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.gridBox}>
            <Image
              style={{
                flex: 1,
                width: 200,
                height: 200,
                resizeMode: "cover",
              }}
              source={{
                uri: "https://www.shutterstock.com/image-photo/glamorous-nail-art-closeup-red-600nw-2559156227.jpg",
              }}
            />
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeMainScreen}
        options={{ title: "Trang chủ" }}
      />
      <Stack.Screen
        name="XuHướng"
        component={GridScreen}
        initialParams={{ title: "🔥 Xu hướng", prefix: "XuHướng" }}
      />
      <Stack.Screen
        name="Chủ đề"
        component={GridScreen}
        initialParams={{ title: "🎨 Chủ đề", prefix: "Chủ đề" }}
      />
      <Stack.Screen
        name="Người nổi"
        component={GridScreen}
        initialParams={{ title: "🌟 Người nổi tiếng", prefix: "Nổi tiếng" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: "#eee",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  navButtonText: {
    fontSize: 16,
  },
  gridBox: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    margin: 8,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});
