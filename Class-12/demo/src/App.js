import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  // let username = 'Mohammed';
  const [username, setUsername] = useState('Mohammed');

  const changeUsername = (e) => {
    console.log(e)
    // if(e === 'Ahmed') {
      setUsername(e);
    // }
  }

  return (
    <div className="App">
      <Header />

      {/* <Home />
      <About username='Mohammed' age={23}/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About username={username} age={23} changeUsername={changeUsername} />} />
      </Routes>
    </div>
  );
}

export default App;
