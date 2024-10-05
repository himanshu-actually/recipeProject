import logo from './logo.svg';
import './App.css';
import './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/Navbar'
import ViewRecipe from './pages/ViewRecipe';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/ViewRecipe' element={<ViewRecipe/>}/>    
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
