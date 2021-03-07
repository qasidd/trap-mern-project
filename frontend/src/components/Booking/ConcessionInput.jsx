const ConcessionInput = ({ index, updateConcession }) => {

    return (
        <div className="form-row mb-2">
            <div className="col-6">
                <select
                    name="concessionTypeSelect"
                    id="concessionTypeSelect"
                    className="form-control"
                    onChange={({ target }) => { updateConcession(index, 'type', target.value) }}
                >
                    <option value="Popcorn">Popcorn</option>
                    <option value="Drink">Drink</option>
                    <option value="Nachos">Nachos</option>
                </select>
            </div>
            <div className="col-4">
                <select
                    name="concessionSizeSelect"
                    id="concessionSizeSelect"
                    className="form-control"
                    onChange={({ target }) => { updateConcession(index, 'size', target.value) }}
                >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                </select>
            </div>
            <div className="col-2">
                <input
                    type="number"
                    name="concessionQuantityInput"
                    id="concessionQuantityInput"
                    className="form-control"
                    value="0"
                    onChange={({ target }) => { updateConcession(index, 'quantity', target.value) }}
                />
            </div>
        </div>
    );
}

export default ConcessionInput;