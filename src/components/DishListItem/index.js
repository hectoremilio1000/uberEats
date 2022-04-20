import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DishListItem({ dish }) {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Dish", { id: dish.id });
  };
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.dscription} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>$ {dish.price}</Text>
      </View>
      {dish.image && (
        <Image source={{ uri: dish.image }} style={styles.image} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: "gray",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 75,
    aspectRatio: 1,
  },
});
