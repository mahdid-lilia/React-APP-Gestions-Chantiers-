import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Ouvrierlili from "./Pages/Ouvriers";
import Ouvriers from "./Pages/Ouvriers";
import Login from "./Pages/Login";
import './styles/App.css';


function App() {

  return (

      <div className='App'>
        
        

        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ouvrierlili/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/ouv" element={<Ouvriers />} />
          
    
        </Routes>
        </BrowserRouter>
      </div >

  );
}

export default App;