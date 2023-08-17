import { useState } from 'react';
import './TerminalApp.css';
import TerminalHeader from './TerminalHeader/TerminalHeader';
import TerminalHome from './terminalHome/TerminalHome';

const TerminalApp = () => {

    const [TerminalPage, setTerminalPage] = useState('home')

    return (
        <div className='Terminal' >
                <TerminalHeader />
                  <hr />
                    { TerminalPage == 'home' ? <TerminalHome/> : null}
        </div>
    );
}

export default TerminalApp;
