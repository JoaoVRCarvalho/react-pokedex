import { React, useState, Suspense, lazy } from 'react'
import { Row, Col } from 'antd';
import LoadingCards from '../_loadingComponents/LoadingCards';

const Cards = lazy(() => import("./Cards"))

function PokemonCardsContainer(props) {

	const [lastEle, setLastEle] = useState(false);

	return (
		<Row
			className='cards-pokemon-row'
		>
			{props.pokemons.filter((pokemon) => {
				let val;
				if (props.search === "") {
					val = pokemon;
				} else if (pokemon.name.toLowerCase().includes(props.search.toLowerCase())) {
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
						fallback={<LoadingCards isRef={false} />}
					>
						<Cards
							idx={idx}
							pokemon={pokemon}
							pokemonArr={props.pokemons}
							handleModal={props.handleModal}
							setLastEle={setLastEle}
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
				{lastEle && <LoadingCards isRef={true} />}
			</Col>
		</Row>
	)
}

export default PokemonCardsContainer;