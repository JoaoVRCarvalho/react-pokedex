import { React } from 'react'
import { Card, Row, Col, Collapse  } from 'antd';

const { Panel } = Collapse;
const { Meta } = Card;

function PokemonCards({ pokemons, search }) {

	const toCapitalLetter = name => {
		return name.charAt(0).toUpperCase() + name.slice(1)
	}
	return (
		<Row
			className='cards-pokemon-row'
		>
			{pokemons.filter((pokemon) => {
				let val;
				if (search === "") {
					val = pokemon;
				} else if(pokemon.name.toLowerCase().includes(search.toLowerCase())) {
					val = pokemon;
				}
				return val;
			}).map((pokemon, idx) => (
				<Col
					className='card-col'
					key={idx}
					span={8}
				>
					<Card
						className='pokemon-card'
						hoverable
						cover={<img alt="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} />}
					>
						<Meta
							title={toCapitalLetter(pokemon.name)}
							description={
							<Collapse
								key={idx}
								bordered={false}
								ghost={false}
							>
								<Panel header={"Types"}>
									{pokemon.types.map((type, idx) => (
										<p
											className='pokemon-type'
											key={idx}
										>
											{toCapitalLetter(type.type.name)}
										</p>
									))}
								</Panel>
							</Collapse>
							}
						/>
					</Card>
				</Col>
			))
			}
		</Row >
	)
}

export default PokemonCards;