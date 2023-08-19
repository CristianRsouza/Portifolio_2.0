import Voltar from '../Voltar/Voltar'
import './TerminalContact.css'



const TerminalContact = ({ HandlePage }) => {
    return(
        <div className='TerminalContact'>
            <h1>Contact</h1>
                <div className='Contacts'>
                        <a href="https://www.instagram.com/cris.rodsz/">INSTAGRAM</a>
                        <a href="https://twitter.com/CristianRodSz">TWITTER</a>
                        <a href="https://github.com/CristianRsouza">GITHUB</a>
                        <a href="https://github.com/CristianRsouza/Portifolio_2.0">This Portifolio Repository</a>
                </div>

            <Voltar HandlePage={HandlePage}/>
        </div>
    )
}

export default TerminalContact