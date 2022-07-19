import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/Todo/AddTodo";
import TodoList from "./components/Todo/TodoList";


function App() {
  return (
    <div className="App">
      <h1 className="app-title">My Tasks</h1>
      <AddTodo />
      <TodoList />
    </div>

    
  );

  {/* <Router>

<Routes>
<Route element={<Home/>}  path="/"/>
<Route element={<Login/>}  path="Login"/>
<Route element={<Registration/>}  path="Registration"/>
<Route element={<NavBar/>} path="NavBar"/>

</Routes>



</Router> */}
}

export default App;
