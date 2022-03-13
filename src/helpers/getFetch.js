export const products = [
  {
    id: "1",
    title: "Mesa",
    stock: 10,
    price: 11200,
    pictureUrl: "https://d1r8o43atolcyl.cloudfront.net/683765671106_1.jpg",
    description: "bla1 bla1 bla1 bla1",
    category: "hogar",
  },
  {
    id: "2",
    title: "Notebook",
    stock: 3,
    price: 75000,
    pictureUrl:
      "https://ar-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/2/B/2B0F2LA-1_T1626269191.png",
    description: "bla2 bla2 bla2 bla2",
    category: "tecnologia",
  },
  {
    id: "3",
    title: "Televisor",
    stock: 6,
    price: 55000,
    pictureUrl:
      "https://grupomansion.com/wp-content/uploads/2020/08/UN43T5300AKXZL1.jpg",
    description: "bla3 bla3 bla3 bla3",
    category: "tecnologia",
  },
  {
    id: "4",
    title: "Sillon",
    stock: 2,
    price: 16000,
    pictureUrl:
      "http://www.americanwood.com.ar/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/r/erika_bige_2.jpg",
    description: "bla4 bla4 bla4 bla4",
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
