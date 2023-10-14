
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Question1 from "./Test-Questions/Question1"
import Question2 from './Test-Questions/Question2';
import Question3 from './Test-Questions/Question3';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Question1/>}></Route>
        <Route path='/ques2' element={<Question2/>}></Route>
        <Route path='/ques3' element={<Question3/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
