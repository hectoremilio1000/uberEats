import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import RootNavigator from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
