import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { Ionicons } from "@expo/vector-icons";
import DishItem from "../../components/DishItem";

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.iconContainer}>
        <Ionicons
          name="arrow-back-circle"
          size={45}
          color="white"
          style={styles.imageIcon}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          ${restaurant.deliveryFee} {restaurant.maxDeliveryTime} &#8226;{" "}
          {restaurant.minDeliveryTime} minutes
        </Text>
      </View>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <DishItem dish={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 15,
  },

  container: {
    margin: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    color: "#525252",
    fontSize: 15,
  },
});

export default RestaurantDetailsScreen;
