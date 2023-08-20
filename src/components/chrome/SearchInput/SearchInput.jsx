import { useState } from 'react'
import './SearchInput.css'
import { Search } from 'lucide-react'

const SearchInput = ({ setMessage }) => {

    const [SearchValue, setSearchValue] = useState('')


    return(
        <div className='SearchInput'>
            <Search className='Search' onClick={()=> {
               if (SearchValue !== 'RitchText Editor' && SearchValue !== 'WheaterApp' && SearchValue !== 'Todo-List fullstack') {
                setMessage('ERROR 404, PAGE NOT FOUND');
            }

            if (SearchValue == 'RitchText Editor') {
                window.location.href = 'https://github.com/CristianRsouza/RichText-Editor';
            }
            
            if (SearchValue == 'WheaterApp') {
                window.location.href = 'https://github.com/CristianRsouza/WheaterApi';
            }
            
            if (SearchValue == 'Todo-List fullstack') {
                window.location.href = 'https://github.com/CristianRsouza/TodoList-FullStack';
            }
            

            
            }}/>
            <input type="text" list='list' value={SearchValue} onChange={(e) => {
                setSearchValue(e.target.value)
            }}/>
        </div>
    )
}


export default SearchInput