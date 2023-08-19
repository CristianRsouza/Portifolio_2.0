import { useState } from 'react'
import './Skills.css'

const Skills = () => {
    
    const [skills, setSkills] = useState([
        {
            id: 1,
            lang: 'JS',
            level: 'GOOD',
            percent: 65 
        },
        {
            id: 2,
            lang: 'HTML5',
            level: 'GOOD',
            percent: 87 
        },
        {
            id: 3,
            lang: 'CSS',
            level: 'GOOD',
            percent: 90 
        },
        {
            id: 4,
            lang: 'REACTJS',
            level: 'GOOD',
            percent: 70
        },
        {
            id: 5,
            lang: 'NODEJS',
            level: 'MEDIUM',
            percent: 40
        },
        {
            id: 6,
            lang: 'REACTJS',
            level: 'GOOD',
            percent: 70
        },
        {
            id: 7,
            lang: 'PORTUGUES',
            level: 'EXPERT',
            percent: 100
        },
        {
            id: 8,
            lang: 'ENGLISH',
            level: 'GOOD',
            percent: 75
        },
        {
            id: 9,
            lang: 'ESPANOL',
            level: 'MEDIUM',
            percent: 45
        },
    ])

    return(    
               <div className='skills'>
                {skills.map(skills => 
                <li key={skills.id}>
                  <div>{skills.lang}</div>
                  <div>{skills.level}</div>
                  <div>{skills.percent}%</div>

                </li>)

                }
               </div>
        )
}

export default Skills