import { React } from 'react'
import { Modal } from 'antd'

function PokemonDetails({ displayedPokemon, open, setOpen }) {

	return (
		<Modal
			title={displayedPokemon.name}
			open={open}
			onCancel={() => setOpen(!open)}
			height={500}
			width={600}
			centered
		>
			<p>teste...</p>
			<p>teste...</p>
			<p>teste...</p>
		</Modal>
	)

}

export default PokemonDetails