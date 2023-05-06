import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Ml from "./components/Ml";
import Python from "./components/Python";
import "./config";
import Search from './components/Search';
import Upload from './components/Upload';
import Quiz from './components/Quiz';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navigation />
         <Routes>
             <Route index element={<Home />} /> 
             <Route path="/login" element={<Login />} />
             <Route path="/Signup" element={<Signup />} /> 
             <Route path="/Ml" element={<Ml />} />
             <Route path="/Python" element={<Python />} />
             <Route path="/Search" element={<Search />} />
             <Route path='/Upload' element={<Upload />} />
             <Route path='/Quiz' element={<Quiz />} />
            
             <Route path="*" element={<Home />} />
         </Routes>
      </BrowserRouter>   
   </div>
  );
}

export default App;
