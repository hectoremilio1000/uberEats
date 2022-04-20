import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RestaurantItem = ({ restaurant }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Restaurant", { id: restaurant.id });
  };

  return (
    <Pressable style={styles.restaurantContainer} onPress={onPress}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            ${restaurant.deliveryFee} {restaurant.maxDeliveryTime} &#8226;{" "}
            {restaurant.minDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{restaurant.rating}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  restaurantContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
  rating: {
    fontSize: 10,
    marginLeft: "auto",
    backgroundColor: "lightgray",
    padding: 5,
    width: 30,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default RestaurantItem;
