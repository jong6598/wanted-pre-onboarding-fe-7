import './App.css';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import theme from './styles/theme.jsx';
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Singup";
import Todos from './pages/Todo/Todos';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todo" element={<Todos />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
