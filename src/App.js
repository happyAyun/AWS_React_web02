import './App.css';
import {Link, Route} from 'react-router-dom';
import Home from './components/Home';
import HeaderLogin from './components/HeaderLogin';
import Header from './components/Header';
import {useState} from 'react';

function App() {
  const [key, setKey] = useState(false);

  const switchKey = (value) => {
    setKey(value);
  };
  return (
    <div className="App">

        <div>
            <Link className="mainView" to="/">Bookshelf</Link>
        </div>
        {key === true ? <HeaderLogin switchKey={switchKey} /> : <Header switchKey={switchKey} />}
        <div>
            <Route path="/" component={Home} />
        </div>
    </div>
  );
}

export default App;
