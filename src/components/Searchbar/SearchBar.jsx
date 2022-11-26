import { React, useState } from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;

function SearchBar({ bufferArr, pokemonArr }) {
	const [serach, setSearch] = useState();

	const handleSearch = (e) => setSearch(e);

	return (
		<Space className='searchbar-wrapper'>
			<Search
				className='Searchbar'
				placeholder="input search text"
				onSearch={e => handleSearch(e)}
				size="large"
				enterButton
			/>
		</Space>
	)
}

export default SearchBar;