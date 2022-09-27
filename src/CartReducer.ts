const CartReducer = (state = { cart: [] }, action: any) => {
  let cart = state.cart;
// TODO: Type safety must be added here.
  switch (action.type) {
    case "add":
      if (cart.find((item) => item.id === action.payload.id)) {
        let newCart = cart.filter((item) => {
          if (item.id === action.payload.id) {
            item.quantity++;
          }
          return item;
        });
        return {
          ...state,
          cart: newCart,
        };
      } else {
        action.payload.quantity = 1;
        cart.push(action.payload);
        return {
          ...state,
          cart: cart,
        };
      }
    case "update":
      if (cart.find((item) => item.id === action.payload.id)) {
        let newCart = cart.filter((item) => {
          if (item.id === action.payload.id) {
            item.quantity = action.payload.quantity;
          }
          return item.quantity > 0 ? item : null;
        });
        return {
          ...state,
          cart: newCart,
        };
      } else {
        return {
          ...state,
          cart: cart,
        };
      }
    case "delete":
      if (cart.find((item) => item.id === action.payload.id)) {
        let newCart = cart.filter((item) => item.id !== action.payload.id);
        return {
          ...state,
          cart: newCart,
        };
      } else {
        return {
          ...state,
          cart: cart,
        };
      }
    case "clear":
      return {
        ...state,
        cart: [],
      };
    default:
      return {
        ...state,
        cart: cart,
      };
  }
};

export default CartReducer;
