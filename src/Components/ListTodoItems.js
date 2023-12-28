const ListTodoItems = ({ todo, deleteTodo, index }) => {
  return (
    <li className='listItems'>{todo}
      <button className='deleteBtn' onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
}

export default ListTodoItems;