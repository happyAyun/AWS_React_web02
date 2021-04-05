import './App.css';
import {Link, Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div >

        <div>
            <Link className="mainView" to="/">Bookshelf</Link>
        </div>
        <div className="navbar">
            <Route path="/" component={Home} />
            <Header />
        </div>
    </div>
  );
}

export default App;
