import Pages from './Pages/Pages'
import './TerminalHome.css'

const TerminalHome = ({ HandlePage }) => {
    return(
        <div className='TerminalHome'>
            <p>hello world, my name is</p>
            <h1>Cristian Rodrigues</h1>
            <p>i am a fullstack dev</p>
                <Pages HandlePage={HandlePage}/>
        </div>
    )
}

export default TerminalHome