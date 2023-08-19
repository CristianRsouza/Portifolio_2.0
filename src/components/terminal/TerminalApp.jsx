import { useState } from 'react';
import './TerminalApp.css';
import TerminalHeader from './TerminalHeader/TerminalHeader';
import TerminalHome from './terminalHome/TerminalHome';
import TerminalSkills from './TerminalSkills/TerminalSkills';
import TermianalAboutMe from './TerminalAboutMe/TerminalAboutMe';
import TerminalContact from './TerminalContact/TerminalContact';

const TerminalApp = ({HandleClose}) => {

    const [TerminalPage, setTerminalPage] = useState('home')

    return (
        <div className='Terminal' >
                <TerminalHeader HandleClose={HandleClose} />
                     { TerminalPage == 'home' ? <TerminalHome HandlePage={setTerminalPage}/> : null}
                     { TerminalPage == 'Skills' ? <TerminalSkills HandlePage={setTerminalPage}/> : null}
                     { TerminalPage == 'AboutMe' ? <TermianalAboutMe HandlePage={setTerminalPage}/> : null}
                     { TerminalPage == 'Contact' ? <TerminalContact HandlePage={setTerminalPage}/> : null}
        </div>
    );
}

export default TerminalApp;
