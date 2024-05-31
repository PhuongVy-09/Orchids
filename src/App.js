
import './App.css';
import Navbar from './Components/Navbar';

import { BrowserRouter as Route, Routes } from 'react-router-dom';

import OrchidDetail from './Components/Detail';
import Detail from './Components/Detail';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path="/" element={<OrchidDetail/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
