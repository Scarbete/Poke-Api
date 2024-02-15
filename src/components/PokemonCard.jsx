import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import '../App.css'


export const PokemonCard = (props) => {
    const [pokemonInfo, setPokemonInfo] = useState(null)
    const {pokemon} = props

    useEffect(() => {
        fetch(pokemon.url)
            .then(res => res.json())
            .then(data => setPokemonInfo(data))
    }, [])

    if (!pokemonInfo) return <div className={'pokemonCard'}>LOADING</div>

    return (
        <Link to={`/PokeInfo/${pokemon?.name}`}>
            <div className='pokemonCard'>
                <div className='pokemonName'>{pokemon?.name}</div>
                <img
                    src={pokemonInfo?.sprites?.other?.dream_world?.front_default}
                    alt={pokemon?.name}
                />
            </div>
        </Link>
    )
}