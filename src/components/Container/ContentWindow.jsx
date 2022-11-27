import { React, useEffect, useState } from 'react'
import PokemonCards from '../Cards/PokemonCards';
import SearchBar from '../Searchbar/SearchBar';
import "./ContentWindow.css"

function PokedexContainer() {
	const [pokemons, setPokemons] = useState([]);
	const [ buffer, setBuffer ] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
				.then((res) => res.json())
				.then((data) => {
					const { results } = data;
					let promiseArr = results.map(result => {
						return fetch(result.url).then(res => res.json())
					})
					return Promise.all(promiseArr);
				}).then(data => {
					setPokemons(data)
					setBuffer(data)
				})
		}
		fetchData();
	}, []);


	return (
		<div className='container'>
			<h1 className='title'>
				POKEDEX!
				<i className='icon' />
			</h1>
			<SearchBar 
				buffer={buffer} 
				pokemons={pokemons}
				setSearch={setSearch}
			/>
			<div className='search-cards-wrapper'>
				<PokemonCards
					pokemons={buffer}
					search={search}
				/>
			</div>
		</div>
	)
}

export default PokedexContainer;