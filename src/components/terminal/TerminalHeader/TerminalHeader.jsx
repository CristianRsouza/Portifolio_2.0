import './TerminalHeader.css'
import { X } from 'lucide-react'

const TerminalHeader = () => {
    return(
        <div className='TerminalHeader'>
            <div className='Header'>
                <div>
                    <h1>cristrods.</h1>
                </div>
                <X className='CloseHeader'/>
            </div>
        </div>
    )
}

export default TerminalHeader