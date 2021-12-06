const initialstate = [];
const cartReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'AddData':
      return [...state, action.payload];
    case 'DeleteData':
        return state.filter(cartReducer => cartReducer.id !== action.payload.id)
    default:
        return state
  }
};
export default cartReducer;
