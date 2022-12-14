import { React } from 'react'
import { Modal } from 'antd'

function PokemonDetails({ pokemon, open, setOpen, types }) {
	// const [weakness, setWeakness] = useState([]);

	const toCapitalLetter = name => {
		return name.charAt(0).toUpperCase() + name.slice(1)
	}

	/*
		### DISABLED FOR NOW

		const getDmgRelations = (pokemonTypes, typesArr) => {
			let dmgRelations = [];
			pokemonTypes?.forEach((type) => {
				typesArr.forEach((typeInfo) => {
					if (type.type.name.toLowerCase() === typeInfo.name.toLowerCase()) {
						dmgRelations.push(typeInfo.damage_relations); //damage relations é o obj com todas as fraquezas e vantagens.
					}
				})
			})
			return dmgRelations;
		}
	
		// para cada entry no array feito em object.entries eu itero a partir do um
		const getWeaknesses = (relations) => {
			let bufferArr = relations.map((damage) => (Object.values(damage)));
			console.log(bufferArr);
			return bufferArr;
		}
	
		useEffect(() => {
			let dmgRelations = getDmgRelations(pokemon.types, types);
			setWeakness(getWeaknesses(dmgRelations));
		}, [pokemon.types, types]);
	*/
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
				alt="pokemon"
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
			/>

			{pokemon.types?.map((pokemonType, idx) => {
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