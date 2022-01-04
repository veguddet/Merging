const initialstate = {
  cartList: [],
};

const cartReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'AddData':
      return {...state, cartList: [...state.cartList, action.payload]};
    case 'DeleteData':
      return {
        ...state,
        cartList: state.cartList.filter(
          cartReducer => cartReducer.id !== action.payload,
        ),
      };

    case 'countIncrement':
      console.log('asas');
      return {
        ...state,
        cartList: state.cartList.map(list => {
          if (list.id == action.payload.id) {
            console.log('list', list);
            return action.payload;
          } else {
            console.log('elesess', list);
            return list;
          }
        }),
      };
    case 'countDecrement':
      console.log('asas');
      return {
        ...state,
        cartList: state.cartList.map(list => {
          if (list.id == action.payload.id) {
            console.log('list', list);
            return action.payload;
          } else {
            console.log('elesess', list);
            return list;
          }
        }),
      };
    case 'emptyCart':
      return {...state, cartList: []};

    default:
      return state;
  }
};
export default cartReducer;
