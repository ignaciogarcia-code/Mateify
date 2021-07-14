import './404.css';
import Nav from './components/RegNav';
import Wrong from './components/Wrong';

function Error() {
    return (
      <div className="error">
          <Nav/>
          <Wrong />

      </div>
    );
  }
  
  export default Error;