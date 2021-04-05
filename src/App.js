import './App.css';
import {Link, Route} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div >

        <div>
            <Link className="mainView" to="/">Bookshelf</Link>
            <button className="login-button">login</button>
        </div>
        <Route path="/" component={App} />
        <Home />
    </div>
  );
}

export default App;
