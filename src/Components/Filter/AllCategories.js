import Filter from "./Filter";

const AllCategories = () => {
    return (<div>
        <h1>What kind of tour do you like?</h1>
        <div className="countriesCategory">
            {['Latin America', 'North America', 'Asia', 'Europe', 'Africa', 'All']
            .map(category => <Filter key={category} category={category}/>)
            }
        </div>
    </div>)
}
export default AllCategories; 