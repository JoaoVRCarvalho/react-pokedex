import React, { useEffect } from 'react'
import { Card, Button } from 'antd';

const { Meta } = Card;

function Cards({ pokemon, handleModal, idx, pokemonArr, setLastEle }) {

	const toCapitalLetter = name => {
		return name.charAt(0).toUpperCase() + name.slice(1)
	}

	useEffect(() => {
		if (idx + 1 === pokemonArr.length) setLastEle(true);
	})


	return (
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
							{pokemon.types.map((type, index) => (
								<span
									key={index}
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
	)
}

export default Cards;