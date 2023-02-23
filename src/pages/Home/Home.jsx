import React from 'react'
import Cards from '../../components/Cards/Cards.jsx'

function Home({characters,charactersSetter}) {
    return (
        <div className='App' style={{ padding: '0px' }}>
            <Cards characters={characters} charactersSetter={charactersSetter}/>
        </div>
    )
}

export default Home