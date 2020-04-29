import React from 'react';
import Proptypes from 'prop-types';

function Calc(props) {
    const { min, max, onChange } = props
    
    return (
        <div>
            <h3>Valor mínimo: {min}</h3>
            <h3>Valor máximo: {max}</h3>
            <input type="text" onChange={onChange} />
        </div>
    )
}

Calc.prototypes = {
    min: Proptypes.number.isRequired,
    max: Proptypes.number.isRequired,
    onChange: Proptypes.func.isRequired
}

export default Calc