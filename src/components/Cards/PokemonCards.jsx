import { React, useState, useEffect } from 'react'
import { Card, Row, Col, Space } from 'antd';

const { Meta } = Card;

function PokemonCards() {
	const [data, setData] = useState([]);

	const updateArray = (array, element) => [...array, element];

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=9")
			.then((res) => res.json())
			.then((apiData) => {
				const { results } = apiData;
				setData(results);
				// console.log(results);
			})
	}, []);

	function FetchImage(object) {
		fetch(object.url)
			.then((res) => res.json())
			.then((pokemonData) => {
				console.log(JSON.stringify(pokemonData.sprites.other["official-artwork"].front_default))
				return JSON.stringify(pokemonData.sprites.other["official-artwork"].front_default);
			})
	}

	return (
		<Row className='cards-pokemon'>
			{data.map((pokemon, idx) => (
				<Col
					key={idx}
					span={8}
				>
					<Card
						hoverable
						cover={<img alt="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idx + 1}.png`} />}
						style={{ width: 280 }}
					>
						<Meta title={pokemon.name} />
					</Card>
				</Col>
			))
			}
		</Row >
	)
}

export default PokemonCards;