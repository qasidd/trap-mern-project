import { useState } from 'react';

const ConcessionInput = ({ index, concessions, updateType, updateSize, updateQuantity }) => {

    return (
        <div className="form-row mb-2">
            <div className="col-6">
                <select 
                    name="concessionTypeSelect"
                    id="concessionTypeSelect" 
                    className="form-control"
                    onChange={({target}) => { updateType(index, target.value) }}
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
                    onChange={({target}) => { updateSize(index, target.value) }}
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
                    onChange={({target}) => { updateQuantity(index, target.value) }}
                />
            </div>
        </div>
    );
}

export default ConcessionInput;