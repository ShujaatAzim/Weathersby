import { useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from '../api';

const Search = props => {

  const { searchChange } = props;
  const [search, setSearch] = useState("");

  const loadOptions = inputValue => {
    return (
      fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
    )
  }

  const handleChange = searchData => {
    setSearch(searchData);
    searchChange(searchData);
  }

  return (
    <div>
      <AsyncPaginate
        placeholder="Search for City"
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
    </div>
  );
}

export default Search;