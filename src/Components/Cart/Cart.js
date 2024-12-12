import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return (<div>
        <h3>Total: ${totalPrice}</h3>
        {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
    </div>)
}
export default Cart;