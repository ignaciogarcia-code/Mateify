import './Nav.css';
import Logo from "../Logo.png"

function Nav() {
  var datos = localStorage.getItem("mail")
  return (
    <div className="nav">
      <div className="nav_container">
        <div className="logo_container">
          <img src={Logo} alt="" className="logo_img" />
          <h1 className="logo_text">Mateify</h1>
          <h2 className="name_text">{datos}</h2>
        </div>
      </div>
    </div>
  );
}

export default Nav;
