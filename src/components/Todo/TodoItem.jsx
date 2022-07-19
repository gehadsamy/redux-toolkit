import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from "../../redux/tasksSlice";

const TodoItem = ({item}) => {
  const dispatch = useDispatch();
  const removeTask=()=>{
		dispatch(
			deleteTask({
				id: item.id
			})
		)
	}
  return (
    <>
    <div>
    <div>{item.title}</div>
    <div>{item.task}</div>
    <Button className="mt-2" 
          onClick={()=>{
            removeTask();
          }}>
          Delete
        </Button>
    </div>

    </>

  )
}

export default TodoItem