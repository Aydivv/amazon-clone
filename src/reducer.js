//Data layer
export const initialState = {
  basket: [],
};

// selector

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

//Reducer is a rest context api function which pushes the data into a data layer

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];
      if (index >=0) {
        newBasket.splice(index, 1);

      } else{
        console.warn(
          'Cant remove product as its not in basket!'
          )
      }

      return {
        ...state,
        basket: newBasket
      }

    default:
      return state;
  }
};

export default reducer;
