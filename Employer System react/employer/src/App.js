
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddEmployeeComponent from "./component/AddEmployeeComponent";
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import ListEmployeeComponent from "./component/ListEmployeeComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path="/employee" element={<ListEmployeeComponent />} />
          <Route path="/add-employee" element={<AddEmployeeComponent />} />
          <Route path="/add-employee/:id" element={<AddEmployeeComponent />} />
        </Routes>
      </div>
     
    </BrowserRouter>



      
      
      
      
      
    
        
    </div>
  ); 
}

export default App;
