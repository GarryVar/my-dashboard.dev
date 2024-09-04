import { React } from 'react';


const onChangeValue = (e) => e.currentTarget.value;

const Search = ({onChangeFunc, inputValue}) => {
  return (
    <input
      onChange={onChangeValue}
      value={onChangeFunc(inputValue)}
      type="text"
      name="" 
      id=""
      />
  )
}

export default Search;