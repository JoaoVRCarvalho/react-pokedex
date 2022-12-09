import { React, lazy, Suspense } from 'react'
import { Row, Col, Button } from 'antd';

import LoadingCards from '../_loadingComponents/Cards';

const Card = lazy(() => import('antd/lib/card/index'));
const Meta = lazy(() => import('antd/lib/card/Meta'))

function PokemonCards({ pokemons, search, handleModal, isLoading }) {

	const toCapitalLetter = name => {
		return name.charAt(0).toUpperCase() + name.slice(1)
	}
	// fazer o lazy loading pegando a ROW inteira
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
					<Suspense
						fallback={<LoadingCards loadingState={isLoading} />}
					>
						<Card
							className='pokemon-card'
							hoverable
							cover={
								<img
									alt="pokemon"
									src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
								/>
							}
						>
							<Meta
								className='Card-meta-class'
								title={toCapitalLetter(pokemon.name)}
								description={
									<>
										<div className='types-wrapper'>
											{pokemon.types.map((type, idx) => (
												<span
													key={idx}
													className={`pokemon-type-${type.type.name} pokemon-type`}
												>
													{toCapitalLetter(type.type.name)}
												</span>
											))}
										</div>
										<Button
											className='pokemon-details-button'
											type="primary"
											danger
											onClick={() => handleModal(pokemon)}
										>
											Details!
										</Button>
									</>
								}
							/>
						</Card>
					</Suspense>
				</Col>
			))
			}
		</Row >
	)
}

export default PokemonCards;