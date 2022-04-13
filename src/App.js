import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from '../src/Shared/Header/Header'
import Footer from './Shared/Footer/Footer';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <div> */}
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/Services' element={<Services></Services>} />
        <Route path='/about' element={<About></About>} />

      </Routes>
      {/* </div> */}

      <Footer></Footer>

    </div>
  );
}

export default App;
