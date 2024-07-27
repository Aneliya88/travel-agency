function Countries ({src, alt="Vacation", width=350, height=490, text}) {
    return (
        <div className="countries">
            <img className="imgCountry" src={src} alt={alt} width={width} height={height}/>
            <p className="textCountry">{text}</p>
        </div>
    )
}
export default Countries;