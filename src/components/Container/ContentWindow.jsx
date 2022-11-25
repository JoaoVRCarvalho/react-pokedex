import { React, useEffect, useState } from 'react'
import PokemonCards from '../Cards/PokemonCards';
import SearchBar from '../Searchbar/SearchBar';
import "./ContentWindow.css"

function PokedexContainer() {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			fetch("https://pokeapi.co/api/v2/pokemon?limit=6")
				.then((res) => res.json())
				.then((data) => {
					const { results } = data;
					let promiseArr = results.map(result => {
						return fetch(result.url).then(res => res.json())
					})
					return Promise.all(promiseArr);
				}).then(data => setPokemons(data))
		}
		fetchData();
	}, []);


	return (
		<div className='container'>
			<h1 className='title'>
				POKEDEX!
				<i className='icon' />
			</h1>
			<SearchBar />
			<div className='search-cards-wrapper'>
				<PokemonCards pokemons={pokemons} />
			</div>
		</div>
	)
}

export default PokedexContainer;