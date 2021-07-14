import './RegNav.css';
import Logo from "../Logo.png"

function Nav() {
    return (
      <div className="navreg">
          <div className="nav_containerreg">
            <div className="logo_containerreg">
              <img src={Logo} alt="" className="logo_imgreg" />
              <h1 className="logo_textreg">Mateify</h1>
            </div>
          </div>
      </div>
    );
  }
  
  export default Nav;
  