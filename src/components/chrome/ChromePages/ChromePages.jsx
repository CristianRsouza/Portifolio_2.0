import { useState } from 'react'
import './ChromePage.css'

const ChromePages = () => {
  
    const [Pages, setPages] = useState([
        {
            id: 1,
            name: 'Todo-List fullstack',
            link: 'https://github.com/CristianRsouza/TodoList-FullStack'
        },
        {
            id: 2,
            name: 'WheaterApp',
            link: 'https://github.com/CristianRsouza/WheaterApi'
        },
        {
            id: 3,
            name: 'RitchText Editor',
            link: 'https://github.com/CristianRsouza/RichText-Editor'
        },
    ])

  
    return(
        <div className='ChromePages'>
            {Pages.map(page => 
            
            <li className='ChromePage' key={page.id} onClick={() => {
                window.location.href = page.link
            }}>
                {page.name}
            </li>
            
            )
            }
        </div>
    )
} 

export default ChromePages