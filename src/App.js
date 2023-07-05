import './App.css';
//import LoginPage  from './login';
import  Quizcustompage  from './quicklogin';
import LoginPage  from './login';
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
          </Routes>
        </Router>       
  );
}

export default App;
