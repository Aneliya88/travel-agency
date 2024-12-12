import { useSelector } from "react-redux";
import dataTours from "../../data/dataTours";
import Tour from "./Tour";
import { getSelectedCategory } from "../../redux/toursSlice";

const Tours = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className="tours">
            {dataTours
                .filter(tour => {
                    if (selectedCategory === 'All') return true;
                    return selectedCategory === tour.category;
                })
                .map(tour => (
                    <Tour key={tour.id} tour={tour} /> 
                ))}
        </div>
    );
}

export default Tours;
