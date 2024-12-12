const ChangQuantity = ({quantity, setQuantity}) => {
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }
    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }
    return (<div>
        <button className="tourButton" onClick={addQuantity}>+</button>
        <span className="tourButton"> {quantity} </span>
        <button className="tourButton" onClick={removeQuantity}>-</button>
    </div>)
}
export default ChangQuantity;