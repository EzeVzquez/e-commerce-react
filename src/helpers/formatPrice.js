export const formatPrice = (price) => {
  const currency = {
    style: "currency",
    currency: "ARS",
  };
  const numberFormat = new Intl.NumberFormat("es-AR", currency);

  return numberFormat.format(price);
};
