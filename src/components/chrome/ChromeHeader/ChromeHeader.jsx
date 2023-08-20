import './ChromeHeader.css'
import { X } from 'lucide-react'

const ChromeHeader = ({ HandleClose }) => {
    
    
    return(
        <div className='ChromeHeader'>
            <div className='Header'>
                <div>
                    <h1>cristrods.projects</h1>
                </div>
                <X className='CloseHeader' onClick={() => {
                    HandleClose(null)
                }}/>
            </div>
        </div>
    )
}

export default ChromeHeader