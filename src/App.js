import { React, useEffect, useState } from 'react'
import Background from './components/BackgroundImage/BackgroundImage';
import PokedexContainer from './components/Container/ContentWindow';
import PokemonDetails from './components/Modal/Modal';

const pokemonLimit = 151;

function App() {
	const [pokemons, setPokemons] = useState([]);
	const [buffer, setBuffer] = useState([]);
	const [types, setTypes] = useState([]);

	const [displayedPokemon, setDisplayedPokemon] = useState({});
	const [open, setOpen] = useState(false);

	const handleModal = (pokemon) => {
		setDisplayedPokemon(prevState => pokemon);
		setOpen(!open)
	}

	async function fetchData() {
		fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonLimit}`)
			.then((res) => res.json())
			.then((data) => {
				const { results } = data;
				let promiseArr = results?.map(result => {
					return fetch(result.url).then(res => res.json())
				})
				return Promise.all(promiseArr);
			}).then(data => {
				setPokemons(data);
				setBuffer(data);
			})
	}

	async function fetchTypes() {
		fetch(`https://pokeapi.co/api/v2/type/`)
			.then((res) => res.json())
			.then((data) => {
				const { results } = data;
				let promiseArr = results?.map(result => {
					return fetch(result.url).then(res => res.json())
				})
				return Promise.all(promiseArr);
			})
			.then(data => setTypes(data))
	}

	useEffect(() => {
		fetchData();
		// fetchTypes(); ### DISABLED
	}, []);

	return (
		<>
			<Background />
			<PokedexContainer
				buffer={buffer}
				pokemons={pokemons}
				handleModal={handleModal}
			/>
			<PokemonDetails
				open={open}
				setOpen={setOpen}
				pokemon={displayedPokemon}
			// types={types} ### DISABLED
			/>
		</>
	);
}

export default App;
