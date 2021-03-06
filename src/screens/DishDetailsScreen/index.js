import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { useNavigation, useRoute } from "@react-navigation/native";
import { DataStore } from "aws-amplify";

import { Dish } from "../../models";
import { useBasketContext } from "../../contexts/BasketContext";

const DishDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params?.id;
  const [dish, setDish] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { addDishToBasket } = useBasketContext();

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };
  useEffect(() => {
    if (id) {
      DataStore.query(Dish, id).then(setDish);
    }
  }, [id]);

  const onAddToBasket = async () => {
    await addDishToBasket(dish, quantity);
    navigation.goBack();
  };

  if (!dish) {
    return <ActivityIndicator size="large" color="gray" />;
  } else {
    return (
      <View style={styles.page}>
        <Text>{dish.name}</Text>
        <Text>{dish.description}</Text>
        <View style={styles.separator} />
        <View style={styles.row}>
          <AntDesign
            name="minuscircleo"
            size={60}
            color={"black"}
            onPress={onMinus}
          />
          <Text style={styles.quantity}>{quantity}</Text>
          <AntDesign
            name="pluscircleo"
            size={60}
            color={"black"}
            onPress={onPlus}
          />
        </View>
        <Pressable style={styles.button} onPress={onAddToBasket}>
          <Text style={styles.buttonText}>
            Add {quantity} to basket &#8226; {getTotal()}
          </Text>
        </Pressable>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40, // temp fix
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "gray",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});

export default DishDetailsScreen;
