import './App.css';
import Register from './Register';
import Error from './404';
import PlaylistBlank from './PlaylistBlank';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path='/PlaylistBlank' component={PlaylistBlank}></Route>
          <Route exact path='/404' component={Error}></Route>
          <Route exact path='/Register' component={Register}></Route>
        </div>
      </Switch>
    </Router>

  );
}

export default App;
