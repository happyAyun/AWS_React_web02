import './App.css';
import {Link, Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

        <div>
            <Link className="mainView" to="/">Bookshelf</Link>
        </div>
        <Header />
        <div>
            <Route path="/" component={Home} />
        </div>
    </div>
  );
}

export default App;
