import { React } from 'react'
import { Card, Row, Col, Collapse  } from 'antd';

const { Panel } = Collapse;
const { Meta } = Card;

function PokemonCards({ pokemons }) {

	const toCapitalLetter = name => {
		return name.charAt(0).toUpperCase() + name.slice(1)
	}
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
							className='Card-meta-class'
							title={toCapitalLetter(pokemon.name)}
							description={
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
							</Collapse>}
						/>
					</Card>
				</Col>
			))
			}
		</Row >
	)
}

export default PokemonCards;