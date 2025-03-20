import './search-box.styles.css';



const SearchBox = ({ className, placeholder, onChangeHandler, onKeyDownHandler }) => (
    <input 
      className={`search-box ${className}`} 
      type='search' 
      placeholder={placeholder}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
    />
)


export default SearchBox;