import React, {useState} from 'react';
import './search.style.scss';
import {collectionIdMapper} from '../../utils/constants';
import SearchResultDropdown from './searchResultDropdown';

// Features to add to this
// 1. Debouncing while typing
// 2. UseMemo for getting search options
// 2. add handleDropdownKeyEvents function
// 3. Remove type bases search and implement overall smooth search

const SearchComponent = (props) => {
    const {searchTypesData, getSearchSuggestionsService} = props;
    const [searchTypeSelectedValue, setSearchTypeSelectedValue] = useState(collectionIdMapper['hats']);
    const [searchText, setSearchText] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);


    const getSearchSuggestions = async (type, text) => {
        // Add useMemo and debounced here and modify this component
        let returnedSuggestions = await getSearchSuggestionsService(searchTypeSelectedValue, searchText);
        console.log('returnedSuggestions', returnedSuggestions);
        setSearchSuggestions(returnedSuggestions);
    }

    const handleSearchTypeChange = (e) => {
        console.log('Existing type', searchTypeSelectedValue);
        const {target: {value = ''} = {}} = e;
        if(!value) {return;}
        setSearchTypeSelectedValue(collectionIdMapper[value.toLowerCase()]);
    }

    const handleSearchTextChange = (e) => {
        const {target: {value = ''} = {}} = e;
        if(!value){ return;}
        setSearchText(e.target.value); // Athough while typing since value of input changes, component is being re-rendered. See is this right or not, does react handles this.
        getSearchSuggestions(searchTypeSelectedValue, searchText);
    }

    return (
        <>  
            <span>
                <select onChange={handleSearchTypeChange}>
                {searchTypesData?.map((data, index) => {
                    const { title } = data;
                    return <option key={`${title}-${index}`}>{title}</option>;
                })}
                </select>
             </span>

            <input type="text" 
                placeholder="Search item" 
                value={searchText} 
                className="searchbox"
                onChange={handleSearchTextChange}
            />

            {searchText && searchSuggestions && (
                <SearchResultDropdown
                dropdownList={searchSuggestions}
                // onItemSelect={handleSuggestionSelect}
                // activeItemIndex={activeSuggestionIndex}
                // suggestionRenderer={suggestionRenderer}
                />
            )}
        </>
    )
}

export default SearchComponent;