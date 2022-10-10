import './App.css';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import theme from './styles/theme.jsx';
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Singup";
import Todo from './pages/Todo/Todo';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
