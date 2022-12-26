import '../styles/App.css';
import Navbar from './Navbar';
import Cards from './Cards';
import Sidebar from './Sidebar';
import React from "react";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <main>
          <div className='container'>
            <Cards/>
            <Sidebar/>
          </div>
        </main>
    </div>
  );
}

export default App;
