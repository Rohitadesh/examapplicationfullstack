import './App.css';
//import LoginPage  from './login';
import  Quizcustompage  from './quizcustom';
import LoginPage  from './login';
import ExamPage from './exam';
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
          </Routes>
        </Router>       
  );
}

export default App;
