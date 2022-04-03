import { database } from "../api/database";

export const getOrders = () => {
  const { orders } = database;
  const { customers } = database;
  const data = orders.map((order) => {
    const customer = customers.find((item) => item.id === order.customerId);

    return { ...order, firstname: customer.firstname };
  });

  return {
    type: "GET_ORDER",
    payload: data,
  };
};

export const deleteOrder = (order) => {
  return {
    type: "DELETE_ORDER",
    payload: order,
  };
};

export const getSingleOrder = (id) => {
  return {
    type: "GET_SINGLE_ORDER",
    payload: id,
  };
};

export const editSingleOrder = (order) => {
    return {
        type: "EDIT_SINGLE_ORDER",
        payload: order,
      };
}
