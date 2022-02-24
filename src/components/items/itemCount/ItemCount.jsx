import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    const agregar = () => {
        if(count < stock) {
            setCount(count+1)
        }
    };

    const quitar = () => {
        if(count > 0){
            setCount(count-1) 
        }
    }

    return (
        <div>
            <p>{count}</p>
            <button disabled={count === stock} onClick={agregar}>+</button>
            <button disabled={count === 0} onClick={quitar}>-</button>
            <button disabled={count === 0} onClick={ () => onAdd(count)}>Agregar al carrito</button>
        </div>
    )


}

export default ItemCount;