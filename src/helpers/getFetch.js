export const products = [
  {
    id: "1",
    title: "Mesa",
    stock: 10,
    price: 11200,
    pictureUrl: "https://images.pexels.com/photos/11112739/pexels-photo-11112739.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    description: "Mesa rectangular de madera",
    category: "hogar",
  },
  {
    id: "2",
    title: "Mouse",
    stock: 3,
    price: 5000,
    pictureUrl: "https://images.pexels.com/photos/9058886/pexels-photo-9058886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Mouse de ultima generacion",
    category: "tecnologia",
  },
  {
    id: "3",
    title: "Camara",
    stock: 6,
    price: 55000,
    pictureUrl: "https://images.pexels.com/photos/9660955/pexels-photo-9660955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Camara de fotos con una excelente calidad",
    category: "tecnologia",
  },
  {
    id: "4",
    title: "Sillon",
    stock: 2,
    price: 16000,
    pictureUrl:
    "https://images.pexels.com/photos/11112731/pexels-photo-11112731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Sillon gris de tamaño pequeño",
    category: "hogar",
  },
];

export const getFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export const getProduct = async (id) => {
  const products = await getFetch;
  return products.find((product) => product.id === id);
};
