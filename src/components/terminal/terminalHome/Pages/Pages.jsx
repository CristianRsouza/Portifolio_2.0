import './Pages.css'

const Pages = ({ HandlePage }) => {
   

    return(
        <div className='Pages'>
            <div className='Page' onClick={() => {
                HandlePage('Skills')
            }}>
                Skills
            </div>
            <div className='Page'>
                AboutMe
            </div>
            <div className='Page'>
                Contact
            </div>
        </div>
    )
}

export default Pages