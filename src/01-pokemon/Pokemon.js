import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from "./Pokemonlist";
import Pagination from './Pagination';

function Pokemon() {
	const [pokemon, setPokemon] = useState([]);
	const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=40");
	const [nextPageUrl, setNextPageUrl] = useState();
	const [prevPageUrl, setPrevPageUrl] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios.get(currentPageUrl, {
			signal: AbortSignal.timeout(5000)
		}).then(res => {
			setLoading(false);
			setNextPageUrl(res.data.next);
			setPrevPageUrl(res.data.previous);
			setPokemon(res.data.results.map(p => p.name));
		});
	}, [currentPageUrl]);

	function gotoNextPage() {
		setCurrentPageUrl(nextPageUrl.replace(/limit=\d+/, "limit=40"));
	}

	function gotoPrevPage() {
		setCurrentPageUrl(prevPageUrl.replace(/limit=\d+/, "limit=40"));
	}

	if (loading) return "Loading...";

	return (
		<>
			<PokemonList pokemon={pokemon} />
			<Pagination
				gotoNextPage={nextPageUrl ? gotoNextPage : null}
				gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
			/>
		</>
	);
}

export default Pokemon;
