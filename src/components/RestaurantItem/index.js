import { StyleSheet, Text, View, Image } from "react-native";

const RestaurantItem = props => {
  const {
    name,
    image,
    deliveryFee,
    maxDeliveryTime,
    minDeliveryTime,
    rating,
  } = props.restaurant;
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            ${deliveryFee} {maxDeliveryTime} &#8226; {minDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{rating}</Text>
        </View>
      </View>
    </View>
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
