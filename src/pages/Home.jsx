import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import styled from "styled-components"

import React, {useState} from 'react';
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

const filterOptionList = [
  {value:"all",name:"전체"},
  {value:"completed",name:"완료"},
  {value:"not_started",name:" 할일"},
]

const ControlMenu = React.memo(({value, onChange, optionList}) => {
return <select className="ControlMenu" value={value} onChange={(e)=>onChange(e.target.value)}>
  {optionList.map((it,idx)=> (<option key={idx} value={it.value}>{it.name}</option>))}
</select>
})

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.state.todos);
  // console.log(todos)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleComplete = (todo) => {
    dispatch(complete(todo))
  }

  const [filter, setFilter] = useState('all');

  const getProcessedDiaryList = () => {
    //필터링용 함수
    const filterCallback = (todo) => {
        switch(filter) {
          case 'all' :
            return todo;
          case 'completed' :
            return todo.isDone === true;
          case 'not_started' :
            return todo.isDone === false;
        }
    }
    const filteredList =  todos.filter((it)=>filterCallback(it))
    return filteredList;
  }

  return (
    <HomeContainer>
    <Header/>
    <ControlMenu 
      value={filter}
      onChange={setFilter}
      optionList={filterOptionList}
    />
    <div>
    {getProcessedDiaryList().map((todo,idx)=> (
      <TodoItem key={idx} todo ={todo} handleComplete={handleComplete}/>
      ))}
    </div>
    <AiOutlinePlus className="addItem" onClick={()=>setIsModalOpen(!isModalOpen)}/>
    {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/> }

    
    </HomeContainer>

  )
  };
  
  
  export default Home;
  