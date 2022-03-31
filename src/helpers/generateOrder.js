import { getFirestore, collection, addDoc } from "firebase/firestore";

export const generateOrder = (dataForm, totalPrice, cartList) => {
  const db = getFirestore();
  let order = {};

  order.buyer = dataForm;
  order.total = totalPrice;

  order.items = cartList.map(({ id, title, price }) => {
    return { id, title, price };
  });

  const queryColletctionSet = collection(db, "orders");

  return addDoc(queryColletctionSet, order);
};
