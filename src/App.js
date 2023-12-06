import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';

function App() {

  return (
    <div className="App">
      <section className='App-content'>
        <Link to='/gif/argentina'>Gifs de argentina</Link>
        <Link to='/gif/colombia'>Gifs colombia</Link>
        <Link to='/gif/australia'>Gifs de Australia </Link>
        <Route
        component={ListOfGifs}
        path="/gif/:keyword"
         />
      </section>
    </div>
  );
}

export default App;
