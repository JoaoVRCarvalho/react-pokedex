import { React, useEffect, useState } from 'react'
import Background from './components/BackgroundImage/BackgroundImage';
import PokedexContainer from './components/Container/ContentWindow';

function App() {
	const [pokemons, setPokemons] = useState([]);
	const [buffer, setBuffer] = useState([]);

	const [open, setOpen] = useState(false);

	const handleClick = (e) => {
		console.log(e);
		setOpen(!open);
	}

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
		<>
			<Background />
			<PokedexContainer
				buffer={buffer}
				pokemons={pokemons}
				handleClick={handleClick}
			/>
		</>
	);
}

export default App;
