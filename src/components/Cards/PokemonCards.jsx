import { React } from 'react'
import { Card, Row, Col, Space } from 'antd';

const { Meta } = Card;

function PokemonCards({ pokemons }) {
	return (
		<Row
			className='cards-pokemon-row'
		>
			{pokemons.map((pokemon, idx) => (
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
							description={"teste"}
						/>
					</Card>
				</Col>
			))
			}
		</Row >
	)
}

export default PokemonCards;