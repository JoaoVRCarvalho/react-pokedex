import { useState, useEffect, useCallback } from "react";

function useFetchPokemon(limit) {
	const [data, setData] = useState([]);
	const [buffer, setBuffer] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchData = useCallback(
		async (limit) => {
			fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
				.then((res) => res.json())
				.then((data) => {
					const { results } = data;
					let promiseArr = results?.map(result => {
						return fetch(result.url).then(res => res.json())
					})
					return Promise.all(promiseArr);
				})
				.then(data => {
					setData(data);
					setBuffer(data);
					setLoading(true);
				})
		}, [setLoading, loading, setData, setBuffer]
	)


	useEffect(() => {
		fetchData(limit);
	}, [limit])

	return { data, buffer, loading }

}

export default useFetchPokemon;