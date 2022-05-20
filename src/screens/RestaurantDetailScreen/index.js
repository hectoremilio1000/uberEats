import { useState, useEffect } from "react";

import {
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
  Text,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import { useNavigation, useRoute } from "@react-navigation/native";

import { DataStore } from "aws-amplify";
import { Restaurant, Dish } from "../../models";

import styles from "./styles";
import BasketContextProvider, {
  useBasketContext,
} from "../../contexts/BasketContext";

const RestaurantDetailsScreen = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();

  const id = route.params?.id;

  const {
    setRestaurant: setBasketRestaurant,
    basket,
    basketDishes,
  } = useBasketContext();

  useEffect(() => {
    if (!id) {
      return;
    }
    setBasketRestaurant(null);
    DataStore.query(Restaurant, id).then(setRestaurant);
    DataStore.query(Dish, dish => dish.restaurantID("eq", id)).then(setDishes);
  }, [id]);

  useEffect(() => {
    setBasketRestaurant(restaurant);
  }, [restaurant]);

  if (!restaurant) {
    return (
      <View style={[styles.containerActivity, styles.horizontal]}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  } else {
    return (
      <View style={styles.page}>
        <FlatList
          ListHeaderComponent={() => <Header restaurant={restaurant} />}
          data={dishes}
          renderItem={({ item }) => <DishListItem dish={item} />}
          keyExtractor={item => item.name}
        />
        <Ionicons
          name="arrow-back-circle"
          size={45}
          color="white"
          style={styles.iconContainer}
          onPress={() => navigation.goBack()}
        />
        {basket && (
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Basket")}
          >
            <Text style={styles.buttonText}>
              Open Basket ({basketDishes.length})
            </Text>
          </Pressable>
        )}
      </View>
    );
  }
};

export default RestaurantDetailsScreen;
