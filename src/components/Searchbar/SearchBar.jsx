import { React } from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;

function SearchBar(props) {
	// Fazer objeto contentdo as props values e isSearching.
	const handleSearch = (e) => props.setSearch(e.target.value);

	return (
		<Space className='searchbar-wrapper'>
			<Search
				className='Searchbar'
				placeholder="Search pokemon..."
				onChange={e => handleSearch(e)}
				size="large"
				enterButton
			/>
		</Space>
	)
}

export default SearchBar;