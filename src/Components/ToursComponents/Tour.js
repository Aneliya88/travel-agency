import { useState } from "react";
import ChangQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Tour = ({tour}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    return (<div className="tour">
        <img className="imgTour" src={`./${tour.img}.jpg`} alt='icon'/>
        <h2 className="tourName">{tour.name}</h2>
        <p className="tourName">$ {tour.price}</p>
        <p className="tourName">How many person?</p>
        <ChangQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button className="tourButton" onClick={() => {dispatch(addItemToCart({tour, quantity}));
    }}>Add to cart</button>
    </div>)
}
export default Tour;