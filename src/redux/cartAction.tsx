export const AddData = (Data: any) => {
  return {
    type: 'AddData',
    payload: Data,
  };
};
export const DeleteData = (id: any) => {
  return {
    type: 'DeleteData',
    payload: id,
  };
};
export const countIncrement = (Data: any) => {
  return {
    type: 'countIncrement',
    payload: Data,
  };
};
export const countDecrement = (Data: any) => {
  return {
    type: 'countDecrement',
    payload: Data,
  };
};

export const emptyCart = (Data: any) => {
  return {
    type: 'emptyCart',
    payload: Data,
  };
};

