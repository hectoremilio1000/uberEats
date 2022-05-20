/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBasket = /* GraphQL */ `
  query GetBasket($id: ID!) {
    getBasket(id: $id) {
      id
      userID
      restaurantID
      BasketDishes {
        items {
          id
          quantity
          basketID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          basketDishDishId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBaskets = /* GraphQL */ `
  query ListBaskets(
    $filter: ModelBasketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBaskets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        restaurantID
        BasketDishes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBaskets = /* GraphQL */ `
  query SyncBaskets(
    $filter: ModelBasketFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBaskets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        restaurantID
        BasketDishes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrderDish = /* GraphQL */ `
  query GetOrderDish($id: ID!) {
    getOrderDish(id: $id) {
      id
      quantity
      orderID
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderDishDishId
    }
  }
`;
export const listOrderDishes = /* GraphQL */ `
  query ListOrderDishes(
    $filter: ModelOrderDishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderDishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quantity
        orderID
        Dish {
          id
          name
          image
          description
          price
          restaurantID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        orderDishDishId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrderDishes = /* GraphQL */ `
  query SyncOrderDishes(
    $filter: ModelOrderDishFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderDishes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        quantity
        orderID
        Dish {
          id
          name
          image
          description
          price
          restaurantID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        orderDishDishId
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      userID
      total
      Restaurant {
        id
        name
        image
        deliveryFee
        minDeliveryTime
        maxDeliveryTime
        rating
        address
        lat
        lng
        Dishes {
          nextToken
          startedAt
        }
        Baskets {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      OrderDishes {
        items {
          id
          quantity
          orderID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderDishDishId
        }
        nextToken
        startedAt
      }
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderRestaurantId
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        total
        Restaurant {
          id
          name
          image
          deliveryFee
          minDeliveryTime
          maxDeliveryTime
          rating
          address
          lat
          lng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        OrderDishes {
          nextToken
          startedAt
        }
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        orderRestaurantId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        total
        Restaurant {
          id
          name
          image
          deliveryFee
          minDeliveryTime
          maxDeliveryTime
          rating
          address
          lat
          lng
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        OrderDishes {
          nextToken
          startedAt
        }
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        orderRestaurantId
      }
      nextToken
      startedAt
    }
  }
`;
export const getBasketDish = /* GraphQL */ `
  query GetBasketDish($id: ID!) {
    getBasketDish(id: $id) {
      id
      quantity
      basketID
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketDishDishId
    }
  }
`;
export const listBasketDishes = /* GraphQL */ `
  query ListBasketDishes(
    $filter: ModelBasketDishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBasketDishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quantity
        basketID
        Dish {
          id
          name
          image
          description
          price
          restaurantID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        basketDishDishId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBasketDishes = /* GraphQL */ `
  query SyncBasketDishes(
    $filter: ModelBasketDishFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBasketDishes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        quantity
        basketID
        Dish {
          id
          name
          image
          description
          price
          restaurantID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        basketDishDishId
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      address
      lat
      lng
      sub
      Orders {
        items {
          id
          userID
          total
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderRestaurantId
        }
        nextToken
        startedAt
      }
      Baskets {
        items {
          id
          userID
          restaurantID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        lat
        lng
        sub
        Orders {
          nextToken
          startedAt
        }
        Baskets {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        address
        lat
        lng
        sub
        Orders {
          nextToken
          startedAt
        }
        Baskets {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDish = /* GraphQL */ `
  query GetDish($id: ID!) {
    getDish(id: $id) {
      id
      name
      image
      description
      price
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDishes = /* GraphQL */ `
  query ListDishes(
    $filter: ModelDishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDishes = /* GraphQL */ `
  query SyncDishes(
    $filter: ModelDishFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDishes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
      id
      name
      image
      deliveryFee
      minDeliveryTime
      maxDeliveryTime
      rating
      address
      lat
      lng
      Dishes {
        items {
          id
          name
          image
          description
          price
          restaurantID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Baskets {
        items {
          id
          userID
          restaurantID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        deliveryFee
        minDeliveryTime
        maxDeliveryTime
        rating
        address
        lat
        lng
        Dishes {
          nextToken
          startedAt
        }
        Baskets {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRestaurants = /* GraphQL */ `
  query SyncRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRestaurants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        image
        deliveryFee
        minDeliveryTime
        maxDeliveryTime
        rating
        address
        lat
        lng
        Dishes {
          nextToken
          startedAt
        }
        Baskets {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
