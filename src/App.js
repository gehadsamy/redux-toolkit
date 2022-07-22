import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/Todo/AddTodo";
import TodoList from "./components/Todo/TodoList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
function App() {
  return (

<Router>

<Routes>
<Route element={<Home/>}  path="/Home"/>
<Route element={<Login/>}  path="login"/>
<Route element={<Registration/>}  path="/"/>

</Routes>



</Router> 
    
  );



{/* <div className="App">
<h1 className="app-title">My Tasks</h1>
<AddTodo />
<TodoList />
</div> */}
}

export default App;
