import {useEffect, useState, createContext} from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload';
import ViewVideo from './pages/ViewVideo';
import Auth from './pages/Auth'; //This page gives you the choice to login or signup
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyProfile from './pages/MyProfile';
import './App.scss';


export const GlobalCtx = createContext(null)

function App() {

  const [gState, setGState] = useState({
    url: /*"http://localhost:4000"*/ "https://videonet-1.herokuapp.com", 
    token: null
  })

    //SEEING IF ALREADY LOGGED IN
    useEffect(() => {
      const token = JSON.parse(localStorage.getItem("token"))
      if (token) {
        setGState({...gState, token: token.token})
      }
    }, [])

    const [pathState, setPathState] = useState("/") //When the user logs in, this is where there next path will be

  return (
    <GlobalCtx.Provider value = {{gState, setGState}}>
      <div className="App">
        <Switch>
          <Route exact path="/" render={(rp) => <Home />}/>
          <Route path="/upload" render={(rp => gState.token ? <Upload /> : <Auth setPathState={setPathState} path={"/upload"} />)}/>
          <Route path="/myprofile" render={(rp => gState.token ? <MyProfile /> : <Auth setPathState={setPathState} path={"/"}/>)}/>
          <Route path="/view/:id" render={(rp) => <ViewVideo {...rp}/>}/>
          <Route path="/auth" render={(rp) => <Auth />}/> 
          <Route path="/login" render={(rp) => <Login {...rp} path={pathState} />}/>
          <Route path="/signup" render={(rp) => <Signup {...rp} path={pathState} />}/>
        </Switch>
      </div>
    </GlobalCtx.Provider>
  );
}

export default App;
