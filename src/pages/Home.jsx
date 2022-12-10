import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import styled from "styled-components"

import {useState} from 'react';
import Modal from '../components/Modal';
import { useSelector,useDispatch } from "react-redux";
import {complete} from '../reducers/actions'

/* icons */ 
import {AiOutlinePlus}  from 'react-icons/ai'

const HomeContainer = styled.div`
  
  background-color:#495464;
  width:393px;
  height: 852px;
  position: relative;

  .addItem {
    width:40px;
    height:40px;
    color:#EEEEEE;
    position: absolute;
    left: 77.95%;
    right: 11.79%;
    top: 90.49%;
    bottom: 4.81%;

    cursor: pointer;

  }
`

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleComplete = (todo) => {
    dispatch(complete(todo))
  }

  return (
    <HomeContainer>
    <Header/>
    <div>
    {todos.map((todo,idx)=> (
      <TodoItem key={idx} todo ={todo} handleComplete={handleComplete}/>
      ))}
    </div>
    <AiOutlinePlus className="addItem" onClick={()=>setIsModalOpen(!isModalOpen)}/>
    {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/> }

    
    </HomeContainer>

  )
  };
  
  
  export default Home;
  