import { React, useState, Suspense, lazy } from 'react'
import { Row, Col } from 'antd';
import LoadingCards from '../_loadingComponents/LoadingCards';

const Cards = lazy(() => import("./Cards"))

function PokemonCardsContainer(props) {

	return (
		<Row
			className='cards-pokemon-row'
		>
			{props.pokemons.filter((pokemon) => {
				let search;
				if (props.search === "") {
					search = pokemon;
				} else if (pokemon.name.includes(props.search.toLowerCase())) {
					search = pokemon;
				}
				return search;
			}).map((pokemon, idx) => (
				<Col
					className='card-col'
					key={idx}
					span={8}
				>
					<Suspense
						fallback={<LoadingCards isRef={false} />}
					>
						<Cards
							idx={idx}
							pokemon={pokemon}
							pokemonArr={props.pokemons}
							handleModal={props.handleModal}
						/>
					</Suspense>
				</Col>
			))
			}
			<Col
				ref={props.loadRef}
				className='card-col'
				span={8}
			>
				{props.isLoading && <LoadingCards isRef={true} />}
			</Col>
		</Row>
	)
}

export default PokemonCardsContainer;