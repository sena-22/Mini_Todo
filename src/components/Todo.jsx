import TodoItem from "../components/TodoItem";
import { useSelector,useDispatch } from "react-redux";
import styled from "styled-components"
import {complete,handle_date} from '../reducers/actions';
import {useState,useEffect} from 'react'
import { getStringDate } from "../util/date";

const CompleteContainer = styled.div`
    background-color: #495464;
    /* width:393px;
    height: 852px; */
    position: relative;

`
const Todo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state)

  const baseTodos = data.state.todos
  const baseDate = data.date

  const [todos, setTodos] = useState(baseTodos);
  const [filteredTodos, setFilteredTodos] = useState(todos)
  
  const stringDate = getStringDate(baseDate)

  //날짜가 바뀔 때마다 todolist 변경
  useEffect(()=>{
    setFilteredTodos(todos.filter((e)=>(
      getStringDate(e.date) === stringDate))
    )
  },[baseDate])

  const handleComplete = (todo) => {
    dispatch(complete(todo))
  }


  return (
      <CompleteContainer>
      <div>
  {filteredTodos.map((todo,idx)=> (
    <TodoItem key={idx} todo ={todo} handleComplete={handleComplete}/>
      ))}
 </div>
      </CompleteContainer>
      )
};

export default Todo;


  

  