export const products = [
    {id:'1', title:'reloj', stock:10, price:2000, pictureUrl:'https://cdn.shopify.com/s/files/1/0600/0368/0436/products/97B183_add696e6-d53f-4d41-848e-ed48c6886e51_1512x.jpg?v=1639509712'},
    {id:'2', title:'notebook', stock:3, price:75000, pictureUrl:'https://ar-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/2/B/2B0F2LA-1_T1626269191.png'},
    {id:'3', title:'televisor', stock:6, price:55000, pictureUrl:'https://grupomansion.com/wp-content/uploads/2020/08/UN43T5300AKXZL1.jpg'},
    {id:'4', title:'sillon', stock:2, price:16000, pictureUrl:'http://www.americanwood.com.ar/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/r/erika_bige_2.jpg'}
  ]
  export const getFetch = new Promise ((resolve) => {
      setTimeout(()=> {
        resolve(products)
      }, 2000)
  })

