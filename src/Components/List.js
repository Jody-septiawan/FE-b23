
function List() {

    const cars = [
        {
            id: 1,
            name: 'Mercedez-Benz'
        },
        {
            id: 2,
            name: 'BMW'
        },
        {
            id: 3,
            name: 'Tesla'
        },
        {
            id: 4,
            name: 'Audi cars'
        }];

    console.log(cars);

    return (
        <div className="App">
            <div className="App-header">
                <ol>
                {cars.map((car,index)=>(
                    <li key={car.id}>{car.name}</li>
                ))}
                </ol>
            </div>
        </div>
    )
}

export default List
