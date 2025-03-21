import { ChangeEvent, KeyboardEvent } from 'react';

import './search-box.styles.css';

type SearchBoxProps = {
  className: string;
  placeholder: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDownHandler?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler, onKeyDownHandler }: SearchBoxProps) => (
    <input 
      className={`search-box ${className}`} 
      type='search' 
      placeholder={placeholder}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
    />
)


export default SearchBox;