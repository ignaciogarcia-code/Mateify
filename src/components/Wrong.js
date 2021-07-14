import './Wrong.css';
import Padlock_big from './Padlock_big.png'



function Wrong() {
  return (
    <div className="wrong">
      <div className="wrong_container">
        <img src={Padlock_big} alt="" />
        <div className="text_container">
          <h1 className="wrong_title">Mmm... algo no salió bien</h1>
          <h1 className="wrong_title2">Algo no salió bien</h1>
          <h6 className="wrong_sub">Debes estar autenticado para acceder a esta página</h6>
        </div>
      </div>
    </div>
  )
}

export default Wrong;