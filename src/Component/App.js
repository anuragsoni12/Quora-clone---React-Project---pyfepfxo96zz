// import './App.css';
import "../App.css";
import { Header } from "./Header";
// import { Home } from './Home';
import { Homepage } from "../Pages/Homepage";
import { Questionpage } from "../Pages/Questionpage";

import {BrowserRouter , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/questionpage" element={<Questionpage />} />
      
      
      
      
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
