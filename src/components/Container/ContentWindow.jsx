import { React, useState } from 'react'
import PokemonCards from '../Cards/PokemonCards';
import SearchBar from '../Searchbar/SearchBar';
import "./ContentWindow.css"

function PokedexContainer(props) {
	const [search, setSearch] = useState("");

	return (
		<div className='container'>
			<h1 className='title'>
				POKEDEX!
				<i className='icon' />
			</h1>
			<SearchBar
				buffer={props.buffer}
				pokemons={props.pokemons}
				setSearch={setSearch}
			/>
			<div className='search-cards-wrapper'>
				<PokemonCards
					pokemons={props.buffer}
					search={search}
					handleModal={props.handleModal}
				/>
			</div>
		</div>
	)
}

export default PokedexContainer;