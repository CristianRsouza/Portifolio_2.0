import './TerminalHeader.css'
import { X } from 'lucide-react'

const TerminalHeader = ({ HandleClose }) => {
    
    
    return(
        <div className='TerminalHeader'>
            <div className='Header'>
                <div>
                    <h1>cristrods.</h1>
                </div>
                <X className='CloseHeader' onClick={() => {
                    HandleClose(null)
                }}/>
            </div>
        </div>
    )
}

export default TerminalHeader