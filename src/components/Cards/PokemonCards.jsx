import { React } from 'react'
import { Card, Row, Col, Collapse, Button } from 'antd';

const { Panel } = Collapse;
const { Meta } = Card;

function PokemonCards({ pokemons, search, handleModal }) {

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
				} else if (pokemon.name.toLowerCase().includes(search.toLowerCase())) {
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
							className='Card-meta-class'
							title={toCapitalLetter(pokemon.name)}
							description={
								<>
									<Collapse
										key={idx}
										bordered={false}
										ghost={false}
									>
										<Panel header={"Types"}>
											{pokemon.types.map((type, idx) => (
												<p key={idx}>
													{toCapitalLetter(type.type.name)}
												</p>
											))}
										</Panel>
									</Collapse>
									<Button
										className='pokemon-details-button'
										type="primary"
										danger
										onClick={() => handleModal(pokemon)}
									>
										More!
									</Button>
								</>
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