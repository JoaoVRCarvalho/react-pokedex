import { React } from 'react'
import { Modal } from 'antd'

function PokemonDetails({ pokemon, open, setOpen }) {

	const toCapitalLetter = name => {
		return name.charAt(0).toUpperCase() + name.slice(1)
	}

	return (
		<Modal
			title={pokemon.name}
			open={open}
			onCancel={() => setOpen(!open)}
			height={500}
			width={600}
			centered
		>
			<img
				alt="pokemon-image"
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
			/>

			{pokemon.types?.map((type, idx) => {
				console.log(type.type); // contem a url

				return (
					<p key={idx} >
						{toCapitalLetter(type.type.name)}
					</p>
				)
			})}

			<div>
				<p>
					{`Height: ${pokemon.height / 10}`}
				</p>

				<p>
					{`Weight: ${pokemon.weight / 10}`}
				</p>
			</div>
		</Modal>
	)

}

export default PokemonDetails