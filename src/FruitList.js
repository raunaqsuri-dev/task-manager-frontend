
function FruitList(){
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

    return (
        <div>
            <h1>Fruit List</h1>
            <ul>
                {fruits.map((fruit, index ) => (
                    <li key = {index} style={{ padding: '8px', borderBottom: '1px solid #ccc' }} > {fruit} </li>
                ))}
            </ul>
        </div>
    );
}
export default FruitList