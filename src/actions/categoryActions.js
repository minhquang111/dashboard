import { database } from "../api/database";

export const getCategory = () => {
  const { categories } = database;

  return {
    type: "GET_CATEGORY",
    payload: categories,
  };
};
