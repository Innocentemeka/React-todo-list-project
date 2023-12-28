import { useState } from 'react';
import './App.css';
import InputBox from './Components/InputBox';
import Button from './Components/Button';
import ListItems from './Components/ListTodoItems';

function App() {

  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const addtodos = () => {
    if (inputText.length > 0) {
      const tempTodo = todos;
      tempTodo.push(inputText);
      setInputText('');
    }
  }

  const deleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  }

  const deleteAllTodo = () => {
    setTodos([])
  }

  return (
    <div className="App">
      <ul>
        {todos.map((todo, i) => {
          return (
            <ListItems key={i} index={i} todo={todo} deleteTodo={deleteTodo} />
          )
        })}
      </ul>
      <InputBox placeholder='enter todo' value={inputText} onChange={(e) => { setInputText(e.target.value) }} />
      <div>
        <Button onClick={addtodos} label='Add Todo' />
        <Button onClick={deleteAllTodo} otherClasses='delete-all' label='remove all' />
      </div>
    </div>
  );
}

export default App;
