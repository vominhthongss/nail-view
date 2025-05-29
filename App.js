import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import HomeStack from "./screens/Home/HomeStack";
import SearchScreen from "./screens/Search/SearchScreen";
import FavoritesScreen from "./screens/Favorites/FavoritesScreen";

const Tab = createBottomTabNavigator();
// Yêu thích

// Thông tin tài khoản
function ProfileScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.heading}>👤 Thông tin cá nhân</Text>
      <Text>Tên: naillover_01</Text>
      <Text>Số mẫu đã lưu: 8</Text>
      <Text>Cài đặt: ngôn ngữ, chủ đề giao diện</Text>
    </View>
  );
}

// App chính
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case "Trang chủ":
                iconName = "home-outline";
                break;
              case "Tìm kiếm":
                iconName = "search-outline";
                break;
              case "Yêu thích":
                iconName = "heart-outline";
                break;
              case "Tài khoản":
                iconName = "person-outline";
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { height: 80, paddingBottom: 20 },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Trang chủ" component={HomeStack} />
        <Tab.Screen name="Tìm kiếm" component={SearchScreen} />
        <Tab.Screen name="Yêu thích" component={FavoritesScreen} />
        <Tab.Screen name="Tài khoản" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
  searchBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
});
