import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';


const TodoList = () => {

const mylist = useSelector((state) => state.tasks.mylist);
  
  return (
    <div>
        {
        mylist.map((item) => <TodoItem key={item.id} item={item}/>)
        }
    </div>
  )
}

export default TodoList