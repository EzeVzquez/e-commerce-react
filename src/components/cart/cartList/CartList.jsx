import { CartCard } from "../cartCard/CartCard"

export const CartList = ({cartList, deleteItem})=> {
    return(
        <>
        {cartList.map((product) => (
          <div key={product.id}>
            <CartCard
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              count={product.cantidad}
              onDelete={deleteItem}
              totalItem={product.cantidad * product.price}
            ></CartCard>
          </div>
        ))}
        </>
    )
}