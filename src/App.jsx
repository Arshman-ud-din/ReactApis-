import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from './Pages/Home';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Navbar from "./Component/Navbar";


function App(){
    return(
        <>
        
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Registration" element={<Registration/>}/>
            <Route path="/Login" element={<Login/>}/>

        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App ;