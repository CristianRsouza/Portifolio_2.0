import './TerminalSkills.css'
import Skills from './Skills/Skills'
import Voltar from '../Voltar/Voltar'

const TerminalSkills = ({ HandlePage }) => {
    return(
        <div className='TerminalSkills'>
            <h1>Skills</h1>
            <Skills/>
            <Voltar HandlePage={HandlePage}/>
        </div>
    )
}

export default TerminalSkills