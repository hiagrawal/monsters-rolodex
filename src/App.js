import logo from './logo.svg';
import './App.css';
import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:""
    }
    this.handleSearch = this.handleSearch.bind(this);
  }; 

  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  handleSearch(e){
    this.setState({searchField:e.target.value})
  }
   
  render(){
    const {monsters, searchField} = this.state;
    const FilteredList = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())  
    );
    return (
      <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox searchField={this.state.searchField} handleSearch={this.handleSearch}/>
          {/* <CardList monsters ={this.state.monsters} /> */}
          <CardList monsters ={FilteredList} />
      </div>
    );
  }
}

export default App;
