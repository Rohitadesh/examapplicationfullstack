import './App.css';
//import LoginPage  from './login';
import  Quizcustompage  from './quizcustom';
import LoginPage  from './login';
import ExamPage from './exam';
import Result from './result'
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

function App() {
  return (
        <Router>
          <Routes>
            <Route exact path='/' element={<Quizcustompage />}></Route>
            <Route exact path='/login' element={<LoginPage />}></Route>
            <Route exact path='/exam' element={<ExamPage />}></Route>
            <Route exact path='/result' element={<Result />}></Route>
          </Routes>
        </Router>       
  );
}

export default App;
