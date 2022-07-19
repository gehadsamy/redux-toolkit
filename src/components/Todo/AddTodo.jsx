import { useSelector, useDispatch } from "react-redux";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";
import { addTask } from "../../redux/tasksSlice";

const AddTodo = () => {
  // const mylist = useSelector((state) => state.tasks.mylist);
	const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const dispatch = useDispatch();

  
  return (
    <div>
      <>
      <div className="inputs_container mx-auto" style={{ width: "35%" }}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="title">
          title
        </InputGroup.Text>
        <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
     
      </InputGroup>

      <FloatingLabel controlId="floatingTextarea1" label="my task details">
          <Form.Control
            as="textarea"
            placeholder="my task details" value={detail}
            style={{ height: "100px" }} onChange={(e)=>setDetail(e.target.value)}
          />
        </FloatingLabel>
        <Button className="mt-2" 
          onClick={() => {
            dispatch(addTask({ title: title, task: detail }));
            setTitle('');
            setDetail('')
          }}
        >
          Add
        </Button>
</div>

      </>
    </div>
  );
};

export default AddTodo;
