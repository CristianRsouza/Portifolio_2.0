import { useState } from 'react'
import './Chrome.css'
import ChromeHeader from './ChromeHeader/ChromeHeader'
import ChromePages from './ChromePages/ChromePages'
import SearchInput from './SearchInput/SearchInput'


const Chrome = () => {

    const [message, setMessage] = useState('')

    return(
        <div className='Chrome'>
            <ChromeHeader/>
            <ChromePages/>
            <hr />
                <div className='ChromeHome'>
                    <h1>cristrods</h1>
                    <SearchInput setMessage={setMessage}/>
                    <h1>{message}</h1>
                </div>
        </div>
    )
}

export default Chrome