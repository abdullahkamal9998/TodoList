import "./App.css";
import Todos from "./components/Todos";

import NewTodo from "./components/NewTodo";
import TodoContexProvider from "./store/todos-contex";

function App() {
  return (
    <TodoContexProvider>
      <NewTodo></NewTodo>
      <Todos></Todos>
    </TodoContexProvider>
  );
}

export default App;
