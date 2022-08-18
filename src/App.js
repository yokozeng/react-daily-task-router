import './App.css';
import {
  HashRouter,
  NavLink,
  Route, 
  Routes
} from 'react-router-dom';

const Index = () => {
    return <p> ✿✿<b> 首頁 </b>✿✿ </p>;
  };

const Todo = () => {
    return <p> ✿ 這是 <b>Todo</b> 頁面 ✿ </p>;
};
const Login = () => {
    return <p> ✿ 這是 <b>登入</b> 頁面 ✿</p>;
};
const Register = () => {
    return <p> ✿ 這是 <b>註冊</b> 頁面 ✿</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todo" element={<Todo />} />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
