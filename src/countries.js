
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Tours from './Components/ToursComponents/Tours';

function Countries() {
  return (
    <div className="Countries">
      <div className='block'>
        <AllCategories/>
        <Cart/>
      </div>
      <div className='block'>
        <Tours/>
      </div>
    </div>
  );
}

export default Countries;
