import { React, useState, useEffect } from 'react'
import { Card, Row, Col, Space } from 'antd';

const { Meta } = Card;

function PokemonCards() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=1")
			.then((res) => res.json())
			.then((apiData) => {
				const { results } = apiData;
				setData(results);
				// console.log(results);
			})
	}, []);

	function GetPokemonType(url) {
		fetch(url)
			.then((res) => res.json())
			.then((pokemonData) => {
				console.log(pokemonData.types) // retorna uma lista
			})
	}

	return (
		<Row
			className='cards-pokemon-row'
		>
			{data.map((pokemon, idx) => (
				<Col
					className='card-col'
					key={idx}
					span={8}
				>
					<Card
						className='pokemon-card'
						hoverable
						cover={<img alt="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idx + 1}.png`} />}
					>
						<Meta
							title={pokemon.name}
							description={GetPokemonType(`https://pokeapi.co/api/v2/pokemon/${idx + 1}`)}
						/>
					</Card>
				</Col>
			))
			}
		</Row >
	)
}

export default PokemonCards;