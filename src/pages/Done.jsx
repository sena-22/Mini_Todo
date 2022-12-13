import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import { useSelector,useDispatch } from "react-redux";
import styled from "styled-components"

const CompleteContainer = styled.div`
    background-color: #495464;
    width:393px;
    height: 852px;
    position: relative;
`
const Done = () => {
  const todos = useSelector((state) => state.state.todos);
  const filtered = todos.filter((todo)=> todo.isDone === true)

  return (
      <CompleteContainer>
      <Header/>
      <div>
  {filtered.map((todo,idx)=> (
    <TodoItem key={idx} todo ={todo} />
      ))}
 </div>
      </CompleteContainer>
      )
};

export default Done;


  

  