/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBasket = /* GraphQL */ `
  subscription OnCreateBasket {
    onCreateBasket {
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
export const onUpdateBasket = /* GraphQL */ `
  subscription OnUpdateBasket {
    onUpdateBasket {
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
export const onDeleteBasket = /* GraphQL */ `
  subscription OnDeleteBasket {
    onDeleteBasket {
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
export const onCreateOrderDish = /* GraphQL */ `
  subscription OnCreateOrderDish {
    onCreateOrderDish {
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
export const onUpdateOrderDish = /* GraphQL */ `
  subscription OnUpdateOrderDish {
    onUpdateOrderDish {
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
export const onDeleteOrderDish = /* GraphQL */ `
  subscription OnDeleteOrderDish {
    onDeleteOrderDish {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateBasketDish = /* GraphQL */ `
  subscription OnCreateBasketDish {
    onCreateBasketDish {
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
export const onUpdateBasketDish = /* GraphQL */ `
  subscription OnUpdateBasketDish {
    onUpdateBasketDish {
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
export const onDeleteBasketDish = /* GraphQL */ `
  subscription OnDeleteBasketDish {
    onDeleteBasketDish {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateDish = /* GraphQL */ `
  subscription OnCreateDish {
    onCreateDish {
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
export const onUpdateDish = /* GraphQL */ `
  subscription OnUpdateDish {
    onUpdateDish {
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
export const onDeleteDish = /* GraphQL */ `
  subscription OnDeleteDish {
    onDeleteDish {
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
export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant {
    onCreateRestaurant {
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant {
    onUpdateRestaurant {
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant {
    onDeleteRestaurant {
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
