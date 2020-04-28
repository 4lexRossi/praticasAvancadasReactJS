import React, { useEffect, useState, memo } from 'react';

const areEqual = (prevProps, nextProps) => {
    return prevProps.loading === nextProps.loading
}

function Persons(props) {
    const { loading } = props
    const [person, setPerson] = useState()

    // componentDidMount   
    useEffect(() => {
        const { addPersons, loading } = props
        console.log('componentDidMount', addPersons)
        console.log('componentDidMount: loading', loading)
    }, [])

    useEffect(() => {
        console.log('componentDidUpdate', loading)
    }, [loading])

    useEffect (() => {
        return () => {
            console.log('componentWillUnmount: Pessoa Removida')
        }
    }, [])
 
    const handleperson = () => {
        setPerson('Cadastro Atualizada')        
    }

    console.log('Cadastro Atualizado', person)
    return (
    <div>
    <button onClick={handleperson}>Re-render</button>
        teste
    </div>
    )
}
export default memo(Persons, areEqual)