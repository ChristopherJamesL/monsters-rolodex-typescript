import { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [title, setTitle] = useState('monsters rolodex');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters); 

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  }

  const onTitleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
      setTitle(target.value.toLocaleLowerCase());
      target.value = '';
    }
  }

  return (
    <div className="App">
      <h1 className='app-title'>{title}</h1>
      <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder='search monsters' 
        className='monsters-search-box' 
      />
      <br />
      <SearchBox 
        onKeyDownHandler={onTitleKeyDown}
        onChangeHandler={onTitleChange}
        placeholder='set title' 
        className='title-search-box' 
      />
      <CardList monsters={filteredMonsters} />
    </div> 
  ) 
}

export default App;
