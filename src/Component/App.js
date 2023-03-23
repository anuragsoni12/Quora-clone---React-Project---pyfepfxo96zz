// import './App.css';
import "../App.css";
import { Header } from "./Header";
// import { Home } from './Home';
import { Homepage } from "../Pages/Homepage";
import { Questionpage } from "../Pages/Questionpage";
import { Answerpage } from "../Pages/Answerpage";
import {BrowserRouter , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/questionpage" element={<Questionpage />} />
      <Route path="/answerpage" element={<Answerpage />} />
      
      
      
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
