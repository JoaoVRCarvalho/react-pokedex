import { React } from 'react'
import PokemonCards from '../Cards/PokemonCards';
import SearchBar from '../Searchbar/SearchBar';
import "./ContentWindow.css"

function PokedexContainer(props) {
	return (
		<div className='container'>
			<h1 className='title'>
				POKEDEX!
				<i className='icon' />
			</h1>
			<SearchBar />
			<div className='search-cards-wrapper'>
				<PokemonCards />
			</div>
		</div>
	)
}

export default PokedexContainer;