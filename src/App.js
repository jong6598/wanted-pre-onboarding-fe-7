import './App.css';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';
import theme from './styles/theme.jsx';
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Singup";
import Todos from './pages/Todo/Todos';

function App() {
  const accessToken = localStorage.getItem("accessToken");



  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={accessToken? <Navigate to="/todo"/> : <Login />} />
          <Route path="/signup" element={accessToken? <Navigate to="/todo"/> : <Signup />} />
          <Route path="/todo" element={<Todos/>} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
