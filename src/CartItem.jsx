export const CartItem = (props) => {
    return (
        <div>
            <p>{props.cartItem.name} ${props.cartItem.price} x {props.count}</p>
            <button onClick={()=> props.removeFromFav(props.cartItem.index)}>-</button><button onClick={()=> props.updateCart(props.cartItem.index)}>+</button>
        </div>
    )
}