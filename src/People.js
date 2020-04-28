import React from 'react';
import PropTypes from 'prop-types';

function People(props) {   
      
    const { homens, mulheres, dogs, cats, birds, somaPessoas, somaPets, onClick } = props
    
    return (
        <div>
            <h2>Homens: {homens}</h2>
            <h2>Mulheres: {mulheres}</h2>
            <h2>Cachorros: {dogs}</h2>
            <h2>Gatos: {cats}</h2>
            <h2>Pássaro: {birds}</h2>
            <div>
                Quantidade de pessoas: {somaPessoas}
            </div>
            <div>
                Quantidade de pets: {somaPets}
            </div>
            <button onClick={onClick}>clique aqui</button>
        </div>
    )
}

People.defaultProps = {
    homens: true,
    mulheres: 0,
    somaPessoas: [],
    somaPets: []
}

People.propTypes = {
    mulheres: PropTypes.number.isRequired,
    somaPessoas: PropTypes.array,
    somaPets: PropTypes.array,
    onClick: PropTypes.func.isRequired,
    homens: PropTypes.bool.isRequired
}

export default People