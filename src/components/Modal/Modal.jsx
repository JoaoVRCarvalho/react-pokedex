import { React } from 'react'
import { Modal } from 'antd'

function PokemonDetails({ pokemon, open, setOpen, types }) {

	const toCapitalLetter = name => {
		return name.charAt(0).toUpperCase() + name.slice(1)
	}

	const getDmgRelations = (pokemonTypes, typesArr) => {
		let dmgRelations = [];
		pokemonTypes.map((type) => {
			typesArr.map((typeInfo) => {
				if (type.type.name.toLowerCase() === typeInfo.name.toLowerCase()) {
					dmgRelations.push(typeInfo.damage_relations); //damage relations é o obj com todas as fraquezas e vantagens.
				}
			})
		})
		return dmgRelations;
	}

	/*
	Object.entries(items).map(item => {
		console.log(item)
	})
	*/

	// para cada entry no array feito em object.entries eu itero a partir do um
	const getWeaknesses = (relations) => {
		let relationsArr = [];
		relations.map((damage, idx) => {
			Object.entries(damage).map(prop => {
				// console.log(prop);
			})

			// let {
			// 	double_damage_from,
			// 	double_damage_to,
			// 	half_damage_from,
			// 	half_damage_to,
			// 	no_damage_from,
			// 	no_damage_to
			// } = damage;

		})
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

			{pokemon.types?.map((pokemonType, idx) => {
				let dmgRelations = getDmgRelations(pokemon.types, types);
				getWeaknesses(dmgRelations);

				return (
					<p key={idx} >
						{toCapitalLetter(pokemonType.type.name)}
					</p>
				)
			})}

			<div>
				<p>
					{`Base experience: ${pokemon.base_experience}`}
				</p>

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