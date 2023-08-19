import './TerminalAboutMe.css'
import Voltar from '../Voltar/Voltar'

const TermianalAboutMe = ({ HandlePage }) => {
    return(
        <div className='TermianlAboutMe'>
            <h1>About Me</h1>
            <div className='AboutMe'>
                       <p> I'm Cristian Rodrigues Souza and I'm 15 years old.</p>
                       <p>My first experience with programming was almost 2 years ago</p>
                       <p>and with design, it was around 3 years ago</p>
            </div>
            <Voltar HandlePage={HandlePage}/>
        </div>
    )
}

export default TermianalAboutMe