import logo from './logo.png';
import './App.css';
import LoginForm from './components/LoginForm';
import ProfileView from './components/ProfileView';
import TokenStore from './helper/TokenStore';
import {useSelector} from 'react-redux';
import {signIn} from './action';


function App(props) {
  
  var {store} = props;

  TokenStore.requestToken();
  
  if (localStorage.getItem("isLoggedIn") === 'true'){
    store.dispatch(signIn())
  }
  
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  if (isLoggedIn) {
    return (
      <div className="App">
        <div>
          <div className="LoginForm">
            <img className="LogoImg" src={logo}></img>
              <ProfileView store={store}/>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <div>
          <div className="LoginForm">
            <img className="LogoImg" src={logo}></img>
            <div className="LoginField"><LoginForm store={store} /></div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
