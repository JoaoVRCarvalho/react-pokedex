import React from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;

const onSearch = (value) => console.log(value)

const SearchBar = ({ pokemonArr }) => (
	<Space className='searchbar-wrapper'>
		<Search
			className='Searchbar'
			placeholder="input search text"
			onSearch={onSearch}
			size="large"
			enterButton
		/>
	</Space>
)

export default SearchBar;