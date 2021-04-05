import './App.css';
import {Link, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div >
        <div>
            <Link className="mainView" to="/">Bookshelf</Link>
            <Link to="/login"><button className="login-button">login</button></Link>
        </div>
        <Route path="/" component={Home} exact />
        <Route path="/Login" component={Login} />
    </div>
  );
}

export default App;
