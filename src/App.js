import "bootstrap/dist/css/bootstrap.min.css";
import FullScreenComponent from './components/fullscreen';

import LoginPage from './components/Login';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Quiz from "./components/questions";
import RandomUniqueNumbers from "./components/randomnumber";


function App() {
  return (
    <div className="App">
    
     <Router>
     
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/quiz" element={<FullScreenComponent />}/>
        <Route path="/quiz1" element={<Quiz />}/>
        <Route path="/random" element={<RandomUniqueNumbers />}/>
      </Routes>
     </Router>

      {/* <FullScreenComponent /> */}
      
      
    </div>
  );
}

export default App;
