import {Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'
import './App.scss';
//Page Imports//
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" render={(rp) => <Home />}/>
      </Switch>
    </div>
  );
}

export default App;
