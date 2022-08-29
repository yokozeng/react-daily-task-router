import './App.css';
import {
  HashRouter,
  NavLink,
  Route, 
  Routes,
  useNavigate,
  useParams,
  Outlet
} from 'react-router-dom';

const Index = () => {
    return <p> ✿✿<b> 首頁 </b>✿✿ </p>;
  };

const Todo = () => {
    return (
        <>
        <p> ✿ 這是 <b>Todo</b> 頁面 ✿ </p>
        <LogOut/>
        </>
    )
};
const Login = () => {
    return <p> ✿ 這是 <b>登入</b> 頁面 ✿</p>;
};
const Register = () => {
    return <p> ✿ 這是 <b>註冊</b> 頁面 ✿</p>;
};
const LogOut = () => {
    const navigate = useNavigate();
    return (
        <button onClick={ () => {navigate('/login')} }>登出</button>
    )
  };

const Post = () => {
    const navigate = useNavigate();
    return <>
    <p> ✿ 這是 <b>Post </b> 頁面 ✿</p>
    <button onClick={ () => { navigate('/post/post123');}}>查看Post 123</button>
    <button onClick={ () => { navigate('/post/post456');}}>查看Post 456</button>
    <button onClick={ () => { navigate('/post/post789');}}>查看Post 789</button>
    <Outlet />
    </> 
};

const PostPage = () => {
    let params = useParams ();
    return <p>Post ID:{ params.postId }</p>
} 

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
          <NavLink to="/post">
            <p>Post詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/post" element={<Post />}>
                <Route path=":postId" element={<PostPage />}/>
            </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
