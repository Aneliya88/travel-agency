import { useDispatch } from "react-redux";
import dataTours from "../../data/dataTours";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    const tours = dataTours.find(item => item.id === cartItem.tourId);
    const dispatch = useDispatch();
    return (<div className="cart">
        <p>{tours.name}</p>
        <p> {cartItem.quantity} tour(s)</p>
        <p>Price: ${tours.price*cartItem.quantity}</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="iconCart" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="Delete"/> 
        </span>
    </div>)
}
export default CartItem;