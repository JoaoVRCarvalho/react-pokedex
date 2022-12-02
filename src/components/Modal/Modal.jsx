import { React, useState, useEffect } from 'react'
import { Modal } from 'antd'

function PokemonDetails({ pokemon, open, setOpen, types }) {
	// Damage effectiviness
	const [doubleDmgFrom, setDoubleDmgFrom] = useState([]);
	const [doubleDmgTo, setDoubleDmgTo] = useState([]);
	const [halfDmgFrom, setHalfDmgFrom] = useState([]);
	const [halfDmgTo, setHalfDmgTo] = useState([]);
	const [noDmgFrom, setNoDmgFrom] = useState([]);
	const [noDmgTo, setNoDmgTo] = useState([]);

	const toCapitalLetter = name => {
		return name.charAt(0).toUpperCase() + name.slice(1)
	}

	const getDmgRelations = (pokemonTypes, typesArr) => {
		let dmgRelations = [];
		pokemonTypes?.map((type) => {
			typesArr.map((typeInfo) => {
				if (type.type.name.toLowerCase() === typeInfo.name.toLowerCase()) {
					dmgRelations.push(typeInfo.damage_relations); //damage relations é o obj com todas as fraquezas e vantagens.
				}
			})
		})
		return dmgRelations;
	}

	// para cada entry no array feito em object.entries eu itero a partir do um
	const getWeaknesses = (relations) => {
		relations.map((damage, idx) => {
			Object.entries(damage).map(prop => {
				let bufferArr = [];
				switch (prop[0]){
					case "double_damage_from":
						prop[1].forEach(weaknessObj => {
							bufferArr.push(weaknessObj);
						});
						setDoubleDmgFrom(bufferArr);
						break;
					case "double_damage_to":
						prop[1].forEach(weaknessObj => {
							bufferArr.push(weaknessObj);
						});
						setDoubleDmgTo(bufferArr);
						break;
					case "half_damage_from":
						prop[1].forEach(weaknessObj => {
							bufferArr.push(weaknessObj);
						});
						setHalfDmgFrom(bufferArr);
						break;
					case "half_damage_to":
						prop[1].forEach(weaknessObj => {
							bufferArr.push(weaknessObj);
						});
						setHalfDmgTo(bufferArr);
						break;
					case "no_damage_from":
						prop[1].forEach(weaknessObj => {
							bufferArr.push(weaknessObj);
						});
						setNoDmgFrom(bufferArr);
						break;
					case "no_damage_to":
						prop[1].forEach(weaknessObj => {
							bufferArr.push(weaknessObj);
						});
						setNoDmgTo(bufferArr);
						break;
					default:
						console.log("Algo deu errado.");
				}
			})
		})
	}

	useEffect(() => {
		let dmgRelations
		dmgRelations = getDmgRelations(pokemon.types, types);
		getWeaknesses(dmgRelations);
		console.log(doubleDmgFrom);
	}, []);

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
				// getWeaknesses(dmgRelations);

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