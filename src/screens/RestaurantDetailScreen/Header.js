import { View, Text, Image } from "react-native";
import styles from "./styles";

const IMAGE_DEFAULT =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";

const Header = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      <Image
        source={{
          uri: restaurant.image.startsWith("http")
            ? restaurant.image
            : IMAGE_DEFAULT,
        }}
        style={styles.image}
      />

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          ${restaurant.deliveryFee.toFixed(2)}{" "}
          {restaurant.maxDeliveryTime.toFixed(1)} &#8226;{" "}
          {restaurant.minDeliveryTime.toFixed(1)} minutes
        </Text>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

export default Header;
