import './Voltar.css' 

const Voltar = ({ HandlePage }) => {
    return(
        <button onClick={() => {
            HandlePage('home')
        }}>voltar</button>
    )
}

export default Voltar