import uuid from 'uuid/v5';

const Types = {
  ADD_TO_CART: 'cart/ADD_TO_CART',
  SET_QUANTITY: 'cart/SET_QUANTITY',
  REMOVE_FROM_CART: 'cart/REMOVE_FROM_CART',
  SET_PAYMENT_METHOD: 'cart/SET_PAYMENT_METHOD',
};

const INITIAL_STATE = {
  items: {},
  paymentMethod: {},
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_TO_CART: {
      const item = {
        id: uuid(),
        quantity: action.payload.quantity,
        data: action.payload.item,
      };

      const items = [...state.items, item];

      return {
        ...state,
        items,
      };
    }

    case Types.SET_QUANTITY: {
      const { itemId, quantity } = action.payload;

      const items = state.items.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity,
          };
        }

        return item;
      });

      return {
        ...state,
        items,
      };
    }

    case Types.REMOVE_FROM_CART: {
      const { itemId } = action.payload;

      const items = state.items.filter(item => item.id !== itemId);

      return {
        ...state,
        items,
      };
    }

    case Types.SET_PAYMENT_METHOD: {
      return {
        ...state,
        paymentMethod: action.payload.data,
      };
    }

    default:
      return state;
  }
}

export const Creators = {
  addToCart: (item, quantity) => ({
    type: Types.ADD_TO_CART,
    payload: {
      item,
      quantity,
    },
  }),

  setQuantity: (itemId, quantity) => ({
    type: Types.SET_QUANTITY,
    payload: {
      itemId,
      quantity,
    },
  }),

  removeFromCart: itemId => ({
    type: Types.REMOVE_FROM_CART,
    payload: {
      itemId,
    },
  }),

  setPaymentMethod: data => ({
    type: Types.SET_PAYMENT_METHOD,
    payload: {
      data,
    },
  }),
};

export const CartTypes = Types;

export const CartActions = Creators;
