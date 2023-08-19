import { useState } from 'react';
import './TerminalApp.css';
import TerminalHeader from './TerminalHeader/TerminalHeader';
import TerminalHome from './terminalHome/TerminalHome';
import TerminalSkills from './TerminalSkills/TerminalSkills';

const TerminalApp = ({HandleClose}) => {

    const [TerminalPage, setTerminalPage] = useState('home')

    return (
        <div className='Terminal' >
                <TerminalHeader HandleClose={HandleClose} />
                     { TerminalPage == 'home' ? <TerminalHome HandlePage={setTerminalPage}/> : null}
                     { TerminalPage == 'Skills' ? <TerminalSkills/> : null}
        </div>
    );
}

export default TerminalApp;
