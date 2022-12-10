import TodoItem from "../components/TodoItem";
import { useSelector,useDispatch } from "react-redux";
import styled from "styled-components"
import {complete} from '../reducers/actions'

const CompleteContainer = styled.div`
    background-color: #495464;
    /* width:393px;
    height: 852px; */
    position: relative;

`
const Todo = () => {
    const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleComplete = (todo) => {
    dispatch(complete(todo))
  }

  return (
      <CompleteContainer>
      <div>
  {todos.map((todo,idx)=> (
    <TodoItem key={idx} todo ={todo} handleComplete={handleComplete}/>
      ))}
 </div>
      </CompleteContainer>
      )
};

export default Todo;


  

  