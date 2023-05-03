import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Contact } from "./myComponent/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Contact/>}></Route>
        </Routes>
      </Router>
    

      
    </>
  );
}

export default App;
