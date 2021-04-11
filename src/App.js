import    React,  {useState , useEffect  } from 'react';
import './App.css';
import Header from './components/ui/Header';
import axios from 'axios';
import CharacterGrid from './components/character/CharacterGrid';

import Search from './components/ui/Search';

const App =  () => {
const [items ,setItem ]= useState ([])
const [isLoading , setLoading ] = useState(true)
 // const [name,setName] = useState('')
const [query , setQuery] =  useState ('')

useEffect (() => {
   const fetchItems = async () => {
     const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${ query }`)
        // console.log (result.data)
         setItem(result.data)
         setLoading (false)
   } 
   fetchItems()

} , [ query])

  return (
    <div className="container">
         <Header/>
         <Search  getQuery={(q)=> setQuery(q)} />
         <CharacterGrid isLoading= {isLoading} arif={items} />

          </div>
  );
}

export default App;
