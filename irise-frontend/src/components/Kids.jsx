import './Home.css';

const Kids = ({ items }) => {
    console.log(items, "items")
    return (
        <>
            <div id="myId">Kidds</div>
            <div>Kidds 2</div>
            {items ? <h1>We have items</h1> : <h1>Dont have items</h1>}
            {items.map((i) => (
                <h1 className="color-red">{i}</h1>
            ))}
        </>
    )
}

export default Kids;