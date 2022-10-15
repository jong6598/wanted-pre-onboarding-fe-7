import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Singup";
import Todos from './pages/Todo/Todos';

function App() {
  const accessToken = localStorage.getItem("accessToken");

  console.log(accessToken)


  return (
    <div className="App">
        <Routes>
          <Route path="/" element={accessToken? <Navigate to="/todo"/> : <Login />} />
          <Route path="/signup" element={accessToken? <Navigate to="/todo"/> : <Signup />} />
          <Route path="/todo" element={<Todos/>} />
        </Routes>
    </div>
  );
}

export default App;
