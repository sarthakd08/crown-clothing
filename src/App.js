import React from 'react';
import './App.css';
import Homepage from './pages/homepage/hompage.component';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Routes from './routings/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
