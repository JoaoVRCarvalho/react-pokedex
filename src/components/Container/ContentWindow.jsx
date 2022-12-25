import { React, useState } from 'react'
import PokemonCardsContainer from '../Cards/PokemonCardsContainer';
import SearchBar from '../Searchbar/SearchBar';
import "./ContentWindow.css"

function PokedexContainer(props) {
	const [search, setSearch] = useState("");

	return (
		<div className='container'>
			<div className='title-wrapper'>
				<h1 className='title'>
					POKEDEX!
					<i className='icon' />
				</h1>

			</div>
			<SearchBar
				buffer={props.buffer}
				pokemons={props.pokemons}
				setSearch={setSearch}
			/>
			<div className='search-cards-wrapper'>
				<PokemonCardsContainer
					isLoading={props.isLoading}
					pokemons={props.buffer}
					search={search}
					handleModal={props.handleModal}
					limit={props.limit}
					setLimit={props.setLimit}
					loadRef={props.loadRef}
				/>
			</div>
		</div>
	)
}

export default PokedexContainer;