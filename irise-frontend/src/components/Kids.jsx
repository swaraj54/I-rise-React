

const Kids = ({ items }) => {
    console.log(items, "items")
    return (
        <>
            <div>Kidds</div>
            <div>Kidds 2</div>
            {items.map((i) => (
                <h1>{i}</h1>
            ))}
        </>
    )
}

export default Kids;